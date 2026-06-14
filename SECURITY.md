# Security Policy

## Reporting a Vulnerability

We take the security of KickZone very seriously. If you find a security issue or vulnerability, please **DO NOT** create a public issue on GitHub. Instead, report it privately following our responsible disclosure process.

To report a vulnerability, please email **security@shashankindustries.internal** with:
- A detailed description of the vulnerability.
- Steps to reproduce or a Proof of Concept (PoC).
- Any potential impact details.

We will acknowledge receipt of your report within 48 hours and work with you to resolve it responsibly.

---

## Protecting Sensitive Credentials

To safeguard the application and its integration services, please follow these critical rules:

1. **Do Not Commit Secrets**: Never commit actual API keys, private passwords, tokens, database URIs, or certificates to the repository.
2. **Environment Isolation**: Always use local environment files (like `.env.local` or `.env.production`) to supply secrets at runtime. These files are explicitly ignored in `.gitignore`.
3. **Never Pose API Keys in AI Chat publicly**: If you are using generative models or conversational developer agents, ensure you never mention real credentials, private databases, or production credentials in the prompts.

---

## Responsible Disclosure Policy

Please give us reasonable time to investigate and fix any reported vulnerabilities before sharing any details publicly. We appreciate your support in keeping the KickZone platform secure for everyone.

---

## Demo & Prototype Disclaimer

KickZone is a prototype and educational multi-category eCommerce marketplace platform. While security practices are implemented in our mock integrations and architecture, this project is not officially audited for handling live financial transactions or production-grade user authentication. Please use with appropriate sandboxing and local mocking in test environments.
