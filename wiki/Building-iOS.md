# Building for iOS (Apple App Store)

> Complete guide to building AI-MC for iOS and submitting to the App Store

---

## Overview

AI-MC supports iOS through two approaches:
1. **Expo EAS Build** — easiest, cloud-based
2. **Capacitor + Xcode** — full native control

> ⚠️ **macOS Required**: iOS builds require macOS with Xcode installed (or EAS cloud builds).

---

## Method A: Expo EAS Build (Recommended)

EAS Build handles the complex iOS signing and build process in the cloud.

### Prerequisites

```bash
npm install -g eas-cli
eas login
```

You also need an **Apple Developer account** ($99/year at [developer.apple.com](https://developer.apple.com)).

### 1. Configure app.json for iOS

Edit `android/app.json` to add iOS config:

```json
{
  "expo": {
    "name": "AI-MC",
    "slug": "ai-multimodel-controller",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.com.aimc.controller",
      "buildNumber": "1",
      "supportsTablet": true,
      "infoPlist": {
        "NSCameraUsageDescription": "Used for live camera AI analysis",
        "NSMicrophoneUsageDescription": "Used for voice input",
        "NSPhotoLibraryUsageDescription": "Used to attach images to conversations"
      }
    },
    "android": {
      "package": "com.com.aimc.controller"
    }
  }
}
```

### 2. Configure eas.json for iOS

The `android/eas.json` is already configured. Verify it includes:

```json
{
  "build": {
    "preview": {
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "ios": {
        "credentialsSource": "remote"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your-apple-id@email.com",
        "ascAppId": "your-app-store-connect-app-id",
        "appleTeamId": "YOUR_TEAM_ID"
      }
    }
  }
}
```

### 3. Build for Simulator (Testing)

```bash
cd android
eas build --platform ios --profile preview
```

### 4. Build for App Store

```bash
cd android
eas build --platform ios --profile production
```

EAS will automatically handle:
- Code signing certificates
- Provisioning profiles
- App Store Connect API keys

### 5. Submit to App Store

```bash
cd android
eas submit --platform ios
```

---

## Method B: Capacitor + Xcode

### Prerequisites

- macOS 13+ (Ventura or later)
- Xcode 15+
- CocoaPods: `sudo gem install cocoapods`
- Apple Developer account

### 1. Add iOS to Capacitor

```bash
# In the main project root
npm install @capacitor/ios
npx cap add ios
```

### 2. Build the web app

```bash
npm run build
npx cap sync ios
```

### 3. Open in Xcode

```bash
npx cap open ios
```

### 4. Configure in Xcode

1. Select the `App` target
2. Go to **Signing & Capabilities**
3. Set your **Team** (Apple Developer account)
4. Set **Bundle Identifier**: `com.com.aimc.controller`
5. Update **Version** and **Build** numbers

### 5. Add App Icons

Add icons to `ios/App/App/Assets.xcassets/AppIcon.appiconset/`:

Required sizes:
| Size | Scale | Usage |
|------|-------|-------|
| 20×20 | @2x, @3x | Notification |
| 29×29 | @2x, @3x | Settings |
| 40×40 | @2x, @3x | Spotlight |
| 60×60 | @2x, @3x | App icon |
| 1024×1024 | @1x | App Store |

Use [makeappicon.com](https://makeappicon.com) or [appicon.co](https://appicon.co) to generate all sizes.

### 6. Add Splash Screen

Replace `ios/App/App/Assets.xcassets/Splash.imageset/` with your splash image.

### 7. Build Archive for App Store

1. In Xcode: Product → Archive
2. In the Organizer: Distribute App → App Store Connect
3. Upload to App Store Connect

---

## App Store Submission

### Prerequisites

1. Apple Developer account ($99/year)
2. App Store Connect app created at [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
3. Signed `.ipa` file

### Store Listing Assets Required

| Asset | Size | Notes |
|-------|------|-------|
| App Icon | 1024×1024 px | No rounded corners (Apple adds them) |
| iPhone screenshots | 6.5" required | Up to 10 screenshots |
| iPad screenshots | 12.9" recommended | Optional but recommended |
| App Preview video | Optional | 15-30 second demo |

Store listing metadata is in `store/apple-store/metadata/en-US/`.

### Submission Steps

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Click **+** → New App
3. Platform: iOS
4. Name: "AI-Multimodel-Controller"
5. Bundle ID: `com.com.aimc.controller`
6. Fill in metadata from `store/apple-store/metadata/en-US/`
7. Upload screenshots
8. Upload your `.ipa` via Xcode or Transporter
9. Submit for review

### App Review Guidelines Checklist

Before submitting, ensure:
- [ ] App doesn't collect data without consent
- [ ] Privacy Policy URL provided
- [ ] App works without internet (Ollama local mode)
- [ ] All API key fields are clearly labeled
- [ ] No misleading AI claims in store listing
- [ ] Camera/microphone permissions have usage descriptions

---

## TestFlight Distribution

To distribute beta builds before App Store approval:

1. Upload build to App Store Connect
2. Go to TestFlight tab
3. Add internal testers (team members)
4. Add external testers with a public link
5. Submit for TestFlight review (faster than App Store review)

---

## iOS-Specific Features

The iOS app includes:
- **Haptic feedback** for message send/receive
- **Safe area** padding for notch and home bar
- **Dark mode** following system appearance
- **Keyboard avoidance** for chat input
- **Background app refresh** support (optional)

---

## Troubleshooting iOS Build

| Issue | Solution |
|-------|----------|
| Code signing error | Check team and bundle ID in Xcode |
| CocoaPods error | Run `pod install` in `ios/App/` |
| Build fails on M1 Mac | Use Rosetta terminal or `arch -x86_64` |
| Capacitor plugin error | Run `npx cap sync ios` again |
| App rejected for privacy | Add all NSUsageDescription keys to Info.plist |
