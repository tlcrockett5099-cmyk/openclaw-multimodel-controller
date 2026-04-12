# Contributing to Openclaw

> Thank you for your interest in contributing to Openclaw MultiModel Controller!

---

## Getting Started

1. Fork the repository: [github.com/SerThrocken/openclaw-multimodel-controller](https://github.com/SerThrocken/openclaw-multimodel-controller)
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/openclaw-multimodel-controller.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Run the build: `npm run build`
7. Submit a pull request

---

## Project Structure

```
openclaw-multimodel-controller/
├── src/                        # Main React + TypeScript app
│   ├── components/             # UI components
│   │   ├── chat/               # Chat interface
│   │   ├── connections/        # AI provider management
│   │   ├── history/            # Conversation history
│   │   ├── layout/             # App layout (sidebar, nav)
│   │   ├── memory/             # Memory bank
│   │   ├── onboarding/         # Welcome + OAuth callbacks
│   │   ├── settings/           # Settings page
│   │   └── skills/             # Skills library
│   ├── context/                # React context (Toast, etc.)
│   ├── hooks/                  # Custom React hooks
│   ├── providers/              # API clients and OAuth helpers
│   ├── store/                  # Zustand state management
│   └── types/                  # TypeScript type definitions
├── server/                     # Python FastAPI backend (optional)
│   ├── routes/                 # API route handlers
│   ├── backends/               # AI provider backends
│   └── ui/                     # Tray icon and web UI
├── android/                    # Expo/React Native Android app
├── public/                     # Static assets
├── wiki/                       # This wiki
├── store/                      # App Store / Play Store assets
│   ├── google-play/            # Play Store metadata
│   └── apple-store/            # App Store metadata
└── docs/                       # Developer documentation
```

---

## Coding Standards

- **TypeScript**: All new code must be TypeScript with proper types
- **Components**: Functional components with React hooks
- **Styling**: Tailwind CSS utility classes only (no inline styles unless dynamic)
- **State**: Zustand store for global state, local `useState` for component state
- **Icons**: Use `lucide-react` for all icons
- **Colors**: Follow the existing color palette (slate, blue, amber, etc.)

---

## Adding a New AI Provider

1. Add the provider type to `src/types/index.ts` → `ProviderType`
2. Add a template to `src/providers/templates.ts` → `PROVIDER_TEMPLATES`
3. Add the API call logic to `src/providers/api.ts`
4. Test with the Test Connection feature

---

## Adding a New Skill

1. Open `src/providers/skills-library.ts`
2. Add your skill to the `BUILTIN_SKILLS` array:
```typescript
{
  id: 'unique-skill-id',
  name: 'Skill Name',
  description: 'Brief description of what this skill does',
  category: 'Writing', // must match existing category
  systemPrompt: 'You are a specialist in... When the user asks...',
  icon: '🎯',
  tags: ['relevant', 'tags'],
  provider: 'all', // or specific provider type
}
```

---

## Reporting Bugs

1. Check [existing issues](https://github.com/SerThrocken/openclaw-multimodel-controller/issues)
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Device/OS/browser info

**Pro supporters** get priority bug fix response via Patreon.

---

## Feature Requests

1. Open a [Feature Request issue](https://github.com/SerThrocken/openclaw-multimodel-controller/issues/new)
2. Describe the feature clearly
3. Explain the use case

---

## Code of Conduct

- Be respectful and constructive
- Welcome contributors of all experience levels
- Credit others' work appropriately
- Follow the project's existing patterns

---

## License

Openclaw MultiModel Controller is open source. See `LICENSE` in the repository root.

---

*Created by SerThrocken — SerThrocken LLC*
