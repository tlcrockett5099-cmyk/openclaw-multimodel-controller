# Contributing to AI-MC

> SerThrocken/ai-multimodel-controller

---

## Project Structure

```
ai-multimodel-controller/
├── src/                        # Main React + TypeScript + Tailwind app
│   ├── components/
│   │   ├── camera/             # Live camera view
│   │   ├── chat/               # Chat interface & message bubbles
│   │   ├── connections/        # AI provider management
│   │   ├── editor/             # Image & video editors
│   │   ├── history/            # Conversation history
│   │   ├── layout/             # Layout, Sidebar (icon rail), BottomNav (pill)
│   │   ├── memory/             # Memory Bank page
│   │   ├── onboarding/         # Welcome screen, OAuth callbacks
│   │   ├── settings/           # Settings page (all sections)
│   │   └── skills/             # Skills Library page
│   ├── context/                # Toast notifications
│   ├── hooks/                  # Custom React hooks
│   ├── providers/              # API clients, OAuth helpers, skills library
│   ├── store/                  # Zustand global state
│   └── types/                  # TypeScript interfaces
├── server/                     # Python FastAPI backend (optional)
├── android/                    # Expo/React Native Android + iOS (EAS)
├── public/illustrations/       # SVG empty-state illustrations
├── store/google-play/          # Play Store metadata & submission guide
├── store/apple-store/          # App Store metadata & submission guide
└── wiki/                       # This documentation
```

---

## Design System

All UI must follow the **Claw OS** design system defined in `src/index.css`:

| CSS Class | Use For |
|-----------|---------|
| `oc-bg-grid` | Page backgrounds (dot-grid pattern) |
| `oc-glass` | Standard glassmorphism panel |
| `oc-glass-strong` | More opaque glass (modals, sheets) |
| `oc-card` | Surface cards |
| `oc-card-hover` | Cards with hover lift effect |
| `oc-glow-teal` | Teal neon glow shadow |
| `oc-glow-teal-sm` | Subtle teal glow |
| `oc-btn-primary` | Teal gradient action button |
| `oc-gradient-text` | Teal→cyan gradient text |
| `oc-clip-br` | Corner-cut clip (bottom-right) |
| `oc-border-teal` | Teal-tinted border |
| `oc-border-active` | Glowing active border |
| `animate-oc-fade` | Page/element entrance |
| `animate-oc-pulse` | Pulsing teal glow |

**CSS variables** (use `style={{ color: 'var(--oc-teal)' }}` etc.):
- `--oc-bg` `--oc-surface` `--oc-surface2` `--oc-border`
- `--oc-teal` `--oc-cyan` `--oc-teal-dark` `--oc-teal-glow`
- `--oc-text` `--oc-muted` `--oc-pro`

---

## Coding Standards

- **TypeScript** — all new code must be typed; no `any`
- **Functional components** with React hooks only
- **Tailwind CSS** for layout/spacing; CSS variables for colors
- **Zustand** for global state; `useState` for local component state
- **lucide-react** for all icons
- **No inline styles for layout** — use Tailwind; inline styles only for dynamic CSS var values

---

## Adding a New Skill

Edit `src/providers/skills-library.ts`:

```typescript
{
  id: 'unique-kebab-id',
  name: 'Skill Display Name',
  description: 'One-sentence description of what this skill does.',
  category: 'Writing',  // existing category
  systemPrompt: 'You are a specialist in... When the user asks...',
  icon: '🎯',
  tags: ['tag1', 'tag2'],
  provider: 'all',       // or a specific ProviderType
  proOnly: true,         // true for Pro, false for free
},
```

Free skills should have `proOnly: false`. Add sparingly — the current free set (10 skills) is intentional.

---

## Adding a New AI Provider

1. Add the type to `src/types/index.ts` → `ProviderType`
2. Add a template to `src/providers/templates.ts` → `PROVIDER_TEMPLATES`
3. Add the API fetch logic to `src/providers/api.ts`
4. Test with the **Test Connection** (⚡) button in the Connections UI

---

## Reporting Bugs

Open an issue at [github.com/SerThrocken/ai-multimodel-controller/issues](https://github.com/SerThrocken/ai-multimodel-controller/issues) with:
- Steps to reproduce
- Expected vs actual behaviour
- Browser / OS / platform info
- Screenshots if applicable

Pro supporters get priority bug-fix response via Patreon.

---

*Created by SerThrocken — SerThrocken LLC*
