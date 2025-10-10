# Template Theming Guide

This guide documents how dark mode and accent color are implemented in templates, using `templates/zen` as a practical reference. Use it when creating a new template that needs a theme feature.


## Overview

- Dark mode uses a `data-theme` attribute on `document.documentElement` with values `dark` or `light`.
- The accent color is passed via `siteConfig.accentColor` and exposed as a CSS variable `--accent` on the root element.
- The theme toggle is a button that flips `data-theme` and persists the choice in `localStorage`.
- Sun/Moon SVG icons both render; CSS shows the correct one based on the active theme.


## Accent Color

- Source: `siteConfig.accentColor` from `_shared/config.ts` (mapped from input `themeColor`).
- Fallback: `DEFAULT_ACCENT` in `_shared/config.ts`.
- Injection: set on the `<html>` (or `<body>`) style as `--accent` and in meta tags for browser chrome.

Example (from `zen/src/layouts/Layout.astro`):

```astro
<html
  lang="en"
  class="scroll-pt-16 scroll-smooth"
  style={`--accent: ${siteConfig?.accentColor || DEFAULT_ACCENT}`}
>
  <head>
    <meta name="theme-color" content={siteConfig?.accentColor || DEFAULT_ACCENT} />
    <meta name="msapplication-navbutton-color" content={siteConfig?.accentColor || DEFAULT_ACCENT} />
  </head>
</html>
```

- Tailwind v4 consumes the accent via a theme token: `--color-primary: var(--accent, #2563eb);` in `@theme`.
- Use utility classes like `text-primary`, `border-primary`, etc., to reflect the accent.

Reference: `templates/zen/src/styles/global.css`.


## Dark Mode Initialization

- Set the theme early to avoid a flash of incorrect theme.
- Logic: check `localStorage.theme`; otherwise prefer `prefers-color-scheme: dark`.
- Apply as `document.documentElement.dataset.theme = 'dark' | 'light'`.

Example (inline in `<head>` of `Layout.astro`):

```html
<script is:inline>
  (function () {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = stored || (prefersDark ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = 'dark';
    }
  })();
</script>
```


## Theme Tokens (CSS variables)

Define color tokens for both themes and switch them with `[data-theme='light']` overrides.

Example (from `Layout.astro`):

```css
:root {
  /* Dark (default) */
  --bg: #000000;
  --bg-elevated: #000000;
  --text: #ffffff;
  --text-muted: #9ca3af;
  --text-90: rgba(255, 255, 255, 0.9);
  --text-80: rgba(255, 255, 255, 0.8);
  --text-70: rgba(255, 255, 255, 0.7);
  --border: rgba(255, 255, 255, 0.2);
  --card: #121212;
  --chip-bg: rgba(255, 255, 255, 0.05);
  --chip-border: rgba(255, 255, 255, 0.1);
  --chip-text: rgba(255, 255, 255, 0.85);
}

[data-theme='light'] {
  --bg: #ffffff;
  --bg-elevated: #ffffff;
  --text: #0a0a0a;
  --text-muted: #4b5563;
  --text-90: rgba(0, 0, 0, 0.9);
  --text-80: rgba(0, 0, 0, 0.8);
  --text-70: rgba(0, 0, 0, 0.7);
  --border: rgba(0, 0, 0, 0.12);
  --card: #f8fafc;
  --chip-bg: rgba(0, 0, 0, 0.04);
  --chip-border: rgba(0, 0, 0, 0.1);
  --chip-text: rgba(0, 0, 0, 0.85);
}
```

Use these variables in class utilities or inline styles, e.g., `bg-[var(--bg)]`, `text-[var(--text)]`, `border-[var(--border)]`.


## Toggle UI and Icons

- Place a button (e.g., in the header) with Sun and Moon SVGs rendered together.
- Use CSS to show/hide the correct icon based on the active theme.
- On click, flip the theme and persist to `localStorage`.

Button (from `zen/src/components/Header.astro`):

```astro
<button
  id="theme-toggle"
  type="button"
  aria-label="Toggle color theme"
  class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-primary"
>
  <Sun />
  <Moon />
</button>
```

Icons (from `zen/src/icons/Sun.astro` and `zen/src/icons/Moon.astro`):

```html
<svg class="theme-icon icon-sun" ...>...</svg>
<svg class="theme-icon icon-moon" ...>...</svg>
```

Visibility control (in `Layout.astro`):

```css
.theme-icon { display: inline-block; }
[data-theme='dark'] .icon-moon { display: none; }
[data-theme='light'] .icon-sun { display: none; }
```

Toggle behavior (inline script in `Header.astro`):

```js
const themeBtn = document.querySelector('#theme-toggle');
const toggleTheme = () => {
  const html = document.documentElement;
  const next = html.dataset.theme === 'light' ? 'dark' : 'light';
  html.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (_) {}
};
themeBtn?.addEventListener('click', toggleTheme);
```


## Using the Accent in Styles

- Tailwind theme token is defined in `zen/src/styles/global.css`:

```css
@theme {
  --color-primary: var(--accent, #2563eb);
}
```

- Use `text-primary`, `border-primary`, `bg-primary` (if defined), or reference `var(--accent)` directly in styles for custom elements.
- Consider setting `<meta name="theme-color">` to `accentColor` so browser UI matches.


## Add Dark Mode to a New Template (Checklist)

1) Provide `--accent` on the root and set theme-color metas.
   - `style={`--accent: ${siteConfig?.accentColor || DEFAULT_ACCENT}`}` on `<html>` or `<body>`.
   - `<meta name="theme-color" content={siteConfig?.accentColor || DEFAULT_ACCENT} />`.

2) Initialize `data-theme` early in `<head>` with the inline script above.

3) Define CSS variables for dark and light under `:root` and `[data-theme='light']`.

4) Implement a toggle button that switches `data-theme` and persists to `localStorage`.

5) Render Sun and Moon icons with classes `theme-icon icon-sun` and `theme-icon icon-moon` and include the CSS to hide the inactive one.

6) Ensure components use the theme tokens (e.g., `bg-[var(--bg)]`, `text-[var(--text)]`, `border-[var(--border)]`, and `text-primary`/`border-primary`).

7) Verify good contrast and accessible focus states in both themes.


## File References (Zen)

- `templates/zen/src/layouts/Layout.astro`: injects `--accent`, sets theme-color metas, initializes theme, defines theme tokens, and icon visibility rules.
- `templates/zen/src/components/Header.astro`: contains the theme toggle button and click handler.
- `templates/zen/src/icons/Sun.astro` and `templates/zen/src/icons/Moon.astro`: SVG icons with theme classes.
- `templates/zen/src/styles/global.css`: defines Tailwind theme tokens, including `--color-primary` from `--accent`.
- `templates/_shared/config.ts`: `DEFAULT_ACCENT`, `PortfolioSiteConfig`, and mapping from input to `accentColor`.


## Notes

- Keep the inline theme init script as early as possible in `<head>` to avoid FOUC.
- If your template uses server-side rendering, still set the initial `data-theme` in the client as shown.
- Avoid hardcoding colors; prefer the shared tokens and `--accent` for easy theming.
