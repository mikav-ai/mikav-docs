# Contributing to Mikav Docs

First off, thank you for considering contributing to Mikav! 🙌 Every contribution helps us build better tools for Kerala's creative and cultural ecosystem.

## Table of Contents

- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Writing Documentation](#writing-documentation)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Community](#community)

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mikav-docs.git
   cd mikav-docs
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How Can I Contribute?

### 📝 Documentation
- Fix typos or unclear explanations
- Add missing documentation for features
- Translate documentation to Malayalam or other languages
- Improve code examples

### 🐛 Bug Reports
- Use the GitHub issue tracker
- Include steps to reproduce
- Include screenshots if applicable
- Describe expected vs actual behavior

### 💡 Feature Requests
- Open an issue with the `enhancement` label
- Describe the use case and expected behavior
- Be open to discussion and iteration

### 🔧 Code Contributions
- Fix existing issues (look for `good first issue` labels)
- Improve site performance or accessibility
- Add new components or pages

## Development Setup

### Prerequisites
- Node.js >= 20.0
- npm

### Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build

# Serve production build
npm run serve
```

### Environment Variables

Copy the example environment file:
```bash
cp .env.example .env.local
```

See [.env.example](.env.example) for available configuration options.

## Writing Documentation

We use [MDX](https://mdxjs.com/) for documentation pages, which supports both Markdown and React components.

### File Structure
- Place new docs in the `docs/` directory
- Use descriptive filenames (e.g., `getting-started.mdx`, `api-reference.mdx`)
- Add metadata frontmatter to each doc

### Frontmatter Template
```mdx
---
sidebar_position: 1
title: Your Page Title
description: A brief description for SEO
---
```

### Best Practices
- Write clear, concise explanations
- Include code examples where helpful
- Use admonitions for tips, warnings, and notes
- Add images to `static/img/` and reference them relatively
- Consider both technical and non-technical readers

## Pull Request Process

1. **Ensure** your code builds without errors: `npm run build`
2. **Update** documentation if you're changing behavior
3. **Follow** the commit message convention (see below)
4. **Submit** your PR against the `main` branch
5. **Describe** your changes clearly in the PR description
6. **Wait** for review — maintainers will respond within 3 business days

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add Malayalam language toggle
fix: correct sidebar navigation order
docs: update installation instructions
style: format code with prettier
refactor: simplify theme configuration
chore: update dependencies
```

## Style Guide

### Markdown
- Use ATX-style headers (`#`, `##`, `###`)
- One sentence per line for easier diffs
- Use fenced code blocks with language identifiers
- Prefer reference-style links for repeated URLs

### Code
- Follow the existing project conventions
- Use TypeScript where applicable
- Run the linter before committing

## Community

- Be kind and respectful (see [Code of Conduct](CODE_OF_CONDUCT.md))
- Ask questions in [GitHub Discussions](https://github.com/orgs/mikav-ai/discussions)
- Help others in issues when you can

---

_Whether you're fixing a typo or building a new section, your contribution matters. Thank you for helping make Mikav better for everyone!_ 🌟
