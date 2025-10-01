## Summary

Describe the change. Include the motivation and any related context.

## Related Issues

Fixes #

## Screenshots / Previews

Attach before/after images or a short clip. For new templates, include `preview.png` and at least one screenshot.

## How to Test

1. Navigate to the changed template folder (e.g., `templates/zen`)
2. Install and run: `npm i && npm run dev` (or `pnpm i && pnpm dev`)
3. Open the local URL and append `?portfolioId=<id>`
4. Verify sections render, theming, and widgets (if enabled)

## Checklist

- [ ] Scoped changes to a single template or shared tooling
- [ ] `astro.config.mjs` re-exports `_shared/astro.base.mjs`
- [ ] `src/pages/index.astro` uses `fetchSiteConfig` and handles not-found
- [ ] `preview.png` present at template root (reasonable size)
- [ ] Respects `accentColor` and appends `siteConfig.scripts`
- [ ] Docs updated (README/CONTRIBUTING) if needed
- [ ] No unrelated changes outside the scope of this PR

