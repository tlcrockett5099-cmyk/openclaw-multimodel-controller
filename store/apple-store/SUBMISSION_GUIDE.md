# Apple App Store Submission Guide
# Openclaw MultiModel Controller
# Created by SerThrocken (SerThrocken LLC)

---

## App Details

| Field | Value |
|-------|-------|
| App Name | Openclaw MultiModel Controller |
| Subtitle | Openclaw — MultiModel AI Chat |
| Bundle ID | com.openclaw.controller |
| Category | Productivity |
| Secondary Category | Utilities |
| Content Rating | 4+ |
| Price | Free |
| In-App Purchases | No (Patreon-based Pro) |

---

## Submission Checklist

### Apple Developer Account
- [ ] Apple Developer account ($99/year): developer.apple.com/programs
- [ ] Certificates, Identifiers & Profiles configured
- [ ] App registered in App Store Connect

### App Bundle
- [ ] Signed .ipa generated via Xcode or EAS Build
- [ ] Build number incremented
- [ ] Tested on physical iPhone (required for submission)
- [ ] Tested on iOS 16+ (minimum target)
- [ ] Tested in both portrait and landscape (iPad)
- [ ] No crashes in TestFlight beta

### Capacitor iOS Setup
```bash
# Add iOS platform
npm install @capacitor/ios
npx cap add ios

# Build and sync
npm run build
npx cap sync ios

# Open in Xcode
npx cap open ios
```

### Store Listing
- [ ] App name: Openclaw MultiModel Controller (max 30 chars)
- [ ] Subtitle: Openclaw — MultiModel AI Chat (max 30 chars)
- [ ] Description: (copy from description.txt)
- [ ] Keywords: (copy from keywords.txt — max 100 chars total)
- [ ] What's New: (copy from release_notes.txt)
- [ ] Support URL: github.com/SerThrocken/openclaw-multimodel-controller
- [ ] Privacy Policy URL: (required — host publicly)
- [ ] Contact info for App Review

### Screenshots Required
iPhone screenshots (6.7" — required):
- [ ] Screenshot 1: Chat screen with active AI conversation
- [ ] Screenshot 2: Skills Library page with categories
- [ ] Screenshot 3: Connections page with multiple providers
- [ ] Screenshot 4: Memory Bank page
- [ ] Screenshot 5: Settings page

iPad screenshots (12.9" — recommended):
- [ ] 2-3 screenshots showing iPad layout

App Icon:
- [ ] 1024×1024 PNG (no transparency, no rounded corners — Apple adds them)

### Privacy & Legal
- [ ] App Privacy section complete in App Store Connect
- [ ] NSCameraUsageDescription in Info.plist: "Used for live camera AI analysis"
- [ ] NSMicrophoneUsageDescription in Info.plist: "Used for voice input to AI"
- [ ] NSPhotoLibraryUsageDescription in Info.plist: "Used to attach images to AI conversations"
- [ ] No third-party SDKs collecting data without disclosure
- [ ] Export compliance: No encryption beyond HTTPS

---

## Privacy Manifest (iOS 17+)

Create `PrivacyInfo.xcprivacy` in your Xcode project with:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>NSPrivacyTracking</key>
  <false/>
  <key>NSPrivacyTrackingDomains</key>
  <array/>
  <key>NSPrivacyCollectedDataTypes</key>
  <array/>
  <key>NSPrivacyAccessedAPITypes</key>
  <array>
    <dict>
      <key>NSPrivacyAccessedAPIType</key>
      <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
      <key>NSPrivacyAccessedAPITypeReasons</key>
      <array>
        <string>CA92.1</string>
      </array>
    </dict>
  </array>
</dict>
</plist>
```

---

## Build Commands

### Using EAS Build (Recommended — No Mac Required)

```bash
# Install EAS CLI
npm install -g eas-cli
eas login

# Configure
cd android
eas build:configure

# Build for TestFlight/App Store
eas build --platform ios --profile production

# Submit to App Store
eas submit --platform ios
```

Configure EAS credentials:
```bash
eas credentials --platform ios
```

### Using Xcode (Mac Required)

1. `npm run build && npx cap sync ios`
2. Open `ios/App/App.xcworkspace` in Xcode
3. Product → Archive
4. Window → Organizer → Distribute App
5. App Store Connect → Upload

---

## App Store Connect Configuration

1. Go to [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
2. My Apps → + → New App
3. Fill in details from metadata files above
4. Upload build via Xcode or Transporter
5. Select build for review
6. Submit for review

---

## TestFlight Distribution (Beta)

1. Upload a build to App Store Connect
2. TestFlight tab → Add external testers
3. Create a public link for beta testers
4. Submit for TestFlight review (usually 1-2 days)

---

## App Review Notes

Include in "Notes for App Reviewer":
```
This is an AI chat controller app. It requires the user to provide their own
API keys for AI services (OpenAI, Anthropic, Google Gemini, etc.). No API keys
are provided by the app itself. The app does not collect any user data — all
data is stored locally on device.

To test: The app works without an API key using the local Ollama provider,
but to fully test cloud providers you would need your own API key.

For review purposes, you can test with the Perplexity provider which has
a free tier, or contact SerThrocken for a test API key.
```

---

## App Store Category Tags

Primary: Productivity
Secondary: Utilities

Keywords (max 100 chars):
`AI chat,ChatGPT,Claude,Gemini,Ollama,multimodel,GPT4,AI assistant,chatbot,AI tools`

---

## Notes

- First submission review typically takes 1-3 days
- Rejections are common — read the feedback carefully and resubmit
- Age rating is 4+ (no objectionable content by default — AI outputs may vary)
- Consider adding content filtering disclosure in App Review notes
