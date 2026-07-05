<p align="center">
  <img src="static/img/logo.svg" alt="Mikav Logo" width="120" />
</p>

<h1 align="center">Mikav Docs</h1>

<p align="center">
  <strong>Documentation for Mikav — the open-source AI copilot and open Malayalam model powering Kerala's creative and cultural ecosystem.</strong>
</p>

<p align="center">
  <a href="https://docs.mikav.in">Live Docs</a> •
  <a href="https://github.com/mikav-ai/mikav-docs">GitHub</a> •
  <a href="CONTRIBUTING.md">Contribute</a> •
  <a href="ROADMAP.md">Roadmap</a>
</p>

---

## About

Mikav is an open-source AI copilot and open Malayalam model powering Kerala's creative and cultural ecosystem — built for everyone to use, and for businesses to build on.

This repository contains the documentation site for the Mikav project, built with [Docusaurus](https://docusaurus.io/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20.0
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This starts a local dev server at `http://localhost:3000`. Changes are reflected live without restarting.

### Build

```bash
npm run build
```

Generates static content into the `build/` directory.

### Serve Production Build Locally

```bash
npm run serve
```

## Project Structure

```
mikav-docs/
├── docs/              # Documentation pages (MDX)
├── src/
│   ├── components/    # React components
│   ├── css/           # Global styles
│   └── pages/         # Standalone pages
├── static/            # Static assets (images, fonts)
├── docusaurus.config.ts
├── sidebars.ts
└── amplify.yml        # AWS Amplify build config
```

## Deployment

This site is deployed on **AWS Amplify** and auto-deploys from the `main` branch.

- Production: [https://docs.mikav.in](https://docs.mikav.in)

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the Apache License 2.0 — see [LICENSE](LICENSE) for details.

## Community

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
- [Changelog](CHANGELOG.md)
- [GitHub Discussions](https://github.com/orgs/mikav-ai/discussions)

---

<p align="center">
  Made with ❤️ in Kerala 🌴
</p>
