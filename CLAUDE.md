# Claude AI Context

> Guidelines for Claude (Anthropic) when working on the Mikav Docs project.

## Project Identity

**Mikav** is an open-source AI copilot and open Malayalam model
powering Kerala's creative and cultural ecosystem — built for
everyone to use, and for businesses to build on.

This repo is the documentation site: https://docs.mikav.in

## Tech Stack

- Docusaurus 3.x (React, MDX, TypeScript)
- AWS Amplify (hosting + CI/CD)
- npm as package manager
- Node.js >= 20

## Quick Reference

```bash
npm install        # Install deps
npm start          # Dev server at localhost:3000
npm run build      # Production build → build/
npm run serve      # Preview production build
npm run typecheck  # Type check
```

## File Structure

```
docs/              → Documentation pages (MDX, auto-routed)
src/pages/         → Standalone React pages
src/components/    → Reusable components (CSS Modules)
src/css/           → Global styles
static/            → Static assets (served at /)
docusaurus.config.ts → Site configuration
sidebars.ts        → Sidebar navigation
amplify.yml        → AWS Amplify build config
```

## Coding Conventions

- TypeScript everywhere (.ts/.tsx)
- CSS Modules for component styles
- Functional components + hooks only
- Named exports preferred
- MDX files use frontmatter: sidebar_position, title
- Conventional Commits for messages

## Important Rules

1. Always run `npm run build` after changes to verify
2. Never commit .env.local or secrets
3. Don't break existing doc links (onBrokenLinks: 'throw')
4. Keep content accessible to non-English speakers
5. Respect the Malayalam-first cultural context
6. Update CHANGELOG.md for notable changes

## When Writing Documentation

- Be clear and concise
- Include code examples where helpful
- Use Docusaurus admonitions (:::tip, :::warning, :::note)
- Consider both developers and non-technical users
- Prefer simple English — many readers are multilingual

## Configuration Files to Know

| File | Purpose |
|------|---------|
| `docusaurus.config.ts` | Site config, navbar, footer |
| `sidebars.ts` | Doc sidebar structure |
| `amplify.yml` | AWS build/deploy settings |
| `src/css/custom.css` | Theme colors & overrides |
| `tsconfig.json` | TypeScript config |

## Don't

- Add dependencies without clear justification
- Modify package-lock.json manually
- Use default exports for components
- Remove accessibility attributes
- Introduce class components
