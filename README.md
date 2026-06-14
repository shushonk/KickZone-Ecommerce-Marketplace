# KickZone Ecommerce Marketplace

KickZone is a high-performance, responsive multi-category eCommerce marketplace platform. Designed with high-density marketplace-style layouts, full-featured search engines, customizable filtering systems, payment simulations, wallets, and integrated AI assistant modules.

---

## 🏢 Ownership & Copyright

> **© 2026 KickZone. All rights reserved.**  
> **KickZone is a proprietary project owned and operated by Shashank Industries.**

This project, including its styling assets, typography, custom layout structure, custom brand behaviors, database schemas, documentation, and original design templates, is the intellectual property of **Shashank Industries**. Unauthorized reproduction, copy distribution, commercial replication, or claiming ownership of any portion of this repository is strictly prohibited. Refer to [LICENSE](./LICENSE) for full details.

---

## 🎨 Shared Design System

KickZone utilizes a highly unified design language shared across both the Web platform and the Native Android mobile codebase:

- **Primary BRAND Color**: KickZone Royal Blue (`#2874F0` / `0xFF2874F0`) for clean headers, actions, and primary focus bars.
- **Accent Color**: KickZone Warm Gold/Orange (`#FFC200` / `0xFFFFC200`) for premium buttons, stars, and key tags.
- **Aesthetic Structure**: Compact, high-density layouts maximizing vertical grid space, structured with custom roundings, clean typography (Inter / Space Grotesk), and elegant motion transitions.

---

## 🛡️ Security Guidelines

Ensuring the stability and safety of KickZone is a top priority. Please review [SECURITY.md](./SECURITY.md) for vulnerability reports and responsible disclosures.

### 🔑 Critical Safety Rules:
1. **Never Commit Secrets**: Ensure you never upload real API keys, credentials, or databases. Local secrets should only live in ignored `.env` config files.
2. **Backend Proxying for AI Services**: The client application never talks to the Gemini APIs directly. All interactive prompts go through server-side controller middleware utilizing secure, container-injected variables.

---

## 🔧 Environment Variables Config

The system uses configuration templates to coordinate integrations. To get started, duplicate the `.env.example` file and configure your credentials locally:

```bash
cp .env.example .env.local
```

### Supported Keys:
| Variable Name | Description | Placeholder Value |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Server-side key for Google GenAI LLM queries | `your_key_here` |
| `MONGODB_URI` | NoSQL connection string | `your_mongodb_uri` |
| `JWT_SECRET` | Token security signing phrase | `your_jwt_secret` |
| `APP_URL` | Base self-referential path of active server instances | `https://your-domain.com` |

---

## 🛠️ Project Setup & Installation

### 💻 Web (Vite + React + Express)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build Production Assets**:
   ```bash
   npm run build
   ```

### 🤖 Android (Kotlin + Jetpack Compose)

1. Open the `/android` root workspace directory in Android Studio.
2. Sync the project with its Gradle configuration files.
3. Configure target device run specifications and launch the `app` target module on an emulator or a physical device.

---

## 🔒 GitHub Repository Protection Checklist

For professional repository management when working with third-party hosting, follow these security recommendations to protect your proprietary property:

1. **Keep Repository Private**: Maintain the repository visibility setting as **Private** (`KickZone-Ecommerce-Marketplace`) during active development.
2. **Enable Two-Factor Authentication (2FA)**: Ensure your personal GitHub account has 2FA configured via authentication apps or security keys.
3. **Enforce Branch Protection**: Protect your `main` or `production` branch from force pushes. Require status checks and automated builds to pass before merging PRs.
4. **Never Commit API Keys or Access Tokens**: Audit changes diligently. If tokens or passwords are ever pushed accidentally, revoke and cycle the credentials immediately.
5. **Enforce Collaborator Reviews**: Inspect collaborator access permissions regularly. Never add unvetted or third-party collaborators directly to private repos.

---

## 📄 License

This project is licensed under a proprietary **All Rights Reserved** license owned by **Shashank Industries**. See the complete file at [LICENSE](./LICENSE) for legal constraints.

---

## ⚠️ Disclaimer

> KickZone is a demonstration prototype and educational marketplace project. All mock transactions, artificial wallets, virtual logistics, and support ticket frameworks function purely for prototype demonstration purposes.
