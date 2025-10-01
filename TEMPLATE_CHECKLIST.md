# Template Checklist

Use this checklist when creating a new template under `templates/<your-template>/`.

## Required

- [ ] Folder created at `templates/<your-template>/`
- [ ] `astro.config.mjs` re-exports shared base:
      `export { default } from '../_shared/astro.base.mjs'`
- [ ] `src/pages/index.astro` renders from shared API:
      - [ ] Reads `portfolioId` from query string
      - [ ] Calls `fetchSiteConfig(portfolioId)` from `_shared/config`
      - [ ] Uses `siteConfig.accentColor` for theming
      - [ ] Appends `siteConfig.scripts` to the page
      - [ ] Graceful “not found” state when data is missing
- [ ] `preview.png` at template root (PNG, ~1600×900 or 1920×1080, < 600KB)

## Recommended

- [ ] Semantic HTML and accessible patterns (labels, landmarks, contrast)
- [ ] Mobile-first responsive layout (360px–1280px+)
- [ ] Minimal dependencies; reuse shared `_shared` and Tailwind styles
- [ ] Robust to missing/short content (no layout breakage)

## Before Opening a PR

- [ ] Screenshots / GIFs of key pages
- [ ] Checklist copied into PR body and all items checked
- [ ] No unrelated changes outside your template (unless fixing shared code)

Refer to `CONTRIBUTING.md` and the root `README.md` for details.
