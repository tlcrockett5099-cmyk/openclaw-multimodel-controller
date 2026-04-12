# Memory Bank

> Inline memory saving and management in AI-MC v1.1.0

---

## What Is the Memory Bank?

The **Memory Bank** is a personal knowledge store that travels with you across all conversations. Save facts, preferences, project context, or anything else — the AI automatically receives your memories as context at the start of every conversation.

It works like Google's personalised results or ChatGPT's memory feature, but everything is stored **100% locally** on your device.

---

## Saving a Memory

### Method 1: Directly from Chat (Recommended)

1. Hover over any **AI response** in the chat
2. The action buttons appear — click the **🧠 brain icon** (Save as Memory)
3. A small dialog appears — optionally add a label
4. Click **Save** — memory is saved without leaving the chat

This is the key difference from other apps: you never have to navigate away to capture something useful.

### Method 2: From the Memory Bank Page

1. Navigate to **Memory Bank** (brain icon in sidebar, or Settings → Memory Bank)
2. Click **+ Add Memory**
3. Enter a label and the memory content
4. Click **Save**

---

## The Memory Bank Page

Access via the **Memory** item in the sidebar (desktop) or via Settings → Memory Bank.

The page shows all your saved memories as cards, each displaying:
- **Label** (if set)
- **Content preview**
- **Date saved**
- **Source** (conversation ID if saved from chat)
- **Delete** (🗑️) button

Other actions:
- **Clear All** — deletes every memory (with confirmation prompt)

---

## How Memories Work in Conversations

When you send a message, AI-MC prepends your saved memories to the conversation context. The AI "knows" everything in your Memory Bank.

**Example workflow:**
1. Save memory: *"I'm building a React + FastAPI app for pet owners"*
2. Next day, open a new chat and ask: *"What should my API endpoints look like?"*
3. The AI already knows your tech stack and domain — no re-explaining needed

---

## Memory Best Practices

**Save these kinds of things:**
- Personal preferences: *"I prefer concise, direct answers"*
- Tech stack: *"I use TypeScript, React, Tailwind CSS, and Supabase"*
- Project context: *"Current project: mobile app for pet adoption"*
- Communication style: *"Explain as if I'm a junior developer"*
- Recurring facts: *"My timezone is EST, working hours 9am–6pm"*

**Tips:**
- Keep each memory **short and factual** — one clear statement per memory
- Use **labels** to organise (e.g., "Work Prefs", "Project Alpha", "Coding Style")
- **Delete stale memories** — outdated context can confuse the AI
- Review your Memory Bank periodically to keep it relevant

---

## Privacy

All memories are stored in **browser localStorage / device storage** only. They are:
- Never sent to any AI-MC server
- Only shared with the AI provider you're actively chatting with, as inline context
- Exportable at any time (export the conversation that contains them)
- Fully deletable at any time

---

## Storage & Limits

| Aspect | Detail |
|--------|--------|
| Storage location | Device localStorage |
| Free limit | Unlimited (localStorage bound) |
| Pro limit | Unlimited |
| Recommended max | ~100 memories for best performance |
| Persistence | Survives app restarts; cleared only if you clear site data |
