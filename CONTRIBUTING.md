# Contributing to Foliomade Templates

Thanks for your interest in contributing! This project hosts open portfolio templates that render from a shared data model. You can help by reporting bugs, suggesting improvements, or adding new templates.

## Ways to Contribute

- Bug reports: broken layout, runtime errors, missing data handling
- Feature requests: improvements to shared tooling or template UX
- Template proposals: entirely new designs that meet the requirements
- Enhancements: accessibility, performance, responsiveness, copy, or styles

## Getting Started (Local Dev)

- Pick a template folder under `templates/` (e.g., `templates/zen`)
- Install and run:
  - `npm i && npm run dev` (or `pnpm i && pnpm dev`)
  - Visit the local URL and append `?portfolioId=<test-id>`
- For production builds of a template, set `ASTRO_BASE` to its deployed subpath:
  - `ASTRO_BASE="/t/<template>/" npm run build`

Environment variables used by shared code:
- `ASTRO_BASE`: required for production builds (base path, e.g., `/t/zen/`)
- `TEMPLATES_SSR_API_BASE_URL`: override API base for server-side fetching
- `PUBLIC_APP_BASE_URL`: public base for widgets/API in the browser

## Template Requirements

Each template must:
- Live at `templates/<your-template>/`
- Export shared Astro base in `astro.config.mjs`:
  - `export { default } from '../_shared/astro.base.mjs'`
- Render main page at `src/pages/index.astro`
  - Read `portfolioId` from URL
  - Call `fetchSiteConfig(portfolioId)` from `_shared/config.ts`
  - Respect `siteConfig.accentColor` for theming
  - Append `siteConfig.scripts` to the document
  - Show a clear “Portfolio Not Found” state if data is missing
- Include a `preview.png` at the template root
  - Suggested: 1600×900 or 1920×1080, PNG, under ~600KB

Data model:
- Input: `_shared/types.ts` → `TemplateInput`
- Mapping + fetch helpers: `_shared/config.ts` → `PortfolioSiteConfig`
  - Adds optional widgets (chat, analytics, calendar) based on the input

## Code Style & Quality

- Keep diffs minimal and focused per PR
- Prefer semantic HTML and accessible patterns (labels, contrast, landmarks)
- Be responsive (mobile-first); test at 360px–1280px+ widths
- Avoid heavy dependencies; reuse shared config and Tailwind where applicable
- Handle missing/short fields without layout breakage

## Pull Requests

- Create a topic branch from `main` (e.g., `feat/template-aurora`)
- Link any related issues
- Include before/after screenshots or a short clip if changing UI
- Update docs if behavior or requirements change

PR checklist (copy into your PR):
- [ ] New/updated template under `templates/<name>/`
- [ ] `astro.config.mjs` re-exports shared base
- [ ] `src/pages/index.astro` uses `fetchSiteConfig` and handles not-found
- [ ] `preview.png` added and sized reasonably
- [ ] Uses `accentColor` and appends `scripts`
- [ ] No unrelated changes outside scope

## Reporting Bugs

Include the following when filing an issue:
- Template name (e.g., `zen`, `classic`) and version/commit
- Steps to reproduce and expected vs actual behavior
- Screenshots, console/network errors, or logs when possible
- Environment (OS, browser, screen size)

## Security & Responsible Disclosure

If you believe you’ve found a security issue, please open an issue with minimal details and we’ll coordinate further.

## License

Contributions are licensed under the repository’s root license unless stated otherwise.

Thanks again for helping improve the template ecosystem!
