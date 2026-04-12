# Installation & Setup

> **Openclaw MultiModel Controller v1.1.0** · by SerThrocken

---

## Prerequisites

| Tool | Minimum Version | Required For |
|------|----------------|--------------|
| Node.js | 18.x | All platforms |
| npm | 9.x | All platforms |
| Python | 3.10+ | Backend server (optional) |
| Android Studio | Latest stable | Android native build |
| Xcode | 15+ | iOS build (macOS only) |
| Java JDK | 17+ | Android native build |

---

## 🌐 Web / Development

```bash
# 1. Clone
git clone https://github.com/SerThrocken/openclaw-multimodel-controller.git
cd openclaw-multimodel-controller

# 2. Install
npm install

# 3. Start dev server
npm run dev
# Opens at http://localhost:5173
```

The app launches with the **Claw OS** interface — deep midnight background with teal dot-grid, icon-rail sidebar, and floating pill navigation.

---

## 🖥️ Desktop (Electron)

### Development (with hot reload)
```bash
npm run electron:dev
```

### Production Build
```bash
npm run electron:build
```
Outputs to `dist/`:
- Windows: `.exe` installer (NSIS)
- macOS: `.dmg`
- Linux: `.AppImage`

### Quick Launch Scripts
- **Windows**: Double-click `start.bat`
- **Linux / macOS**: `chmod +x start.sh && ./start.sh`

---

## 🐍 Python Backend Server (Optional)

The backend server enables **Patreon OAuth Pro verification** and acts as an API proxy for CORS-restricted environments.

```bash
cd server
pip install -r requirements.txt
python main.py
# Runs at http://localhost:7860
```

### Configuration (`server/config.py`)
```python
patreon_client_id     = ""   # Patreon OAuth App Client ID
patreon_client_secret = ""   # Patreon OAuth App Client Secret
patreon_campaign_id   = ""   # Your Patreon campaign ID
bind_port             = 7860 # Server port
```

If the server is not running, all AI features still work — only Patreon OAuth auto-verification is unavailable (the honor-system Pro toggle still works).

---

## 📱 Android

### Option A: Download APK (easiest)
Download the latest APK from the [Releases](https://github.com/SerThrocken/openclaw-multimodel-controller/releases) page and install directly on your Android device.

### Option B: EAS Build
```bash
npm install -g eas-cli
eas login
cd android
eas build --platform android --profile preview
# Downloads a .apk
```

### Option C: Google Play Store
Install from the Play Store (pending review — check repo for current link).

### Option D: Capacitor (main project)
```bash
npm run build
npx cap sync android
npx cap open android  # Opens Android Studio
```

---

## 🍎 iOS

### Option A: EAS Build
```bash
cd android
eas build --platform ios --profile production
```

### Option B: Capacitor + Xcode
```bash
npm install @capacitor/ios
npx cap add ios
npm run build
npx cap sync ios
npx cap open ios  # Opens Xcode
```

Requires macOS + Xcode 15+ + Apple Developer account.

---

## ⚙️ First-Run Setup

1. **Launch** the app — Claw OS interface loads
2. **Connections** tab → **+ Add Connection** → choose a provider
3. Enter your API key (or leave blank for Ollama)
4. Toggle the connection **enabled** (green dot appears in sidebar)
5. Go to **Chat** tab and start a conversation

> 💡 **No API key?** Ollama runs completely free on your local machine.  
> Install from [ollama.com](https://ollama.com), run `ollama pull llama3.2`, then add an Ollama connection with `http://localhost:11434`.

---

## Project Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (web) |
| `npm run build` | Production web build → `dist/` |
| `npm run lint` | ESLint check |
| `npm run preview` | Preview production build |
| `npm run electron:dev` | Electron + Vite concurrent dev |
| `npm run electron:build` | Electron production build |
| `npx cap sync` | Sync web build to Capacitor |
| `npx cap open android` | Open Capacitor Android in Android Studio |
| `npx cap open ios` | Open Capacitor iOS in Xcode |
