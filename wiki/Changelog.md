# Changelog

> Openclaw MultiModel Controller — Version History

---

## v1.1.0 — Current Release

### 🎨 Claw OS Visual Identity (Completely Unique UI)
- **New design system** — deep midnight `#020914` base, electric teal `#14b8a6` + cyan `#06b6d4` accents
- **Dot-grid background** — teal radial-gradient dot pattern across the entire app
- **Glassmorphism panels** — `backdrop-filter: blur` with teal-tinted borders on all surfaces
- **68px icon-rail sidebar** (desktop) — hover tooltips, teal glow on active items, left-bar active indicator
- **Floating pill bottom nav** (mobile) — centered frosted-glass pill, not full-width bar
- **Teal chat bubbles** — user: teal→cyan gradient; AI: glass panel with 3px teal left-border
- **Typing animation** — three bouncing teal dots while AI responds
- **Custom animations** — `oc-fade-in`, `oc-slide-left`, `oc-slide-up`, `oc-float`, `oc-pulse-teal`, `oc-shimmer`
- **Claw-mark motifs** — diagonal stripe overlays, corner-cut clip-paths
- **Teal-accent scrollbars** throughout the app
- **Neon teal glow** on all active/focused elements

### 🛠️ Skills Library (61 Skills)
- **10 free skills**: Grammar Fixer, Story Expander, Code Reviewer, Debugger, Fact Checker, Research Assistant, Brainstormer, Idea Generator, Tutor, Math Teacher
- **51 Pro-only skills** with 🔒 lock badges and amber "Pro Only" button
- **5 Gemini Gems** (all Pro-only): Research, Code, Writing, Learning, Creative
- **Pro upgrade banner** at top of Skills page for non-Pro users
- **Custom skills** available to all users (no Pro required)
- Active skills banner in chat header

### 🧠 Memory Bank
- Save any AI response as a memory directly from the chat (inline 🧠 button)
- Full Memory Bank management page (`/memory`)
- Memories auto-injected into every conversation as context
- Label, view, and delete memories

### 🔐 Patreon OAuth
- **Connect with Patreon** button in Settings → Patreon
- Automatic Pro verification via Patreon API (requires Python backend)
- **Creator bypass** — "I am the creator/developer" option for SerThrocken
- Honor-system manual toggle still available as fallback

### 🏢 Credits & LLC Logo
- SerThrocken LLC logo displayed in Settings → Credits & Creator
- About section links to GitHub repo and Wiki

### 📚 Wiki Documentation (12 pages)
- Home, Features, Installation, Connections Guide, Skills Library, Memory Bank, Pro Features, Building Android, Building iOS, Troubleshooting, Contributing, Changelog

### 📦 Store Packages
- Google Play Store: full metadata, store listing, submission guide (`store/google-play/`)
- Apple App Store: full metadata, store listing, submission guide (`store/apple-store/`)
- `android/app.json` updated with iOS config
- `android/eas.json` updated for both platforms (development/preview/production)

### 🔧 Technical
- New `Memory` and `Skill` types with `proOnly` field
- Zustand store updated with `memories[]` and `customSkills[]` (persisted)
- `src/providers/patreon-oauth.ts` — OAuth helper with backend + fallback
- `src/providers/skills-library.ts` — 61 curated skills with pro flags
- `src/index.css` — complete Claw OS design system with CSS custom properties
- New routes: `/skills`, `/memory`
- `public/illustrations/` — SVG illustrations for empty states
- Build: ✅ 0 TypeScript errors

---

## v1.0.0 — Initial Release

- Multi-model AI chat (OpenAI, Claude, Gemini, Perplexity, Ollama, OpenRouter, Custom)
- Conversation history with search, export, and archive
- System prompt presets
- Image attachment and vision analysis
- Live camera capture for AI analysis
- Video frame extraction
- Text-to-Speech
- Google OAuth for Gemini
- Dark theme with theme options (Pro)
- Electron desktop app (Windows, macOS, Linux)
- Android app via Expo/React Native
- Python FastAPI backend with Patreon OAuth
- Free and Pro tiers

---

*Openclaw MultiModel Controller © SerThrocken LLC*
