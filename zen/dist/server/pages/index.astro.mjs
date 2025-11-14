import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, n as renderSlot, k as renderHead, o as Fragment } from '../chunks/astro/server_BfIubAXm.mjs';
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
  const resumeUrl = siteConfig?.resumeUrl;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 md:py-32" id="hero"> <h1 class="mb-1.5 font-serif text-7xl font-bold tracking-tightest text-[var(--text)] sm:text-8xl md:mb-0 md:text-9xl"> ${name} </h1> <p class="mb-9 font-serif text-4xl leading-[46px] font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl"> ${specialty} </p> <p class="mb-16 text-base font-normal text-[var(--text-muted)] md:text-lg" style="white-space: pre-line;"> ${summary} </p> <div class="flex flex-wrap items-center gap-3"> <a class="inline-block rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-[#fff]"${addAttribute(`mailto:${email}`, "href")}>Get in Touch</a> ${resumeUrl && renderTemplate`<a class="inline-block rounded-full border border-primary text-primary px-8 py-5 text-sm leading-5 font-medium hover:bg-primary/10"${addAttribute(resumeUrl, "href")} target="_blank" rel="noopener noreferrer">View Resume</a>`} </div> </section>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/components/Hero.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/icons/Menu.astro", void 0);

const $$Sun = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon icon-sun"> <circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="M4.93 4.93l1.41 1.41"></path> <path d="M17.66 17.66l1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="M6.34 17.66l-1.41 1.41"></path> <path d="M19.07 4.93l-1.41 1.41"></path> </svg>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/icons/Sun.astro", void 0);

const $$Moon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon icon-moon"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/icons/Moon.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
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
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<header class="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-[var(--bg-elevated)] px-5 py-6 pr-12 sm:pr-14 relative" data-astro-cid-3ef6ksr2> <a href="#hero" aria-label="Home link" class="text-[var(--text)] font-semibold" data-astro-cid-3ef6ksr2> ', ' </a> <button type="button" id="menu-button" class="px-1.5 text-[var(--text-muted)] sm:hidden mr-12" aria-expanded="false" aria-controls="main-menu" data-astro-cid-3ef6ksr2> ', ' </button> <nav class="absolute top-20 right-5 hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-5 text-[var(--text-muted)] sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0" id="main-menu" data-astro-cid-3ef6ksr2> <ul class="gap-2 sm:flex" data-astro-cid-3ef6ksr2> ', ' </ul> </nav> <!-- Theme toggle (top-right) --> <button id="theme-toggle" type="button" aria-label="Toggle color theme" class="absolute right-5 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-primary" data-astro-cid-3ef6ksr2> ', " ", ` </button> </header> <script>
  // Toggle mobile menu
  const button = document.querySelector("#menu-button");
  const menu = document.querySelector("#main-menu");
  const navItems = document.querySelectorAll("#main-menu > ul > li > a");

  const toggleMenu = () => {
    menu?.classList.toggle("hidden");
    const isHidden = menu?.classList.contains("hidden");
    button?.setAttribute("aria-expanded", \`\${!isHidden}\`);
  };

  button?.addEventListener("click", toggleMenu);
  navItems.forEach((item) => {
    item?.addEventListener("click", toggleMenu);
  });

  // Update navigation based on scroll position with Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute("href") === \`#\${entry.target.id}\`) {
              item.classList.add("text-[var(--text)]", "md:after:opacity-100");
            } else {
              item.classList.remove("text-[var(--text)]", "md:after:opacity-100");
            }
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Cleanup observer
  document.onvisibilitychange = () => {
    if (document.visibilityState === "hidden") {
      observer.disconnect();
    } else {
      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });
    }
  };

  // Theme toggling
  const themeBtn = document.querySelector('#theme-toggle');
  const toggleTheme = () => {
    const html = document.documentElement;
    const next = html.dataset.theme === 'light' ? 'dark' : 'light';
    html.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  };
  themeBtn?.addEventListener('click', toggleTheme);
<\/script> `], ["", '<header class="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-[var(--bg-elevated)] px-5 py-6 pr-12 sm:pr-14 relative" data-astro-cid-3ef6ksr2> <a href="#hero" aria-label="Home link" class="text-[var(--text)] font-semibold" data-astro-cid-3ef6ksr2> ', ' </a> <button type="button" id="menu-button" class="px-1.5 text-[var(--text-muted)] sm:hidden mr-12" aria-expanded="false" aria-controls="main-menu" data-astro-cid-3ef6ksr2> ', ' </button> <nav class="absolute top-20 right-5 hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-5 text-[var(--text-muted)] sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0" id="main-menu" data-astro-cid-3ef6ksr2> <ul class="gap-2 sm:flex" data-astro-cid-3ef6ksr2> ', ' </ul> </nav> <!-- Theme toggle (top-right) --> <button id="theme-toggle" type="button" aria-label="Toggle color theme" class="absolute right-5 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-primary" data-astro-cid-3ef6ksr2> ', " ", ` </button> </header> <script>
  // Toggle mobile menu
  const button = document.querySelector("#menu-button");
  const menu = document.querySelector("#main-menu");
  const navItems = document.querySelectorAll("#main-menu > ul > li > a");

  const toggleMenu = () => {
    menu?.classList.toggle("hidden");
    const isHidden = menu?.classList.contains("hidden");
    button?.setAttribute("aria-expanded", \\\`\\\${!isHidden}\\\`);
  };

  button?.addEventListener("click", toggleMenu);
  navItems.forEach((item) => {
    item?.addEventListener("click", toggleMenu);
  });

  // Update navigation based on scroll position with Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute("href") === \\\`#\\\${entry.target.id}\\\`) {
              item.classList.add("text-[var(--text)]", "md:after:opacity-100");
            } else {
              item.classList.remove("text-[var(--text)]", "md:after:opacity-100");
            }
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Cleanup observer
  document.onvisibilitychange = () => {
    if (document.visibilityState === "hidden") {
      observer.disconnect();
    } else {
      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });
    }
  };

  // Theme toggling
  const themeBtn = document.querySelector('#theme-toggle');
  const toggleTheme = () => {
    const html = document.documentElement;
    const next = html.dataset.theme === 'light' ? 'dark' : 'light';
    html.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  };
  themeBtn?.addEventListener('click', toggleTheme);
<\/script> `])), maybeRenderHead(), siteConfig?.name, renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-3ef6ksr2": true }), navLinks.map((link) => renderTemplate`<li class="relative" data-astro-cid-3ef6ksr2> <a${addAttribute(`nav-item relative block p-2 text-sm font-medium transition-all duration-500 after:absolute after:bottom-0 after:left-2/4 after:h-2 after:w-1 after:-translate-x-2/4 after:text-primary after:opacity-0 after:content-['\u2022'] hover:text-[var(--text)]`, "class")}${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2> ${link.text} </a> </li>`), renderComponent($$result, "Sun", $$Sun, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Moon", $$Moon, { "data-astro-cid-3ef6ksr2": true }));
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/components/Header.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-[var(--border)] px-5 pt-5 pb-8 text-center text-[var(--text)]"> <ul class="mb-5 flex flex-wrap justify-center gap-x-5 text-xs"> ${links.map(({ text, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" class="inline-block px-4 py-3 after:relative after:bottom-[-4px] after:content-[url(/external.svg)] hover:text-primary"> ${text} </a> </li>`)} </ul> <p class="text-xs"> ${siteConfig?.name || "Portfolio"} © ${currentYear}. <span class="text-[var(--text-muted)]">Designed by</span> Moisés Machuca ·
<span class="text-[var(--text-muted)]">Powered by</span> <a href="https://foliomade.com" target="_blank" rel="noopener" class="underline hover:text-primary">Foliomade</a> </p> </footer>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/components/Footer.astro", void 0);

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
    startDate: e.startDate || void 0,
    endDate: e.endDate || void 0,
    bullets: (e.bullets && e.bullets.length ? e.bullets : (e.description || "").split(/\n|•|-/).map((b) => b.trim()).filter(Boolean)) || [],
    techStack: e.techStack || void 0
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
    links: (input.links || []).map((l) => ({ name: l.name, url: l.url })),
    experience,
    education
  };
  const base = PUBLIC_APP_BASE_URL || "";
  cfg.scripts = cfg.scripts || [];
  if (input.calendarUrl) {
    cfg.scripts.push(`${base}/widgets/calender.js?calendarUrl=${encodeURIComponent(input.calendarUrl)}`);
  }
  if (input.enableFaqs && input.id) {
    cfg.scripts.push(`${base}/widgets/chat.min.js?portfolioId=${encodeURIComponent(input.id)}${base ? `&apiBase=${encodeURIComponent(base)}` : ""}`);
  }
  if (input.id) {
    cfg.scripts.push(`${base}/widgets/analytics.min.js?portfolioId=${encodeURIComponent(input.id)}${base ? `&apiBase=${encodeURIComponent(base)}` : ""}`);
  }
  return cfg;
}
async function fetchSiteConfig(portfolioId) {
  if (!portfolioId) {
    return void 0;
  }
  try {
    const makeEndpoint = (base) => base && base.length ? `${base.replace(/\/$/, "")}/api/public/portfolios/${encodeURIComponent(portfolioId)}` : `/api/public/portfolios/${encodeURIComponent(portfolioId)}`;
    if (typeof window === "undefined") {
      const port = process.env.PORT || "3100";
      const candidates = [
        process.env.TEMPLATES_SSR_API_BASE_URL,
        `http://localhost:${port}`,
        `http://127.0.0.1:${port}`,
        // common dev preview ports
        "http://localhost:3200",
        "http://127.0.0.1:3200"
      ].filter(Boolean);
      let lastErr = null;
      for (const base of candidates) {
        try {
          const res = await fetch(makeEndpoint(base), { cache: "no-store" });
          if (res.ok) {
            const data = await res.json();
            const tpl = data.data;
            return buildPortfolioSiteConfig(tpl);
          }
          lastErr = new Error(`Status Code ${res.status} ${res.statusText}`);
        } catch (err) {
          lastErr = err;
        }
      }
      throw lastErr || new Error("Unable to fetch portfolio");
    } else {
      const res = await fetch(makeEndpoint(PUBLIC_APP_BASE_URL || ""), { cache: "no-store" });
      if (!res.ok) throw new Error(`Status Code ${res.status} ${res.statusText}`);
      const data = await res.json();
      const tpl = data.data;
      return buildPortfolioSiteConfig(tpl);
    }
  } catch (err) {
    console.error("Error Fetching portfolio config.", err);
    return void 0;
  }
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { siteConfig } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" class="scroll-pt-16 scroll-smooth"', '> <head><meta charset="UTF-8"><meta name="description"', '><meta name="author"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Theming for browsers using the portfolio accent color --><meta name="theme-color"', '><meta name="msapplication-navbutton-color"', '><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><title>', " - ", "</title><!-- Initialize theme early to avoid flash --><script>\n      (function () {\n        try {\n          const stored = localStorage.getItem('theme');\n          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n          const theme = stored || (prefersDark ? 'dark' : 'light');\n          document.documentElement.dataset.theme = theme;\n        } catch (e) {\n          document.documentElement.dataset.theme = 'dark';\n        }\n      })();\n    <\/script>", '</head> <body class="bg-[var(--bg)] font-sans"> ', ' <main class="mx-auto max-w-3xl px-5"> ', " </main> ", " </body></html>"])), addAttribute(`--accent: ${siteConfig?.accentColor || DEFAULT_ACCENT}`, "style"), addAttribute(siteConfig?.description, "content"), addAttribute(siteConfig?.name, "content"), addAttribute(Astro2.generator, "content"), addAttribute(siteConfig?.accentColor || DEFAULT_ACCENT, "content"), addAttribute(siteConfig?.accentColor || DEFAULT_ACCENT, "content"), siteConfig?.name, siteConfig?.title, renderHead(), renderComponent($$result, "Header", $$Header, { "siteConfig": siteConfig }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "siteConfig": siteConfig }));
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(href, "id")} class="py-24"> <h2 class="mb-14 font-serif text-4xl font-bold tracking-tighter text-[var(--text)] md:text-5xl"> ${text} </h2> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/components/Section.astro", void 0);

const $$Astro$3 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const { siteConfig } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Work Experience", "href": "experience" }, { "default": ($$result2) => renderTemplate`${siteConfig.experience.map(({ company, title, dateRange, bullets, techStack }) => renderTemplate`${maybeRenderHead()}<div class="mb-10"> <h3 class="mb-1.5 font-serif text-2xl font-semibold text-[var(--text)]"> ${company} </h3> <div class="flex flex-col items-start pb-5"> <h4 class="mb-0.5 font-serif text-2xl font-medium text-primary"> ${title} </h4> <span class="pb-[2px] text-sm text-[var(--text-70)]"> ${dateRange} </span> </div> ${bullets && bullets.length > 0 && renderTemplate`<ul class="list-none"> ${bullets.map((log) => renderTemplate`<li class="relative mb-3 pl-8 text-base text-[var(--text-muted)] before:absolute before:top-1 before:left-0 before:content-[url(/check.svg)]"> ${log} </li>`)} </ul>`} ${techStack && renderTemplate`<div class="mt-3 flex flex-wrap gap-2"> ${techStack.split(/[,|]/).map((t) => t.trim()).filter(Boolean).map((t) => renderTemplate`<span class="inline-block rounded-full bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--chip-text)] px-2.5 py-1 text-xs"> ${t} </span>`)} </div>`} </div>`)}` })}`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/components/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projects;
  const { siteConfig } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Featured Projects", "href": "projects" }, { "default": ($$result2) => renderTemplate`${siteConfig.projects.map((p, index) => {
    const top = 98 + index * 40;
    return renderTemplate`${maybeRenderHead()}<div${addAttribute(`top: ${top}px;`, "style")} class="sticky mb-12 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"> <div class="relative z-[1] w-full rounded-2xl bg-[var(--card)] before:absolute before:inset-0 before:z-[-1] before:rounded-2xl before:bg-[url(/raja.png)] before:bg-[length:128px] before:bg-repeat before:opacity-[5%] before:content-['']"> <div class="px-6 py-12"> <h3 class="mb-3 font-serif text-3xl font-medium text-primary">${p.name}</h3> ${p.description && renderTemplate`<p class="text-base text-[var(--text-muted)]">${p.description}</p>`} ${p.skills && p.skills.length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-2"> ${p.skills.slice(0, 6).map((s) => renderTemplate`<span class="text-[11px] px-2 py-0.5 rounded-full bg-[var(--chip-bg)] text-[var(--chip-text)] border border-[var(--chip-border)]">${s}</span>`)} </div>`} ${p.link && renderTemplate`<div class="flex gap-5 pt-8 text-[var(--text)]"> <a${addAttribute(p.link, "href")} target="_blank" class="after:relative after:bottom-[-5px] after:content-[url(/external.svg)] hover:underline">
Visit
</a> </div>`} </div> </div> </div>`;
  })}` })}`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  const { siteConfig } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "About Me", "href": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6 md:gap-8"> <p class="w-auto text-base text-[var(--text-muted)] md:pr-5" style="white-space: pre-line;">${siteConfig.aboutMe}</p> </div> ` })}`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/components/About.astro", void 0);

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
  const notFound = !portfolioId || !siteConfig;
  return renderTemplate`${notFound ? renderTemplate`${maybeRenderHead()}<main style="min-height: 100vh; display:grid; place-items:center; background:#0b0f1a; color:#e5e7eb;"><section style="text-align:center; max-width: 720px; padding: 2rem;"><h1 style="font-size: clamp(2.25rem, 6vw, 4rem); line-height:1.05; margin:0 0 .75rem; font-weight:800;">Portfolio Not Found</h1><p style="color:#9ca3af; font-size: clamp(1rem, 1.2vw, 1.15rem); margin: 0 0 1.5rem;">The requested portfolio is private or does not exist.</p><a href="/" style="display:inline-block; padding:.7rem 1rem; border-radius:999px; border:1px solid rgba(148,163,184,.35); color:#e5e7eb; text-decoration:none; background-color: rgba(255,255,255,.06);">← Back to Home</a></section></main>` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "siteConfig": siteConfig }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "siteConfig": siteConfig })}${renderComponent($$result2, "Experience", $$Experience, { "siteConfig": siteConfig })}${renderComponent($$result2, "Projects", $$Projects, { "siteConfig": siteConfig })}${renderComponent($$result2, "About", $$About, { "siteConfig": siteConfig })}${siteConfig?.scripts && siteConfig.scripts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${siteConfig.scripts.map((src) => renderTemplate(_a || (_a = __template(["<script", " defer><\/script>"])), addAttribute(src, "src")))}` })}`}` })}`}`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/pages/index.astro", void 0);

const $$file = "/Users/samsonoyetola/workspace/foliomade/templates/zen/src/pages/index.astro";
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
