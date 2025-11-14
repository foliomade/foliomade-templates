import { e as createComponent, k as renderHead, r as renderTemplate } from '../chunks/astro/server_ClqnVeDH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-zetdm5md> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>404 — Page Not Found</title><meta name="description" content="The page you requested could not be found.">${renderHead()}</head> <body data-astro-cid-zetdm5md> <main class="wrap" data-astro-cid-zetdm5md> <section class="card" data-astro-cid-zetdm5md> <img src="/assets/falling.png" alt="Lost astronaut falling" class="img" width="1120" height="700" loading="lazy" data-astro-cid-zetdm5md> <div class="tag" data-astro-cid-zetdm5md>404 — Page Not Found</div> <h1 data-astro-cid-zetdm5md>This page took a wrong turn.</h1> <p data-astro-cid-zetdm5md>
No worries — you can spin up a beautiful developer portfolio from your resume in minutes.
</p> <div class="row" data-astro-cid-zetdm5md> <a class="btn primary" href="/" data-astro-cid-zetdm5md>Create a portfolio using your resume</a> <a class="btn secondary" href="/" data-astro-cid-zetdm5md>Go back home</a> </div> <footer data-astro-cid-zetdm5md>
Built with <a href="/" rel="noopener" data-astro-cid-zetdm5md>Foliomade</a>. Showcase your work with a polished, fast, and embeddable portfolio.
</footer> </section> </main> </body></html>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/devportfolio/src/pages/404.astro", void 0);

const $$file = "/Users/samsonoyetola/workspace/foliomade/templates/devportfolio/src/pages/404.astro";
const $$url = "/t/devportfolio/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
