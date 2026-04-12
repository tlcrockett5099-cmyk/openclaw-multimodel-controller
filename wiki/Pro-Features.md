# Pro Features & Patreon

> Unlocking Openclaw Pro in v1.1.0

---

## What Is Pro?

**Openclaw Pro** unlocks the full feature set with a **$5+/month pledge** on [Patreon](https://patreon.com/TLG3D). Pro is verified automatically via Patreon OAuth (with the backend server) or activated manually via the honor system.

---

## Free vs. Pro Comparison

| Feature | Free | Pro |
|---------|------|-----|
| AI providers | Unlimited | Unlimited |
| Saved conversations | 25 | **Unlimited** |
| Vision / image analysis | 5 / day | **Unlimited** |
| Text-to-Speech | 500 chars / day | **Unlimited** |
| Skills available | 10 | **61 (all)** |
| Gemini Gems | ❌ | ✅ All 5 |
| Custom skills | Unlimited | Unlimited |
| Memory Bank | Unlimited | Unlimited |
| Themes | Claw OS dark only | **All 6 themes** |
| System prompt presets | 1 | **Unlimited** |
| Full stats dashboard | ❌ | ✅ |
| Bulk export (zip) | ❌ | ✅ |
| Pro badge in sidebar | ❌ | ✅ |
| Priority support | ❌ | ✅ |

---

## Activating Pro

### Method 1: Patreon OAuth — Automatic (Recommended)

This method verifies your patron status automatically via Patreon's API. Requires the Python backend server running.

**Setup (one time):**
1. Start the backend: `python server/main.py`
2. Configure `server/config.py` with your Patreon app credentials (see below)

**Activation:**
1. Open **Settings → Patreon**
2. Click **❤ Connect with Patreon**
3. A popup opens — sign in to Patreon
4. If you have an active $5+/month pledge, Pro is activated automatically
5. Your name is shown: *"Connected as [Name]"*

Re-validation runs automatically every 24 hours.

---

### Method 2: Honor System — Manual

No server required. Trust-based.

1. Pledge $5+/month at [patreon.com/TLG3D](https://patreon.com/TLG3D)
2. Go to **Settings → 🌟 Pro**
3. Click **"I've donated — unlock Pro"**
4. Pro is activated on this device

---

### Method 3: Creator / Developer Access

For **SerThrocken** (the app creator) — bypasses the pledge check entirely.

1. Start the backend server
2. Go to **Settings → Patreon**
3. Click **"I am the creator/developer"**
4. Authorise in the Patreon popup — pledge check is skipped
5. Pro activates with a *"Creator account linked!"* message

This ensures SerThrocken can always test all features without being locked out.

---

## Setting Up Patreon OAuth

To enable automatic Pro verification, you need a Patreon API app:

1. Go to [patreon.com/portal/registration/register-clients](https://www.patreon.com/portal/registration/register-clients)
2. Create a new client
3. Set **Redirect URI** to: `http://localhost:7860/pro/oauth/callback`
4. Copy the **Client ID** and **Client Secret**
5. Add to `server/config.py`:
   ```python
   patreon_client_id     = "your-client-id"
   patreon_client_secret = "your-client-secret"
   patreon_campaign_id   = "your-campaign-id"
   ```
6. Restart the server: `python server/main.py`

---

## Managing Pro Status

| Action | How |
|--------|-----|
| Check status | Settings → 🌟 Pro |
| Force re-validate | Settings → 🌟 Pro → "Re-validate" |
| Deactivate Pro | Settings → 🌟 Pro → "Deactivate Pro" |
| Reconnect Patreon | Settings → Patreon → "Connect with Patreon" |

---

## Pro Badge in the Interface

When Pro is active:
- **Desktop sidebar** — gold `🌟 Pro Active` badge replaces the "Upgrade" button
- **Mobile sidebar drawer** — same `🌟 Pro Active` badge
- All locked Skills (🔒) become fully unlocked
- All themes become available in Settings → Appearance
- All usage limits are removed silently

---

## Why Support on Patreon?

Openclaw is built and maintained solo by **SerThrocken**. Every pledge directly funds:
- New features and integrations
- Bug fixes and security patches
- App Store & Play Store review fees
- Backend server infrastructure
- Community support

**Support at**: [patreon.com/TLG3D](https://patreon.com/TLG3D)
