# Features

> **Openclaw MultiModel Controller v1.1.0** — Complete Feature Reference  
> Created by SerThrocken (SerThrocken LLC)

---

## 🎨 Claw OS Interface

Openclaw ships with a fully custom visual identity unique to this application:

| Element | Design |
|---------|--------|
| Background | Deep midnight `#020914` with teal radial dot-grid overlay |
| Surfaces | Glassmorphism panels — `backdrop-filter: blur(16px)` with teal-tinted borders |
| Accent color | Electric teal `#14b8a6` + cyan `#06b6d4` (SerThrocken brand palette) |
| Sidebar (desktop) | 68px icon-only rail with hover tooltips — expands nothing, wastes nothing |
| Bottom nav (mobile) | Floating frosted-glass pill centered at the bottom — not a full-width bar |
| User bubbles | Teal→cyan gradient with teal glow shadow |
| AI bubbles | Glass panel with 3px teal left-border accent |
| Typing indicator | Three animated bouncing teal dots |
| Animations | `oc-fade-in`, `oc-slide-left`, `oc-slide-up`, `oc-float`, `oc-pulse-teal`, `oc-shimmer` |
| Claw motifs | Diagonal stripe overlays, corner-cut clip-paths |

---

## 💬 Chat

| Feature | Free | Pro |
|---------|------|-----|
| Multi-provider chat | ✅ | ✅ |
| Switch providers mid-chat | ✅ | ✅ |
| Image attachment & vision analysis | ✅ (5/day) | ✅ unlimited |
| Live camera capture | ✅ | ✅ |
| Video frame extraction | ✅ | ✅ |
| Text-to-Speech (TTS) | ✅ (500 chars/day) | ✅ unlimited |
| Star / bookmark messages | ✅ | ✅ |
| **Save message as Memory** (inline) | ✅ | ✅ |
| Active skills banner in chat | ✅ | ✅ |
| Mobile swipe-up conversation list | ✅ | ✅ |
| Animated suggestion chips | ✅ | ✅ |
| Typing dot animation | ✅ | ✅ |

---

## 🔌 AI Connections

| Provider | Models | Auth |
|----------|--------|------|
| **OpenAI** | GPT-4o, GPT-4o Mini, o1, o1-mini, o3-mini | API Key |
| **Anthropic Claude** | Claude Opus 4.5, Sonnet 4.5, Haiku 4.5, Claude 3.5 | API Key |
| **Google Gemini** | Gemini 2.5 Pro, 2.0 Flash, 1.5 Pro/Flash | API Key or Google OAuth |
| **Perplexity** | Sonar Large/Small/Huge 128k | API Key |
| **Ollama** | llama3.2, mistral, deepseek-r1, phi3, gemma2, qwen2.5 | Local (no key) |
| **OpenRouter** | 200+ models | API Key |
| **Custom / OpenAI-compatible** | Any | API Key (optional) |

---

## 🛠️ Skills Library

**61 total skills** — 10 free, 51 unlocked with Pro:

### Free Skills (no Pro required)
| Skill | Category |
|-------|----------|
| Grammar Fixer | Writing |
| Story Expander | Writing |
| Code Reviewer | Coding |
| Debugger | Coding |
| Fact Checker | Research |
| Research Assistant | Research |
| Brainstormer | Creative |
| Idea Generator | Creative |
| Tutor | Education |
| Math Teacher | Education |

### Pro-Only Skills (51 skills, require Pro)
All other skills across Writing, Coding, Research, Creative, Productivity, Analysis, Education, Health, Finance, Language categories — plus **5 Gemini Gems**.

See [Skills Library](Skills-Library) for the complete list.

---

## 🧠 Memory Bank

| Feature | Free | Pro |
|---------|------|-----|
| Save memories from chat (inline) | ✅ | ✅ |
| Save memories from Memory Bank page | ✅ | ✅ |
| View and manage all memories | ✅ | ✅ |
| Memories injected into conversations | ✅ | ✅ |
| Label memories | ✅ | ✅ |
| Delete memories | ✅ | ✅ |
| Storage limit | Device localStorage | Device localStorage |

---

## 🗂️ Conversation History

| Feature | Free | Pro |
|---------|------|-----|
| Saved conversations | 25 max | Unlimited |
| Search conversations | ✅ | ✅ |
| Export to JSON | ✅ | ✅ |
| Bulk archive | ✅ | ✅ |
| Star/favourite messages | ✅ | ✅ |
| Full-text search | ❌ | ✅ |
| Usage statistics dashboard | ❌ | ✅ |

---

## 🎨 Appearance

| Setting | Free | Pro |
|---------|------|-----|
| Claw OS dark theme | ✅ | ✅ |
| Font size (Small/Medium/Large) | ✅ | ✅ |
| Send-on-Enter toggle | ✅ | ✅ |
| Show timestamps toggle | ✅ | ✅ |
| Light theme | ❌ | ✅ |
| OLED Black theme | ❌ | ✅ |
| Solarized, Forest, Ocean themes | ❌ | ✅ |

---

## 🌟 Pro Features

Unlock with a **$5+/month Patreon pledge** at [patreon.com/TLG3D](https://patreon.com/TLG3D):

- ✦ Unlimited conversations (free: 25)
- ✦ Unlimited vision/image analysis (free: 5/day)
- ✦ Unlimited TTS (free: 500 chars/day)
- ✦ 51 additional Skills unlocked (free: 10 skills)
- ✦ All Gemini Gems unlocked
- ✦ All premium themes
- ✦ Unlimited system prompt presets
- ✦ Full statistics dashboard
- ✦ Bulk export (`.zip`)
- ✦ Priority support
- ✦ Pro badge in sidebar

**Activate Pro:**
1. **Patreon OAuth** (automatic) — connect Patreon account in Settings
2. **Honor system** — click "I've donated" after pledging
3. **Creator access** — "I am the creator/developer" for SerThrocken

---

## 📱 Platform Support

| Platform | Status | Package |
|----------|--------|---------|
| Web browser | ✅ Fully supported | Any browser |
| Android | ✅ APK available | `android/` (Expo) |
| Android Play Store | 🔄 Pending review | AAB via EAS Build |
| iOS | 🔄 Capacitor ready | `npx cap add ios` |
| iOS App Store | 🔄 Pending review | IPA via EAS Build |
| Windows (Electron) | ✅ Available | `npm run electron:build` |
| macOS (Electron) | ✅ Available | `npm run electron:build` |
| Linux (Electron) | ✅ Available | `npm run electron:build` |
