# Troubleshooting

> Common issues and solutions for Openclaw MultiModel Controller

---

## Installation Issues

### `npm install` fails
```bash
# Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
```bash
# Use a different port
npm run dev -- --port 5174
```

---

## AI Provider Issues

### "401 Unauthorized" Error
- **Cause**: Invalid or expired API key
- **Fix**: Go to Connections → Edit provider → Re-enter API key

### "429 Too Many Requests" Error
- **Cause**: You've hit the provider's rate limit
- **Fix**: Wait 1-2 minutes and try again, or upgrade your plan with the provider

### "Network Error" / "Failed to fetch"
- **Cause**: CORS issue, blocked network, or server down
- **Fix**: 
  1. Check your internet connection
  2. Verify the API key is correct
  3. Try with a different provider
  4. Start the Python backend server for proxy support

### Ollama "Connection Refused"
- **Cause**: Ollama is not running
- **Fix**: Start Ollama: `ollama serve` (or launch the Ollama desktop app)
- **Check**: Visit `http://localhost:11434` in browser — should show `{"version":"x.x.x"}`

### Gemini Google OAuth not working
- **Fix**: 
  1. Ensure you've set the Google OAuth Client ID in Settings → Integrations
  2. Allow popups for the Openclaw URL in your browser
  3. Check that `http://localhost:5173/oauth-callback` is in your Google Cloud Console authorized redirect URIs

---

## Chat Issues

### Messages not sending
- Check that a provider is enabled (blue dot in connections)
- Ensure an active conversation is selected or a new one will be created
- Check the provider's API key is valid

### AI responses cut off
- The model hit its max token limit — go to Connections → Edit → increase Max Tokens
- Some free tier accounts have token limits

### TTS (Text-to-Speech) not working
- **Browser**: Ensure the browser has permission to play audio
- **Daily limit**: Free tier is limited to 500 chars/day — upgrade to Pro for unlimited
- Check system volume is not muted

### Image attachment not showing
- Vision/image analysis requires a multimodal model (GPT-4o, Claude 3, Gemini)
- Free tier limited to 5 images/day — upgrade to Pro

---

## Mobile Issues

### Bottom navigation overlaps content on iOS
- This is handled by safe area insets — ensure you're running the latest version
- If using the web app in Safari, add to home screen for best experience

### Keyboard pushes content off screen
- This is a known issue with some Android WebViews
- For best mobile experience, install via the Android APK

### App not loading after update
- Clear app cache: Settings (phone) → Apps → Openclaw → Clear Cache
- Or hard-refresh the browser: Ctrl+Shift+R (desktop) / pull-down to refresh

---

## Desktop (Electron) Issues

### Electron app won't start
```bash
# Kill any hanging processes and retry
npm run electron:dev
```

### "Application cannot be opened" on macOS
- Go to System Preferences → Security & Privacy → Allow apps from: App Store and identified developers
- Or right-click the app → Open → Open anyway

### White screen on launch (Windows)
- Try running as administrator
- Clear Electron cache: `%APPDATA%\openclaw\Cache`

---

## Build Issues

### TypeScript errors
```bash
# Check for type errors
npx tsc --noEmit
```

### Vite build fails
```bash
# Clean dist and rebuild
rm -rf dist
npm run build
```

### Android build fails
- Ensure Java JDK 17 is installed and `JAVA_HOME` is set
- In Android Studio: File → Invalidate Caches / Restart

### iOS build fails (CocoaPods)
```bash
cd ios/App
pod deintegrate
pod install
```

---

## Data & Storage Issues

### Conversations not saving
- Check browser localStorage is not blocked (private/incognito mode)
- Ensure you're not exceeding the 25-conversation free tier limit
- Try exporting and re-importing conversations

### Settings reset after update
- This can happen after major version updates that change the storage schema
- Re-configure your providers in Connections
- Your API keys are not stored after a schema reset for security

### "Storage full" warning
- Archive old conversations: History → Select All → Archive
- This exports to JSON and removes from app storage

---

## Pro / Patreon Issues

### Pro not activating after Patreon payment
- Allow 5-10 minutes for Patreon to process the payment
- Try the manual "I've donated — unlock Pro" button in Settings → 🌟 Pro
- Contact SerThrocken on Patreon if the issue persists

### Patreon OAuth popup blocked
- Allow popups for the app URL in your browser settings
- Chrome: Click the popup blocked icon in the address bar → Allow

### Lost Pro status after reinstall
- Pro status is stored locally — re-activate via Settings → 🌟 Pro → "I've donated"
- Or re-connect Patreon OAuth if the Python server is running

---

## Getting More Help

1. **GitHub Issues**: [github.com/SerThrocken/openclaw-multimodel-controller/issues](https://github.com/SerThrocken/openclaw-multimodel-controller/issues)
2. **Patreon**: Pro supporters get priority support at [patreon.com/TLG3D](https://patreon.com/TLG3D)
3. **Wiki**: Check other Wiki pages for detailed guides
