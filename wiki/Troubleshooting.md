# Troubleshooting

> Common issues and solutions for Openclaw MultiModel Controller v1.1.0

---

## Installation

### `npm install` fails
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
```bash
npm run dev -- --port 5174
```

---

## Visual / UI Issues

### The background looks plain dark grey instead of the Claw OS dot-grid
- Hard-refresh the page: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (macOS)
- Clear browser cache and reload
- Ensure the build is fresh: `npm run build && npm run preview`

### Glassmorphism blur not showing
- `backdrop-filter: blur()` is not supported in Firefox by default  
- Enable it in Firefox: `about:config` → set `layout.css.backdrop-filter.enabled = true`
- Chrome, Edge, Safari, and mobile browsers all support it natively

### Floating pill bottom nav not visible on mobile
- Scroll up — the pill is fixed above the safe-area inset at the bottom of the screen
- If the page content covers it, check that `main` has `pb-20 md:pb-0` in Layout.tsx

### Desktop sidebar shows full drawer instead of icon rail
- Resize your browser — the icon rail only appears at the `md` breakpoint (768px+)
- Check that `Sidebar.tsx` is the current version (icon rail with 68px width)

---

## AI Provider Issues

### "401 Unauthorized"
- Check your API key is correct and hasn't expired
- Connections → Edit provider → re-enter the API key

### "429 Too Many Requests"
- You've hit the provider's rate limit — wait 1–2 minutes
- Consider upgrading your plan with the AI provider

### "Network Error" / "Failed to fetch"
- Check internet connection
- Try with a different provider
- Start the Python backend: `python server/main.py` — it proxies requests and resolves CORS issues

### Ollama "Connection Refused"
- Start Ollama: `ollama serve` (or open the Ollama desktop app)
- Verify it's running: open `http://localhost:11434` — should show `{"version":"x.x.x"}`
- Pull a model first: `ollama pull llama3.2`

### Google Gemini OAuth not working
- Set your Google OAuth Client ID in Settings → Integrations → Google Sign-In
- Add `http://localhost:5173/oauth-callback` to your Google Cloud Console authorized redirect URIs
- Allow popups for the app URL in your browser

---

## Chat Issues

### Messages not sending
- Check that at least one provider is enabled (teal dot shows in the sidebar)
- Verify the provider's API key is valid with the **Test** button (⚡) in Connections
- Check the provider isn't rate-limited

### AI responses are cut off
- The model hit its max token limit — go to Connections → Edit → increase **Max Tokens**
- Free-tier API plans often have lower token limits

### TTS (Text-to-Speech) not playing
- Check system/browser audio is not muted
- Free limit: 500 chars/day — a warning banner appears when you approach the limit
- Upgrade to Pro for unlimited TTS

### Camera capture not working on mobile
- Grant camera permission to the app/browser
- iOS Safari: Settings → Safari → Camera → Allow

### "Save as Memory" button not visible on AI messages
- Hover over the message (desktop) or the button is in the action row below the bubble
- The action row shows on hover (desktop) or tap (mobile)

---

## Skills Issues

### Skill shows 🔒 "Pro Only"
- Activate Pro in **Settings → 🌟 Pro** or via **Settings → Patreon → Connect with Patreon**
- Only 10 skills are available without Pro — see [Skills Library](Skills-Library)

### Active skills banner not showing in chat
- Go to Skills page and confirm at least one skill is activated (shows "✓ Active")
- The banner only appears when 1+ skills are active

### Custom skill not saving
- Both **Name** and **System Prompt** fields are required
- The form won't submit if either is empty

---

## Memory Bank Issues

### Memories not persisting after refresh
- Openclaw stores memories in browser localStorage — this data is cleared if you clear site data
- Private/incognito browsing does not persist localStorage across sessions
- Use a regular browser session for persistent memories

### Memory Bank page is empty
- If you haven't saved any memories yet, you'll see the empty state illustration
- Save memories from chat using the 🧠 button on any AI message

---

## Pro / Patreon Issues

### Patreon OAuth popup is blocked
- Allow popups for the app URL in your browser settings
- Chrome: click the popup-blocked icon (⊕) in the address bar → Allow

### Pro not activating after connecting Patreon
- Ensure your pledge is **$5+/month** and the payment has processed (allow 5–10 min)
- The server checks for `is_active_patron` — pending or failed payments won't qualify
- Use the honor-system toggle if OAuth fails: Settings → 🌟 Pro → "I've donated"

### Backend server required for Patreon OAuth but not running
- Start it: `python server/main.py` from the `server/` directory
- If server won't start, install dependencies: `pip install -r requirements.txt`
- Without the server, use the manual honor-system toggle instead

### Pro status lost after reinstall / clearing data
- Re-activate via Settings → 🌟 Pro → "I've donated"
- Or re-connect Patreon OAuth with the server running

---

## Build Issues

### TypeScript errors
```bash
npx tsc --noEmit  # show all type errors without building
```

### Vite build fails
```bash
rm -rf dist
npm run build
```

### Android EAS Build fails
- Ensure you're logged in: `eas login`
- Check `android/app.json` for correct `bundleIdentifier` / `package`
- Run `eas build:configure` from the `android/` directory

### iOS build fails (CocoaPods)
```bash
cd ios/App
pod deintegrate
pod install
```

---

## Getting Help

1. **GitHub Issues**: [github.com/SerThrocken/openclaw-multimodel-controller/issues](https://github.com/SerThrocken/openclaw-multimodel-controller/issues)
2. **Patreon (Pro supporters get priority response)**: [patreon.com/TLG3D](https://patreon.com/TLG3D)
3. **Wiki**: Check other pages for detailed guides
