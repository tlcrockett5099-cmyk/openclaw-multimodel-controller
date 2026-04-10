"""
/conversations  — save and retrieve chat conversations locally.

Conversations are stored in server/conversations.json on the user's PC.
This file is gitignored (like config.json) so saved chats are never
committed to the repository.

All write operations use an atomic temp-file + rename pattern and set
0600 permissions on Unix so other users on the machine cannot read the
saved conversations.
"""

from __future__ import annotations

import json
import os
import stat
import tempfile
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

CONVERSATIONS_PATH = Path(__file__).parent.parent / "conversations.json"

router = APIRouter()


# ---------------------------------------------------------------------------
# Data models
# ---------------------------------------------------------------------------

class ChatMessage(BaseModel):
    role: str
    content: str


class Conversation(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str = "Untitled"
    created_at: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )
    updated_at: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )
    backend: Optional[str] = None
    model: Optional[str] = None
    messages: list[ChatMessage] = Field(default_factory=list)


# ---------------------------------------------------------------------------
# Storage helpers
# ---------------------------------------------------------------------------

def _load_all() -> list[dict]:
    if not CONVERSATIONS_PATH.exists():
        return []
    try:
        data = json.loads(CONVERSATIONS_PATH.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except Exception:
        return []


def _save_all(conversations: list[dict]) -> None:
    """Persist conversations atomically with owner-only permissions."""
    tmp_dir = CONVERSATIONS_PATH.parent
    try:
        fd, tmp_path = tempfile.mkstemp(dir=tmp_dir, suffix=".tmp")
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as f:
                json.dump(conversations, f, indent=2, ensure_ascii=False)
            try:
                os.chmod(tmp_path, stat.S_IRUSR | stat.S_IWUSR)  # 0o600
            except Exception:
                pass  # Non-POSIX filesystem — skip
            Path(tmp_path).replace(CONVERSATIONS_PATH)
        except Exception:
            try:
                os.unlink(tmp_path)
            except Exception:
                pass
            raise
    except Exception:
        # Fall back to simple write if atomic write fails
        CONVERSATIONS_PATH.write_text(
            json.dumps(conversations, indent=2, ensure_ascii=False),
            encoding="utf-8",
        )


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@router.get("/conversations")
def list_conversations():
    """Return all saved conversations as lightweight summaries (no messages)."""
    conversations = _load_all()
    summaries = [
        {
            "id":            c.get("id"),
            "title":         c.get("title", "Untitled"),
            "created_at":    c.get("created_at"),
            "updated_at":    c.get("updated_at"),
            "backend":       c.get("backend"),
            "model":         c.get("model"),
            "message_count": len(c.get("messages", [])),
        }
        for c in conversations
    ]
    # Most recently updated first
    summaries.sort(key=lambda x: x.get("updated_at") or "", reverse=True)
    return summaries


@router.get("/conversations/{conversation_id}")
def get_conversation(conversation_id: str):
    """Return a single conversation including all messages."""
    for c in _load_all():
        if c.get("id") == conversation_id:
            return c
    raise HTTPException(status_code=404, detail="Conversation not found")


@router.post("/conversations", status_code=201)
def save_conversation(body: Conversation):
    """Save a new conversation or overwrite an existing one with the same id."""
    conversations = _load_all()
    data = body.model_dump()
    for i, c in enumerate(conversations):
        if c.get("id") == body.id:
            # Update in place, refresh updated_at
            data["updated_at"] = datetime.now(timezone.utc).isoformat()
            conversations[i] = data
            _save_all(conversations)
            return data
    # New conversation
    conversations.append(data)
    _save_all(conversations)
    return data


@router.delete("/conversations/{conversation_id}", status_code=204)
def delete_conversation(conversation_id: str):
    """Permanently delete a saved conversation."""
    conversations = _load_all()
    updated = [c for c in conversations if c.get("id") != conversation_id]
    if len(updated) == len(conversations):
        raise HTTPException(status_code=404, detail="Conversation not found")
    _save_all(updated)
