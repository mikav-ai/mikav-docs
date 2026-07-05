# Changelog

All notable changes to the Mikav Docs project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial documentation site with Docusaurus
- Project README with setup instructions
- Contributing guidelines
- Code of Conduct
- Security policy
- AWS Amplify deployment configuration (`amplify.yml` with `baseDirectory: build`)
- Roadmap for upcoming features
- `.env.example` and `.env.local` environment variable templates
- `AGENTS.md` — AI agent guidelines for working on the codebase
- `CLAUDE.md` — Claude-specific context and conventions
- Apache License 2.0 (`LICENSE`)

### Changed
- Removed default blog section (docs-focused site)
  - Deleted `blog/` folder and all blog content
  - Set `blog: false` in Docusaurus preset config
  - Removed blog links from navbar and footer
- Updated site branding and identity
  - Title set to `Mikav AI` with `|` delimiter (pages render as `Page Name | Mikav AI`)
  - Tagline updated to reflect Mikav's mission
  - Organization set to `mikav-ai`, project to `mikav-docs`
- Updated favicon to `img/icons/app/favicon.png`
- Navbar logo uses theme-aware icons:
  - Light mode: `img/icons/app/icon-dark.png`
  - Dark mode: `img/icons/app/icon-light.png`

### Fixed
- Set production `url` to `https://docs.mikav.in` (was placeholder)
- Amplify build configuration for proper deployment (`baseDirectory: build`)

---

## [0.1.0] - 2026-07-05

### Added
- Initial project scaffolding with Docusaurus 3.10.1
- Basic documentation structure
- Custom domain setup (docs.mikav.in)

[Unreleased]: https://github.com/mikav-ai/mikav-docs/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/mikav-ai/mikav-docs/releases/tag/v0.1.0
