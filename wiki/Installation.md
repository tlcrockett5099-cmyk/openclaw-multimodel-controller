# Installation & Setup

> **Openclaw MultiModel Controller** — by SerThrocken

---

## Prerequisites

| Tool | Version | Required For |
|------|---------|-------------|
| Node.js | 18+ | All platforms |
| npm | 9+ | All platforms |
| Python | 3.10+ | Backend server (optional) |
| Android Studio | Latest | Android build |
| Xcode | 15+ | iOS build (macOS only) |
| Java JDK | 17+ | Android build |

---

## 🌐 Web / Development

```bash
# Clone
git clone https://github.com/SerThrocken/openclaw-multimodel-controller.git
cd openclaw-multimodel-controller

# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev
```

---

## 🖥️ Desktop (Electron)

### Development
```bash
npm run electron:dev
```

### Production Build
```bash
npm run electron:build
```
Outputs installer to `dist/` folder (`.exe` for Windows, `.dmg` for macOS, `.AppImage` for Linux).

### Windows Quick Start
Double-click `start.bat` to launch the Electron app.

### Linux/macOS Quick Start
```bash
chmod +x start.sh
./start.sh
```

---

## 🐍 Python Backend Server (Optional)

The Python server enables Patreon OAuth verification and enhanced features.

```bash
cd server
pip install -r requirements.txt
python main.py
```

The server runs on `http://localhost:7860` by default.

### Configuration
Edit `server/config.py` to set:
- `patreon_client_id` — Your Patreon OAuth App Client ID
- `patreon_client_secret` — Your Patreon OAuth App Client Secret
- `patreon_campaign_id` — Your Patreon Campaign ID
- `bind_port` — Server port (default: 7860)

---

## 📱 Android Installation

### Option 1: Download APK (Recommended for most users)
Download the latest APK from the [Releases](https://github.com/SerThrocken/openclaw-multimodel-controller/releases) page and install directly.

### Option 2: Build from Source
See [Building for Android](Building-Android) for full instructions.

### Option 3: Google Play Store
Install from the Google Play Store (pending review).

---

## 🍎 iOS Installation

### Option 1: TestFlight
Join the TestFlight beta (link in README).

### Option 2: Build from Source
See [Building for iOS](Building-iOS) for full instructions.

### Option 3: App Store
Install from the Apple App Store (pending review).

---

## ⚙️ First Run Configuration

1. Launch the app
2. The **Welcome Screen** will appear — click "Get Started"
3. Go to **Connections** and add your first AI provider
4. Start chatting on the **Chat** tab

---

## Environment Variables

Create a `.env` file in the project root (optional):

```env
VITE_DEFAULT_BACKEND=http://localhost:7860
VITE_APP_VERSION=1.0.0
```

---

*See [Connections Guide](Connections-Guide) for setting up AI providers.*
