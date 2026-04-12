# Memory Bank

> Saving and managing memories in Openclaw MultiModel Controller

---

## What Is the Memory Bank?

The **Memory Bank** is your personal knowledge store within Openclaw. Save important facts, preferences, or information from your conversations so the AI has context about you across all future chats.

Think of it like Google's "personal results" or ChatGPT's memory feature — but fully local and under your control.

---

## How to Save a Memory

### Method 1: From a Chat Message (Recommended)

1. During a conversation, hover over any AI response
2. Click the **💾 Save as Memory** button (appears in the message actions)
3. A small dialog pops up — add a label (optional)
4. Click **Save Memory**

The memory is saved instantly without leaving the chat.

### Method 2: From the Memory Bank Page

1. Open **Settings → Memory Bank** or navigate to the **Memory** section
2. Click **+ Add Memory**
3. Enter a label and the memory content
4. Click **Save**

---

## Managing Memories

From the **Memory Bank** page (Settings → Memory Bank or `/memory`):

| Action | How |
|--------|-----|
| View all memories | Browse the memory cards list |
| Delete a memory | Click the 🗑️ trash icon on any card |
| Edit a memory | Click the ✏️ edit icon |
| Clear all memories | "Clear All" button (with confirmation) |
| Add a new memory | "+ Add Memory" button |

---

## How Memories Work in Conversations

Memories are automatically injected into the system context when you start or continue a conversation. The AI "knows" your saved memories and can reference them.

**Example**:
- Memory: "I prefer Python over JavaScript for backend code"
- When you ask "What language should I use for this API?", the AI will suggest Python

---

## Memory Best Practices

### Good memories to save:
- Personal preferences ("I prefer concise answers")
- Your tech stack ("I use React + FastAPI + PostgreSQL")
- Project context ("I'm building a mobile app for pet owners")
- Communication style ("Explain things like I'm a beginner")
- Recurring facts ("My timezone is EST")

### Tips:
- Keep memories **concise** — short, factual statements work best
- Use **labels** to organize them (e.g., "Coding Preference", "Project Context")
- Delete outdated memories — old context can confuse the AI
- Review memories periodically to keep them relevant

---

## Privacy

All memories are stored **locally** in your device's localStorage. They are never sent to any server. Memories are only shared with the AI provider you're actively chatting with, as part of the conversation context.

---

## Memory Limits

| Tier | Memory Limit |
|------|-------------|
| Free | Unlimited (local storage) |
| Pro | Unlimited |

There's no hard limit on memories, but performance may decrease with very large numbers. Recommend keeping under 100 memories for optimal performance.
