# Building for Android (Google Play Store)

> Complete guide to building AI-MC for Android and submitting to Google Play

---

## Overview

AI-MC uses **Expo EAS Build** for the React Native Android app and **Capacitor** for the web-based Android app. This guide covers both.

---

## Method A: Expo EAS Build (Recommended)

The `android/` folder contains an Expo/React Native app ready for EAS Build.

### Prerequisites

```bash
npm install -g eas-cli
eas login  # login with your Expo account
```

### 1. Configure app.json

Edit `android/app.json`:
```json
{
  "expo": {
    "name": "AI-MC",
    "slug": "ai-multimodel-controller",
    "version": "1.0.0",
    "android": {
      "package": "com.com.aimc.controller",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0f172a"
      }
    }
  }
}
```

### 2. Build APK (for testing)

```bash
cd android
eas build --platform android --profile preview
```

This generates a `.apk` file you can install directly on Android devices.

### 3. Build AAB (for Play Store)

```bash
cd android
eas build --platform android --profile production
```

This generates an `.aab` (Android App Bundle) required by the Play Store.

### 4. Submit to Play Store

```bash
cd android
eas submit --platform android
```

Configure `android/eas.json` submission settings with your Google Play service account.

---

## Method B: Capacitor Build

The main Vite project uses Capacitor for Android.

### Prerequisites

- Android Studio installed
- Java JDK 17+
- Android SDK (API 33+)

### 1. Build the web app

```bash
npm run build
```

### 2. Sync Capacitor

```bash
npx cap sync android
```

### 3. Open in Android Studio

```bash
npx cap open android
```

### 4. Build APK or AAB

In Android Studio:
- **APK**: Build → Build Bundle(s) / APK(s) → Build APK(s)
- **AAB**: Build → Generate Signed Bundle / APK → Android App Bundle

### 5. Sign for Play Store

1. In Android Studio: Build → Generate Signed Bundle / APK
2. Create a new keystore (or use existing)
3. Fill in key details
4. Select **Release** build variant
5. Build

⚠️ **Keep your keystore file safe** — you cannot update the app on Play Store without it.

---

## Play Store Submission

### Prerequisites

1. Google Play Developer account ($25 one-time fee at [play.google.com/console](https://play.google.com/console))
2. Signed `.aab` file
3. Store listing assets (screenshots, icon, description)

### Store Listing Assets Required

| Asset | Size | Format |
|-------|------|--------|
| App Icon | 512×512 px | PNG |
| Feature Graphic | 1024×500 px | PNG/JPG |
| Screenshots (phone) | Min 2, max 8 | PNG/JPG |
| Screenshots (tablet) | Optional | PNG/JPG |
| Short description | Max 80 chars | Text |
| Full description | Max 4000 chars | Text |

Store listing metadata is in `store/google-play/metadata/en-US/`.

### Submission Steps

1. Go to [Google Play Console](https://play.google.com/console)
2. Create new app → "AI-Multimodel-Controller"
3. Package name: `com.com.aimc.controller`
4. Set up store listing (use files in `store/google-play/metadata/en-US/`)
5. Upload your signed `.aab`
6. Complete content rating questionnaire
7. Set pricing (free)
8. Submit for review

---

## Android App Signing

### Creating a Keystore

```bash
keytool -genkey -v \
  -keystore openclaw-release.jks \
  -alias openclaw \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

Store the keystore file securely — it's required for all future updates.

### Configuring Signing in Capacitor

Add to `android/app/build.gradle`:
```gradle
android {
    signingConfigs {
        release {
            storeFile file("../openclaw-release.jks")
            storePassword System.getenv("KEYSTORE_PASSWORD")
            keyAlias "openclaw"
            keyPassword System.getenv("KEY_PASSWORD")
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
        }
    }
}
```

---

## App Permissions

The app requests these permissions (defined in `android/app.json`):
- `INTERNET` — Required for AI API calls
- `ACCESS_NETWORK_STATE` — Check connectivity
- `ACCESS_WIFI_STATE` — Check WiFi status
- `CAMERA` — Live camera feature (optional)
- `RECORD_AUDIO` — Voice input (optional)

---

## Version Management

Update version in these files before each release:
- `package.json` → `version`
- `android/app.json` → `version` + `versionCode` (increment by 1)
- `capacitor.config.ts` → no version needed

---

## CI/CD with GitHub Actions

See `.github/workflows/` for automated build workflows.
