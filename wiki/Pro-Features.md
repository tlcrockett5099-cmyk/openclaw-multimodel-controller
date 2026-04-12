# Pro Features & Patreon

> Unlock Openclaw's full potential with Pro

---

## What Is Pro?

**Openclaw Pro** is a premium tier that unlocks advanced features for power users. Pro is activated by supporting the project on [Patreon](https://patreon.com/TLG3D) with a $5+/month pledge.

---

## Pro Feature Comparison

| Feature | Free | Pro |
|---------|------|-----|
| AI providers | Unlimited | Unlimited |
| Saved conversations | 25 | **Unlimited** |
| Vision / image analysis | 5/day | **Unlimited** |
| Text-to-Speech | 500 chars/day | **Unlimited** |
| System prompt presets | 1 | **Unlimited** |
| Themes | Dark only | **All 6 themes** |
| Full-text chat search | ❌ | ✅ |
| Usage statistics dashboard | ❌ | ✅ |
| Bulk export (zip) | ❌ | ✅ |
| Conversation tags & folders | ❌ | ✅ |
| Priority support | ❌ | ✅ |
| Name in SUPPORTERS.md | ❌ | ✅ (opt-in) |
| Pro badge in sidebar | ❌ | ✅ |

---

## How to Activate Pro

### Method 1: Patreon OAuth (Automatic — Requires Python Server)

If you're running the Python backend server:

1. Go to **Settings → Patreon**
2. Click **Connect with Patreon**
3. Sign in to your Patreon account in the popup
4. If you're an active $5+/month patron, Pro is activated automatically

**Requirements**:
- Python backend running (`python server/main.py`)
- `patreon_client_id` and `patreon_client_secret` configured in `server/config.py`

### Method 2: Honor System (Manual)

1. Pledge $5+/month at [patreon.com/TLG3D](https://patreon.com/TLG3D)
2. Go to **Settings → 🌟 Pro**
3. Click **"I've donated — unlock Pro"**

Pro is activated on your device. This is trust-based.

### Method 3: Creator/Developer Access

If you are SerThrocken (the app creator):

1. Go to **Settings → Patreon**
2. Click **"I am the creator/developer"**
3. Authorize in the popup — pledge check is skipped for the app owner

---

## Managing Pro Status

### Check Pro Status
Settings → 🌟 Pro shows your current status.

### Re-validate Pro
If your Pro status was activated via Patreon OAuth:
- The app auto-re-validates every 24 hours
- Force re-validation: Settings → 🌟 Pro → "Re-validate"

### Deactivate Pro
Settings → 🌟 Pro → "Deactivate Pro"

---

## Why Support on Patreon?

Openclaw is:
- **Free and open source**
- Developed and maintained solo by **SerThrocken**
- Available on Android, iOS, and Desktop

Every Patreon pledge directly funds:
- New features and improvements
- Bug fixes and maintenance
- Server costs for Patreon OAuth
- App Store / Play Store submission costs

**Support the project**: [patreon.com/TLG3D](https://patreon.com/TLG3D)

---

## Patreon OAuth Server Configuration

To enable automatic Pro verification via Patreon OAuth, you need a Patreon API app:

1. Go to [patreon.com/portal/registration/register-clients](https://www.patreon.com/portal/registration/register-clients)
2. Create a new client app
3. Set Redirect URI to: `http://localhost:7860/pro/oauth/callback`
4. Copy the **Client ID** and **Client Secret**
5. Add to `server/config.py`:
   ```python
   patreon_client_id = "your-client-id"
   patreon_client_secret = "your-client-secret"
   patreon_campaign_id = "your-campaign-id"  # from your Patreon page URL
   ```
6. Start the server: `python server/main.py`
7. Users can now authenticate via Patreon in Settings

---

## SUPPORTERS.md

All Pro supporters who opt-in are listed in [SUPPORTERS.md](../SUPPORTERS.md) in the repository. Thank you to everyone who supports this project! 💙
