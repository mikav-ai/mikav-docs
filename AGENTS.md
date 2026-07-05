# AI Agents Guide

> How AI agents interact with and contribute to the Mikav Docs project.

## Overview

Mikav Docs welcomes contributions from AI coding assistants and agents. This file provides context and guidelines for AI systems working on this codebase.

## Project Context

- **Framework**: Docusaurus 3.x (React + MDX)
- **Language**: TypeScript
- **Package Manager**: npm
- **Hosting**: AWS Amplify
- **Domain**: docs.mikav.in
- **Repository**: https://github.com/mikav-ai/mikav-docs

## Key Commands

```bash
npm install          # Install dependencies
npm start            # Start dev server (localhost:3000)
npm run build        # Production build → build/
npm run serve        # Serve production build locally
npm run typecheck    # TypeScript type checking
```

## Architecture

```
docs/          → MDX documentation pages (auto-routed)
src/pages/     → Custom React pages
src/components/→ Reusable React components
src/css/       → Global CSS (CSS Modules for components)
static/        → Static assets served at root
```

## Conventions

### Documentation Files
- Use `.mdx` extension for all doc files
- Include frontmatter with `sidebar_position` and `title`
- Place images in `static/img/` or alongside the doc
- Use Docusaurus admonitions for tips/warnings/notes

### Code Style
- TypeScript for all `.ts`/`.tsx` files
- CSS Modules for component styling
- Functional components with hooks (no class components)
- Named exports preferred over default exports for components

### Commit Messages
Follow Conventional Commits:
- `feat:` new features or pages
- `fix:` bug fixes
- `docs:` documentation content changes
- `style:` formatting changes
- `refactor:` code restructuring
- `chore:` maintenance tasks

## Do's and Don'ts

### Do
- Run `npm run build` to verify changes compile
- Keep documentation clear and accessible
- Preserve existing file structure
- Update `CHANGELOG.md` for notable changes
- Consider Malayalam-speaking users in content decisions

### Don't
- Don't modify `package-lock.json` manually
- Don't add unnecessary dependencies
- Don't commit `.env.local` or secrets
- Don't break existing documentation links
- Don't remove accessibility features

## Common Tasks

### Adding a New Doc Page
1. Create `docs/your-page.mdx` with frontmatter
2. It will auto-appear in the sidebar (or configure in `sidebars.ts`)

### Adding a Custom Page
1. Create `src/pages/your-page.tsx`
2. It routes automatically to `/your-page`

### Modifying Navigation
- Navbar: `docusaurus.config.ts` → `themeConfig.navbar`
- Sidebar: `sidebars.ts`
- Footer: `docusaurus.config.ts` → `themeConfig.footer`

## Related Files for Context

When making changes, these files are most relevant:
- `docusaurus.config.ts` — Main site configuration
- `sidebars.ts` — Documentation sidebar structure
- `src/css/custom.css` — Theme customization
- `amplify.yml` — Deployment configuration
