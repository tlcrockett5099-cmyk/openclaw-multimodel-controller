# Google Play Store Submission Guide
# Openclaw MultiModel Controller
# Created by SerThrocken (SerThrocken LLC)

---

## App Details

| Field | Value |
|-------|-------|
| App Name | Openclaw MultiModel Controller |
| Package Name | com.openclaw.controller |
| Category | Productivity |
| Content Rating | Everyone |
| Price | Free |
| In-app purchases | No (Patreon-based Pro) |

---

## Submission Checklist

### Account Setup
- [ ] Google Play Developer account ($25 one-time): play.google.com/console
- [ ] Payment profile set up

### App Bundle
- [ ] Signed .aab generated (`eas build --platform android --profile production`)
- [ ] Version code incremented
- [ ] Tested on multiple Android devices/emulators
- [ ] Tested on Android 8.0+ (API 26+)

### Store Listing
- [ ] Title: Openclaw MultiModel Controller (copy from title.txt)
- [ ] Short description: (copy from short_description.txt)
- [ ] Full description: (copy from full_description.txt)
- [ ] App category: Productivity
- [ ] Contact email set

### Graphics Required
- [ ] Hi-res icon: 512×512 PNG (create from LLC logo)
- [ ] Feature graphic: 1024×500 PNG (see template below)
- [ ] Phone screenshots: minimum 2, up to 8 (6.5" or 6.7" display)
  - Screenshot 1: Chat screen with active conversation
  - Screenshot 2: Skills Library page
  - Screenshot 3: Connections page with multiple providers
  - Screenshot 4: Memory Bank page
  - Screenshot 5: Settings with Pro section
- [ ] Tablet screenshots (optional but recommended)

### Privacy & Legal
- [ ] Privacy Policy URL: Add to GitHub Pages or repo
- [ ] Content rating questionnaire complete
- [ ] No permissions exceed what's declared
- [ ] Target API level 33+ (Android 13)

---

## Feature Graphic Template

Create a 1024×500 image with:
- Dark background (#0f172a)
- Openclaw logo centered
- Tagline: "Chat with all your AI models in one app"
- Provider logos (OpenAI, Claude, Gemini, etc.) arranged below
- App screenshot on the right side

---

## Privacy Policy

Host a privacy policy at a public URL. Key points to include:
- App stores data locally only
- API keys are stored on-device
- No data sent to SerThrocken servers
- Conversations only sent to chosen AI provider
- No account required
- Analytics: none

---

## Build Commands

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure project
cd android
eas build:configure

# Build for testing (APK)
eas build --platform android --profile preview

# Build for Play Store (AAB)
eas build --platform android --profile production

# Submit to Play Store
eas submit --platform android
```

---

## EAS Submit Configuration

Add to android/eas.json under "submit":
```json
{
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./google-play-service-account.json",
        "track": "internal"
      }
    }
  }
}
```

Get the service account key from Google Play Console:
Setup → API access → Create service account → Grant permissions

---

## Notes

- Initial submission goes to "internal testing" before public release
- Allow 2-7 days for Google Play review
- Include test account credentials if app requires login
