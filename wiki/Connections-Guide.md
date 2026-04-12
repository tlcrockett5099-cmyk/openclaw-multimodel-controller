# AI Connections Guide

> How to connect AI providers to Openclaw MultiModel Controller

---

## Overview

Openclaw connects to AI providers through their APIs. Each connection stores:
- Provider type (OpenAI, Claude, Gemini, etc.)
- API key (or OAuth token)
- Selected model
- Custom system prompt (optional)
- Temperature and token settings

---

## Adding a Connection

1. Open the **Connections** tab (plug icon)
2. Click **+ Add Connection**
3. Choose your provider from the list
4. Enter your API key
5. Select a model
6. Click **Save**
7. Toggle the connection **enabled** to use it in chat

---

## Provider Setup Guides

### 🤖 OpenAI (GPT-4o, o1, o3)

1. Get an API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. In Openclaw: Connections → Add → OpenAI
3. Paste your API key
4. Choose model: `gpt-4o` (recommended), `gpt-4o-mini`, `o1`, `o3-mini`
5. Save and enable

**Cost**: Billed per token. GPT-4o Mini is the most cost-effective.

---

### 🟠 Claude (Anthropic)

1. Get an API key from [console.anthropic.com](https://console.anthropic.com/settings/keys)
2. In Openclaw: Connections → Add → Claude (Anthropic)
3. Paste your API key
4. Choose model: `claude-opus-4-5` (best), `claude-sonnet-4-5` (balanced), `claude-haiku-4-5` (fast)

**Cost**: Billed per token. Haiku is the most affordable.

---

### ✨ Google Gemini

#### Option A: API Key
1. Get a free API key from [aistudio.google.com](https://aistudio.google.com/app/apikey)
2. In Openclaw: Connections → Add → Google Gemini
3. Paste your API key
4. Choose model: `gemini-2.0-flash` (recommended), `gemini-2.5-pro-preview-06-05`

#### Option B: Google Sign-In (OAuth)
1. Go to **Settings → Integrations → Google Sign-In for Gemini**
2. Enter your Google OAuth Client ID (from [Google Cloud Console](https://console.cloud.google.com/apis/credentials))
3. In Connections → Add → Google Gemini → Click "Connect with Google"
4. Sign in to your Google account

**Cost**: Free tier available on Google AI Studio.

---

### 🔍 Perplexity

1. Get an API key from [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)
2. In Openclaw: Connections → Add → Perplexity
3. Paste your API key
4. Choose model: `llama-3.1-sonar-large-128k-online` (best), `sonar-small` (fast/cheap)

**Note**: Perplexity models include real-time web search capability.

---

### 🦙 Ollama (Local — Free, No Internet)

1. Install Ollama from [ollama.com](https://ollama.com)
2. Pull a model: `ollama pull llama3.2`
3. In Openclaw: Connections → Add → Ollama (Local)
4. Base URL: `http://localhost:11434` (default)
5. Choose model from the list or type a model name

**Supported models**: llama3, mistral, codellama, phi3, gemma2, deepseek-r1, qwen2.5, and more.

**Cost**: Completely free, runs on your computer.

---

### 🔀 OpenRouter (Access 200+ Models)

1. Get an API key from [openrouter.ai/keys](https://openrouter.ai/keys)
2. In Openclaw: Connections → Add → OpenRouter
3. Paste your API key
4. Choose model — supports models from OpenAI, Anthropic, Google, Meta, Mistral, and more

**Cost**: Pay-per-token with very competitive rates.

---

### ⚙️ Custom / OpenAI-Compatible APIs

Works with any server that follows the OpenAI API format:
- **LM Studio** — local model server
- **vLLM** — high-performance inference
- **LocalAI** — local OpenAI-compatible server
- **Jan** — local AI app
- **Kobold.cpp**, **text-generation-webui**, etc.

1. Start your local server (default: `http://localhost:8080`)
2. In Openclaw: Connections → Add → Custom
3. Set the Base URL to your server address
4. Set the model name as configured in your server

---

## Testing Connections

After adding a connection:
1. Open it in the Connections list
2. Click the **Test** button (⚡ icon)
3. Openclaw will send a test message and show ✅ or ❌

---

## Managing Multiple Providers

- Switch providers mid-chat using the provider picker in the chat header
- Enable/disable providers without deleting them
- Color-code providers for easy identification
- Each conversation remembers which provider was used

---

## Troubleshooting

| Error | Solution |
|-------|----------|
| `401 Unauthorized` | Check your API key is correct and not expired |
| `429 Too Many Requests` | You've hit rate limits — wait and try again |
| `Connection refused` | Ollama/local server is not running |
| `CORS error` | Use the Python backend server as a proxy |
| `Model not found` | Check the exact model name from the provider |
