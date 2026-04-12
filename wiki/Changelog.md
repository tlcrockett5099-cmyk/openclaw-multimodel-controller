# Changelog

> Version history for Openclaw MultiModel Controller

---

## v1.1.0 — Current Release

**UI/UX Overhaul + New Features**

### 🆕 New Features
- **Skills Library** — 55+ built-in AI skills and Gemini Gems, searchable and activatable
- **Memory Bank** — Save important information from conversations; auto-injected as context
- **Patreon OAuth** — Connect your Patreon account to auto-verify Pro status
- **Inline Memory Save** — Save any AI response as a memory without leaving the chat
- **Active Skills Banner** — See which skills are active at the top of the chat
- **Mobile Bottom Sheet** — Swipe-up conversation list on mobile (no more sidebar overlap)
- **Suggestion Chip Carousel** — Scrollable prompt suggestions on the chat home screen

### 🎨 UI Improvements
- Animated gradient orb on empty chat screen
- Richer sidebar with recent chats, stats, and skill/memory counts
- Improved mobile navigation (Chat | Skills | History | Settings)
- Smoother sidebar slide-in animation
- Better space utilization on both mobile and desktop
- SerThrocken LLC logo in About/Credits section

### 🔧 Technical
- New CSS animations: `slide-in-left`, `slide-in-bottom`, `float`, `gradient-shift`
- SVG illustrations for empty states
- Skills injected into system prompt when active
- Zustand store updated with memory and skills persistence

---

## v1.0.0 — Initial Release

**Foundation Release**

### Features
- Multi-model AI chat (OpenAI, Claude, Gemini, Perplexity, Ollama, OpenRouter, Custom)
- Conversation history with search, export, and archive
- System prompt presets
- Image attachment and analysis (vision)
- Live camera capture for AI analysis
- Video frame extraction
- Text-to-Speech
- Google OAuth for Gemini
- Dark theme with 6 theme options (Pro)
- Electron desktop app (Windows, macOS, Linux)
- Android APK via Expo/React Native
- Python backend server with Patreon OAuth support
- Free and Pro tiers

---

## Roadmap

### v1.2.0 (Planned)
- [ ] Voice input / speech-to-text
- [ ] Multi-conversation split-view on desktop
- [ ] Plugin system for third-party extensions
- [ ] Conversation sharing via link
- [ ] Import/export skills and memories
- [ ] More theme customization

### v1.3.0 (Future)
- [ ] AI agent mode (multi-step tasks)
- [ ] File upload support (PDFs, documents)
- [ ] Collaborative chat rooms
- [ ] API for third-party integrations

---

*Openclaw MultiModel Controller — by SerThrocken (SerThrocken LLC)*
