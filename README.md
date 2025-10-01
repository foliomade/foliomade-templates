Refactoring Astro Templates to PortfolioSiteConfig

This repo standardizes all portfolio templates to a single runtime configuration: `templates/_shared/config.ts` and the `PortfolioSiteConfig` interface. Use this guide to refactor any new Astro template to work with the platform.

What to implement
- Fetch site config at runtime: Use `fetchSiteConfig` from `templates/_shared/config` on the template’s `src/pages/index.astro`.
- Pass `siteConfig` down: Thread the fetched `siteConfig` into all components via a single prop named `siteConfig`.
- Render from the interface: Replace any template-local config or data with properties from `PortfolioSiteConfig`.
- Keep scripts optional: If `siteConfig.scripts` exists, render each script tag with `defer` near the end of the page/body.
- Use the shared Astro config: Replace the template’s `astro.config.mjs` with `export { default } from '../_shared/astro.base.mjs'` so the Node adapter is installed and server output is configured for previews.

Reference interface
- name: Full display name.
- title: Professional title/role.
- description: Short summary for meta/Hero.
- accentColor: Hex or CSS color string.
- social: { email?, linkedin?, twitter?, github? }
- aboutMe: Long-form about text.
- skills: string[]
- projects: { name, description?, link?, skills? }[]
- experience: { company, title, dateRange?, bullets: string[] }[]
- education: { school, degree?, dateRange?, achievements: string[] }[]
- scripts?: string[] (optional widget scripts)

Step-by-step
1) Page entry (index.astro)
   - Import and call `fetchSiteConfig(portfolioId)`.
   - Compute `baseUrl` from `Astro.url.origin` or `PUBLIC_API_BASE_URL` and accept `?apiBase=` and `?portfolioId=` from URL search params.
   - Example (see `templates/aurora/src/pages/index.astro` or `templates/devportfolio/src/pages/index.astro`).

2) Layout and Head
- Remove any template-local config files. Do not hardcode content.
- Set `<title>` to ``${siteConfig?.name} - ${siteConfig?.title}`` and `<meta name="description">` from `siteConfig.description`.
- Optional: set a CSS custom property or inline style with `siteConfig.accentColor` if the template supports theming.
 - Ensure `export const prerender = false;` is set on `src/pages/index.astro` so the template runs with the Node adapter in preview mode.

3) Components
   - Accept `{ siteConfig: import('../../../_shared/config').PortfolioSiteConfig }` as the only prop.
   - Header: Show anchors for existing sections (About, Projects, Experience, Education) based on data availability.
   - Hero: Use `name`, `title` (as specialty/role), `description` (as summary), and `social.email` for a CTA mailto link.
   - About: Use `aboutMe`. If the original template required an image, make it optional and render text-only if no image is available.
   - Projects: Map from `siteConfig.projects`. Prefer text-first rendering; make images optional. Use `link` as the primary external link.
   - Experience: Map from `siteConfig.experience` (company, title, dateRange, bullets[]).
   - Education (if present): Map from `siteConfig.education`.

4) Scripts (optional)
   - If present, render `siteConfig.scripts.map((src) => <script src={src} defer />)` at the bottom of the page or within the Layout body.

5) Types & imports
 - Do not re-declare types. Import the type inline where needed:
   `const { siteConfig } = Astro.props as { siteConfig: import('../../../_shared/config').PortfolioSiteConfig }`.
 - Do not rely on local `@types` or `@config` for content.
  - Avoid per-template npm dependencies (e.g., `@fontsource/*`). Prefer system fonts, a static `<link rel="preconnect">` + Google Fonts `<link>`, or fallbacks. This keeps builds working from the root without installing extra packages.

6) Keep styling intact
- Preserve the template’s original styling and layout. Only swap data sources and make image/media optional where the shared interface doesn’t provide data.
- If the template ships extra endpoints (e.g., `rss.xml.js`) that depend on external integrations like `@astrojs/rss`, replace them with a minimal, no-dependency handler or remove them for preview. Server output ignores `getStaticPaths()` unless `export const prerender = true;` is set — warnings are fine during preview.
 - If a template depends on Tailwind plugins not available at the repo root (e.g., `daisyui`, `@tailwindcss/typography`), add a minimal CDN fallback in the layout head for preview-only builds:
   `<script src="https://cdn.tailwindcss.com"></script>` and `<script defer src="https://cdn.jsdelivr.net/npm/daisyui@4"></script>`.
   Prefer proper integration when the project installs those plugins centrally.

Good examples to follow
- `templates/aurora` and `templates/devportfolio` show the expected patterns for fetching config, passing it down, and rendering from `PortfolioSiteConfig`.

Checklist before finishing
- Page fetches config via `_shared/config` and passes `siteConfig` to all components.
- No imports from a template-local config file remain.
- Components only read from `siteConfig`.
- Optional scripts rendered when provided.
- Template still renders with sensible fallbacks when some data is missing (e.g., no project images).
- Footer includes a visible “Powered by Foliomade” link to `https://foliomade.com`.

Update the Preview Catalog
- Add the template to the catalog shown in the dashboard preview UI so users can discover and launch it:
  - File: `src/app/dashboard/portfolios/[id]/preview/PortfolioPreview.tsx`
  - Constant: `TEMPLATE_CATALOG`
  - Example entry:
    `{ key: 'zen', name: 'Zen', description: 'Minimal, dark, typography-first portfolio.', technologies: ['Astro', 'Tailwind'] }`
  - The preview link uses `/t/<key>?portfolioId=...`. Ensure the directory exists at `templates/<key>` and follows this guide.

Branding
- Add a small credit in the footer for all templates:
  - Example:
    `<p class="text-xs">{siteConfig.name} © {currentYear}. <span class="text-neutral">Powered by</span> <a href="https://foliomade.com" target="_blank" rel="noopener" class="underline">Foliomade</a></p>`
  - Keep it subtle and consistent; place it after any existing author/designer credits.
