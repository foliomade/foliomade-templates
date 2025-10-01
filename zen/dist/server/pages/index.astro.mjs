import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, l as renderHead, n as renderSlot, o as Fragment } from '../chunks/astro/server_qCCgkjie.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Hero;
  const { siteConfig } = Astro2.props;
  const name = siteConfig?.name;
  const specialty = siteConfig?.title;
  const summary = siteConfig?.description;
  const email = siteConfig?.social?.email;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 md:py-32" id="hero"> <h1 class="mb-1.5 font-serif text-7xl font-bold tracking-tightest text-white sm:text-8xl md:mb-0 md:text-9xl"> ${name} </h1> <p class="mb-9 font-serif text-4xl leading-[46px] font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl"> ${specialty} </p> <p class="mb-16 text-base font-normal text-neutral md:text-lg"> ${summary} </p> <a class="inline-block rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-[#fff]"${addAttribute(`mailto:${email}`, "href")}>Get in Touch</a> </section>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/components/Hero.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/icons/Menu.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteConfig } = Astro2.props;
  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-black px-5 py-6" data-astro-cid-3ef6ksr2> <a href="#hero" aria-label="Home link" class="text-white font-semibold" data-astro-cid-3ef6ksr2> ', ' </a> <button type="button" id="menu-button" class="px-1.5 text-neutral sm:hidden" aria-expanded="false" aria-controls="main-menu" data-astro-cid-3ef6ksr2> ', ' </button> <nav class="absolute top-20 right-5 hidden rounded-xl border border-neutral/40 bg-black px-4 py-5 text-neutral sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0" id="main-menu" data-astro-cid-3ef6ksr2> <ul class="gap-2 sm:flex" data-astro-cid-3ef6ksr2> ', ' </ul> </nav> </header> <script>\n  // Toggle mobile menu\n  const button = document.querySelector("#menu-button");\n  const menu = document.querySelector("#main-menu");\n  const navItems = document.querySelectorAll("#main-menu > ul > li > a");\n\n  const toggleMenu = () => {\n    menu?.classList.toggle("hidden");\n    const isHidden = menu?.classList.contains("hidden");\n    button?.setAttribute("aria-expanded", `${!isHidden}`);\n  };\n\n  button?.addEventListener("click", toggleMenu);\n  navItems.forEach((item) => {\n    item?.addEventListener("click", toggleMenu);\n  });\n\n  // Update navigation based on scroll position with Intersection Observer\n  const observer = new IntersectionObserver(\n    (entries) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          navItems.forEach((item) => {\n            if (item.getAttribute("href") === `#${entry.target.id}`) {\n              item.classList.add("text-white", "md:after:opacity-100");\n            } else {\n              item.classList.remove("text-white", "md:after:opacity-100");\n            }\n          });\n        }\n      });\n    },\n    { threshold: 0.5 },\n  );\n\n  document.querySelectorAll("section").forEach((section) => {\n    observer.observe(section);\n  });\n\n  // Cleanup observer\n  document.onvisibilitychange = () => {\n    if (document.visibilityState === "hidden") {\n      observer.disconnect();\n    } else {\n      document.querySelectorAll("section").forEach((section) => {\n        observer.observe(section);\n      });\n    }\n  };\n<\/script> '], ["", '<header class="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-black px-5 py-6" data-astro-cid-3ef6ksr2> <a href="#hero" aria-label="Home link" class="text-white font-semibold" data-astro-cid-3ef6ksr2> ', ' </a> <button type="button" id="menu-button" class="px-1.5 text-neutral sm:hidden" aria-expanded="false" aria-controls="main-menu" data-astro-cid-3ef6ksr2> ', ' </button> <nav class="absolute top-20 right-5 hidden rounded-xl border border-neutral/40 bg-black px-4 py-5 text-neutral sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0" id="main-menu" data-astro-cid-3ef6ksr2> <ul class="gap-2 sm:flex" data-astro-cid-3ef6ksr2> ', ' </ul> </nav> </header> <script>\n  // Toggle mobile menu\n  const button = document.querySelector("#menu-button");\n  const menu = document.querySelector("#main-menu");\n  const navItems = document.querySelectorAll("#main-menu > ul > li > a");\n\n  const toggleMenu = () => {\n    menu?.classList.toggle("hidden");\n    const isHidden = menu?.classList.contains("hidden");\n    button?.setAttribute("aria-expanded", \\`\\${!isHidden}\\`);\n  };\n\n  button?.addEventListener("click", toggleMenu);\n  navItems.forEach((item) => {\n    item?.addEventListener("click", toggleMenu);\n  });\n\n  // Update navigation based on scroll position with Intersection Observer\n  const observer = new IntersectionObserver(\n    (entries) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          navItems.forEach((item) => {\n            if (item.getAttribute("href") === \\`#\\${entry.target.id}\\`) {\n              item.classList.add("text-white", "md:after:opacity-100");\n            } else {\n              item.classList.remove("text-white", "md:after:opacity-100");\n            }\n          });\n        }\n      });\n    },\n    { threshold: 0.5 },\n  );\n\n  document.querySelectorAll("section").forEach((section) => {\n    observer.observe(section);\n  });\n\n  // Cleanup observer\n  document.onvisibilitychange = () => {\n    if (document.visibilityState === "hidden") {\n      observer.disconnect();\n    } else {\n      document.querySelectorAll("section").forEach((section) => {\n        observer.observe(section);\n      });\n    }\n  };\n<\/script> '])), maybeRenderHead(), siteConfig?.name, renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-3ef6ksr2": true }), navLinks.map((link) => renderTemplate`<li class="relative" data-astro-cid-3ef6ksr2> <a${addAttribute(`nav-item relative block p-2 text-sm font-medium transition-all duration-500 after:absolute after:bottom-0 after:left-2/4 after:h-2 after:w-1 after:-translate-x-2/4 after:text-primary after:opacity-0 after:content-['\u2022'] hover:text-white`, "class")}${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2> ${link.text} </a> </li>`));
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/components/Header.astro", void 0);

const $$Astro$6 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const { siteConfig } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const social = siteConfig?.social ?? {};
  const links = [
    social.email ? { text: "Email", href: `mailto:${social.email}` } : void 0,
    social.linkedin ? { text: "LinkedIn", href: social.linkedin } : void 0,
    social.twitter ? { text: "Twitter", href: social.twitter } : void 0,
    social.github ? { text: "GitHub", href: social.github } : void 0
  ].filter(Boolean);
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-neutral/20 px-5 pt-5 pb-8 text-center text-white"> <ul class="mb-5 flex flex-wrap justify-center gap-x-5 text-xs"> ${links.map(({ text, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" class="inline-block px-4 py-3 after:relative after:bottom-[-4px] after:content-[url(/external.svg)] hover:text-primary"> ${text} </a> </li>`)} </ul> <p class="text-xs"> ${siteConfig?.name || "Portfolio"} © ${currentYear}. <span class="text-neutral">Designed by</span> Moisés Machuca ·
<span class="text-neutral">Powered by</span> <a href="https://foliomade.com" target="_blank" rel="noopener" class="underline hover:text-primary">Foliomade</a> </p> </footer>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/components/Footer.astro", void 0);

const DEFAULT_ACCENT = "#14b8a6";
const PUBLIC_APP_BASE_URL = typeof import.meta !== "undefined" && import.meta?.env?.PUBLIC_APP_BASE_URL || typeof process !== "undefined" && process.env?.PUBLIC_APP_BASE_URL || "";
function buildPortfolioSiteConfig(input) {
  const fullName = [input?.firstName, input?.lastName].filter(Boolean).join(" ").trim() || "Your Name";
  const skills = (input.skills || []).map((s) => s?.name).filter(Boolean);
  const projects = (input.projects || []).map((p) => ({
    name: p.name,
    description: p.description || void 0,
    link: p.link || void 0,
    skills: (p.techStack || "").split(/[,|]/).map((s) => s.trim()).filter(Boolean)
  }));
  const experience = (input.experiences || []).map((e) => ({
    company: e.companyName,
    title: e.title,
    dateRange: [e.startDate, e.endDate].filter(Boolean).join(" - ") || void 0,
    bullets: (e.bullets && e.bullets.length ? e.bullets : (e.description || "").split(/\n|•|-/).map((b) => b.trim()).filter(Boolean)) || []
  }));
  const education = (input.education || []).map((ed) => ({
    school: ed.school,
    degree: [ed.degree, ed.field].filter(Boolean).join(" • ") || void 0,
    dateRange: [ed.startDate, ed.endDate].filter(Boolean).join(" - ") || void 0,
    achievements: (ed.description || "").split(/\n|•|-/).map((a) => a.trim()).filter(Boolean)
  }));
  const social = {
    email: input?.email || void 0,
    linkedin: input?.linkedInUrl || void 0,
    twitter: void 0,
    // not captured in current schema
    github: input?.githubUrl || void 0
  };
  const cfg = {
    name: fullName,
    title: input.roleTitle || input?.title || "Professional Title",
    description: input.summary || `Portfolio website of ${fullName}`,
    accentColor: input.themeColor || DEFAULT_ACCENT,
    scripts: [],
    resumeUrl: input.resumeUrl || void 0,
    social,
    aboutMe: input.summary || "Write a concise summary highlighting your strengths, passions, and what you bring to a team.",
    skills,
    projects,
    experience,
    education
  };
  if (input.calendarUrl) {
    const base = PUBLIC_APP_BASE_URL || "";
    const calSrc = `${base}/widgets/calender.js?calendarUrl=${encodeURIComponent(input.calendarUrl)}`;
    cfg.scripts = [...cfg.scripts || [], calSrc];
  }
  if (input.enableFaqs && input.id) {
    const base = PUBLIC_APP_BASE_URL || "";
    const src = `${base}/widgets/chat.min.js?portfolioId=${encodeURIComponent(input.id)}${base ? `&apiBase=${encodeURIComponent(base)}` : ""}`;
    cfg.scripts = [...cfg.scripts || [], src];
  }
  if (input.id) {
    const base = PUBLIC_APP_BASE_URL || "";
    const aSrc = `${base}/widgets/analytics.min.js?portfolioId=${encodeURIComponent(input.id)}${base ? `&apiBase=${encodeURIComponent(base)}` : ""}`;
    cfg.scripts = [...cfg.scripts || [], aSrc];
  }
  return cfg;
}
async function fetchSiteConfig(portfolioId) {
  if (!portfolioId) {
    return void 0;
  }
  try {
    let effectiveBase = "";
    if (typeof window === "undefined") {
      const port = process.env.PORT || "3100";
      effectiveBase = process.env.TEMPLATES_SSR_API_BASE_URL || `http://localhost:${port}`;
    } else {
      effectiveBase = PUBLIC_APP_BASE_URL || "";
    }
    const endpoint = effectiveBase ? `${effectiveBase}/api/public/portfolios/${encodeURIComponent(portfolioId)}` : `/api/public/portfolios/${encodeURIComponent(portfolioId)}`;
    const res = await fetch(endpoint, {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error(`Status Code ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    const tpl = data.data;
    return buildPortfolioSiteConfig(tpl);
  } catch (err) {
    console.error("Error Fetching portfolio config.", err);
    return void 0;
  }
}

const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { siteConfig } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-pt-16 scroll-smooth"${addAttribute(`--accent: ${siteConfig?.accentColor || DEFAULT_ACCENT}`, "style")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(siteConfig?.description, "content")}><meta name="author"${addAttribute(siteConfig?.name, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Theming for browsers using the portfolio accent color --><meta name="theme-color"${addAttribute(siteConfig?.accentColor || DEFAULT_ACCENT, "content")}><meta name="msapplication-navbutton-color"${addAttribute(siteConfig?.accentColor || DEFAULT_ACCENT, "content")}><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><title>${siteConfig?.name} - ${siteConfig?.title}</title>${renderHead()}</head> <body class="bg-black font-sans"> ${renderComponent($$result, "Header", $$Header, { "siteConfig": siteConfig })} <main class="mx-auto max-w-3xl px-5"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "siteConfig": siteConfig })} </body></html>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(href, "id")} class="py-24"> <h2 class="mb-14 font-serif text-4xl font-bold tracking-tighter text-white md:text-5xl"> ${text} </h2> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/components/Section.astro", void 0);

const $$Astro$3 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const { siteConfig } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Work Experience", "href": "experience" }, { "default": ($$result2) => renderTemplate`${siteConfig.experience.map(({ company, title, dateRange, bullets }) => renderTemplate`${maybeRenderHead()}<div class="mb-10"> <h3 class="mb-1.5 font-serif text-2xl font-semibold text-white"> ${company} </h3> <div class="flex flex-col items-start pb-5"> <h4 class="mb-0.5 font-serif text-2xl font-medium text-primary"> ${title} </h4> <span class="pb-[2px] text-sm text-white/70"> ${dateRange} </span> </div> ${bullets && bullets.length > 0 && renderTemplate`<ul class="list-none"> ${bullets.map((log) => renderTemplate`<li class="relative mb-3 pl-8 text-base text-neutral before:absolute before:top-1 before:left-0 before:content-[url(/check.svg)]"> ${log} </li>`)} </ul>`} </div>`)}` })}`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/components/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projects;
  const { siteConfig } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Featured Projects", "href": "projects" }, { "default": ($$result2) => renderTemplate`${siteConfig.projects.map((p, index) => {
    const top = 98 + index * 40;
    return renderTemplate`${maybeRenderHead()}<div${addAttribute(`top: ${top}px;`, "style")} class="sticky mb-12 rounded-2xl border border-neutral/20 bg-black"> <div class="relative z-[1] w-full rounded-2xl bg-[#1c232d]/85 before:absolute before:inset-0 before:z-[-1] before:rounded-2xl before:bg-[url(/raja.png)] before:bg-[length:128px] before:bg-repeat before:opacity-[5%] before:content-['']"> <div class="px-6 py-12"> <h3 class="mb-3 font-serif text-3xl font-medium text-primary">${p.name}</h3> ${p.description && renderTemplate`<p class="text-base text-neutral">${p.description}</p>`} ${p.skills && p.skills.length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-2"> ${p.skills.slice(0, 6).map((s) => renderTemplate`<span class="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/15">${s}</span>`)} </div>`} ${p.link && renderTemplate`<div class="flex gap-5 pt-8 text-white"> <a${addAttribute(p.link, "href")} target="_blank" class="after:relative after:bottom-[-5px] after:content-[url(/external.svg)] hover:underline">
Visit
</a> </div>`} </div> </div> </div>`;
  })}` })}`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  const { siteConfig } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "About Me", "href": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6 md:gap-8"> <p class="w-auto text-base text-neutral md:pr-5">${siteConfig.aboutMe}</p> </div> ` })}`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/components/About.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const portfolioId = Astro2.url.searchParams.get("portfolioId");
  const siteConfig = await fetchSiteConfig(portfolioId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "siteConfig": siteConfig }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "siteConfig": siteConfig })} ${renderComponent($$result2, "Experience", $$Experience, { "siteConfig": siteConfig })} ${renderComponent($$result2, "Projects", $$Projects, { "siteConfig": siteConfig })} ${renderComponent($$result2, "About", $$About, { "siteConfig": siteConfig })} ${siteConfig?.scripts && siteConfig.scripts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${siteConfig.scripts.map((src) => renderTemplate(_a || (_a = __template(["<script", " defer><\/script>"])), addAttribute(src, "src")))}` })}`}` })}`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/pages/index.astro", void 0);

const $$file = "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/pages/index.astro";
const $$url = "/t/zen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
