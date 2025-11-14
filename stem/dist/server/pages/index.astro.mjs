import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, k as renderComponent, l as renderHead, h as addAttribute, n as Fragment } from '../chunks/astro/server_BmKv4qQh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

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

const $$Sun = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon icon-sun"> <circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="M4.93 4.93l1.41 1.41"></path> <path d="M17.66 17.66l1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="M6.34 17.66l-1.41 1.41"></path> <path d="M19.07 4.93l-1.41 1.41"></path> </svg>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/stem/src/icons/Sun.astro", void 0);

const $$Moon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon icon-moon"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg>`;
}, "/Users/samsonoyetola/workspace/foliomade/templates/stem/src/icons/Moon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const portfolioId = Astro2.url.searchParams.get("portfolioId");
  const siteConfig = await fetchSiteConfig(portfolioId);
  const notFound = !portfolioId || !siteConfig;
  function parseDateFlexible(s) {
    if (!s) return null;
    const str = String(s).trim();
    if (!str) return null;
    if (/^(present|now|current)$/i.test(str)) return /* @__PURE__ */ new Date();
    const d1 = new Date(str);
    if (!isNaN(d1.getTime())) return d1;
    const mYear = str.match(/^(\d{4})$/);
    if (mYear) return new Date(Number(mYear[1]), 0, 1);
    const mYm = str.match(/^(\d{4})[-/](\d{1,2})$/);
    if (mYm) return new Date(Number(mYm[1]), Number(mYm[2]) - 1, 1);
    return null;
  }
  function computeTimeline(e) {
    const start = parseDateFlexible(e.startDate) || (e.dateRange ? parseDateFlexible(String(e.dateRange).split(/\s*-\s*/)[0]) : null);
    const end = parseDateFlexible(e.endDate) || (e.dateRange ? parseDateFlexible(String(e.dateRange).split(/\s*-\s*/)[1]) : null);
    const year = start ? String(start.getFullYear()) : "-";
    let duration = "-";
    if (start && end) {
      const ms = Math.max(0, end.getTime() - start.getTime());
      const years = ms / (1e3 * 60 * 60 * 24 * 365.25);
      if (years >= 1) {
        duration = `${years.toFixed(2)} years`;
      } else {
        const months = Math.round(years * 12);
        if (months === 0) {
          duration = `-`;
        } else {
          duration = `${months} month${months !== 1 ? "s" : ""}`;
        }
      }
    }
    const lines = Array.isArray(e.bullets) && e.bullets.length ? e.bullets : e.description ? String(e.description).split(/\n|•|-/).map((s) => s.trim()).filter(Boolean) : [];
    return { year, duration, title: e.title, company: e.company, lines, techStack: e.techStack };
  }
  const timeline = !notFound ? (siteConfig?.experience || []).map(computeTimeline) : [];
  return renderTemplate(_c || (_c = __template(['<html lang="en"', ' data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><!-- Use original Stem/Ashton CSS to preserve look-and-feel --><link rel="stylesheet" href="https://ashton.websitelayout.net/css/plugins.css"><link rel="stylesheet" href="https://ashton.websitelayout.net/css/style.css"><!-- No external icon font; inline SVGs used below --><!-- Provide accent color to the browser UI --><meta name="theme-color"', '><meta name="msapplication-navbutton-color"', "><!-- Initialize theme early to avoid flash (FOUC) --><script>\n        (function () {\n          try {\n            const stored = localStorage.getItem('theme');\n            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n            const theme = stored || (prefersDark ? 'dark' : 'light');\n            document.documentElement.dataset.theme = theme;\n          } catch (_) {\n            document.documentElement.dataset.theme = 'dark';\n          }\n        })();\n      <\/script><!-- Global icon visibility rules so they affect child components -->", '</head> <body data-astro-cid-j7pv25f6> <!-- Theme toggle (floating top-right) --> <button id="theme-toggle" class="theme-toggle" aria-label="Toggle color theme" type="button" data-astro-cid-j7pv25f6> ', " ", " </button> ", " </body> </html>"])), addAttribute(`--accent: ${siteConfig?.accentColor || "#22c55e"}`, "style"), siteConfig ? `${siteConfig.name} - ${siteConfig.title}` : "Portfolio Not Found", addAttribute(siteConfig?.description || "Developer portfolio", "content"), addAttribute(siteConfig?.accentColor || "#3175D1", "content"), addAttribute(siteConfig?.accentColor || "#3175D1", "content"), renderHead(), renderComponent($$result, "Sun", $$Sun, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Moon", $$Moon, { "data-astro-cid-j7pv25f6": true }), notFound ? renderTemplate`<main style="min-height: 100vh; display:grid; place-items:center; background:#0b0f1a; color:#e5e7eb;" data-astro-cid-j7pv25f6> <section style="text-align:center; max-width: 720px; padding: 2rem;" data-astro-cid-j7pv25f6> <h1 style="font-size: clamp(2.25rem, 6vw, 4rem); line-height:1.05; margin:0 0 .75rem; font-weight:800;" data-astro-cid-j7pv25f6>Portfolio Not Found</h1> <p style="color:#9ca3af; font-size: clamp(1rem, 1.2vw, 1.15rem); margin: 0 0 1.5rem;" data-astro-cid-j7pv25f6>The requested portfolio is private or does not exist.</p> <a href="/" style="display:inline-block; padding:.7rem 1rem; border-radius:999px; border:1px solid rgba(148,163,184,.35); color:#e5e7eb; text-decoration:none; background-color: rgba(255,255,255,.06);" data-astro-cid-j7pv25f6>← Back to Home</a> </section> </main>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate(_b || (_b = __template(['  <div class="bg-light-gray sm-padding-75px-top" data-scroll-index="0" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="row" data-astro-cid-j7pv25f6> <div class="col-md-7 col-sm-12 order-2 order-md-1 xs-padding-50px-tb" data-astro-cid-j7pv25f6> <div class="padding-twenty-top sm-padding-fifteen-top xs-no-padding" data-astro-cid-j7pv25f6> <h5 class="no-margin font-size18 xs-font-size16 text-medium-gray padding-fifteen-top md-padding-eight-top sm-padding-five-top xs-no-padding" data-astro-cid-j7pv25f6>Hello, I am</h5> <h1 style="color: var(--accent)" class="mt-2 text-uppercase font-size48 md-font-size42 sm-font-size36 xs-font-size26 font-weight-800 margin-20px-bottom" data-astro-cid-j7pv25f6>', '</h1> <p class="width-50 md-width-75 xs-width-100 font-size16 xs-font-size14 border-top border-bottom padding-10px-tb" data-astro-cid-j7pv25f6>', '</p> <div class="social-links margin-30px-bottom xs-margin-20px-bottom" data-astro-cid-j7pv25f6> ', " ", " ", " ", " </div> ", ' <div class="mt-3" data-astro-cid-j7pv25f6>&nbsp;</div> </div> </div> </div> </div> </div>  <section class="section" data-scroll-index="1" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="row" data-astro-cid-j7pv25f6> <div class="col-md-6 col-sm-12" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>I am...</h3> <p class="muted" style="white-space: pre-line; max-width: 760px;" data-astro-cid-j7pv25f6>', '</p> </div> <div class="col-md-6 col-sm-12" data-astro-cid-j7pv25f6> ', " </div> </div> </div> </section>  ", " ", '<footer class="text-center" style="padding: 24px 0; color:#64748b" data-astro-cid-j7pv25f6>\n\xA9 ', " ", ' <span style="margin: 0 6px" data-astro-cid-j7pv25f6>\u2022</span>\nPowered by <a href="https://foliomade.com" target="_blank" rel="noopener noreferrer" data-astro-cid-j7pv25f6>Foliomade</a> </footer> ', " <script>\n          const themeBtn = document.querySelector('#theme-toggle');\n          const toggleTheme = () => {\n            const html = document.documentElement;\n            const next = html.dataset.theme === 'light' ? 'dark' : 'light';\n            html.dataset.theme = next;\n            try { localStorage.setItem('theme', next); } catch (_) {}\n          };\n          themeBtn?.addEventListener('click', toggleTheme);\n        <\/script> "])), siteConfig.name, siteConfig.title, siteConfig?.social?.linkedin && renderTemplate`<a${addAttribute(siteConfig.social.linkedin, "href")} target="_blank" aria-label="LinkedIn" rel="noopener noreferrer" data-astro-cid-j7pv25f6> <svg viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-j7pv25f6><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.96V24H.5zM8 8.5h4.77v2.12h.07c.66-1.25 2.27-2.57 4.67-2.57 4.99 0 5.9 3.29 5.9 7.56V24h-5V16c0-1.91-.03-4.37-2.66-4.37-2.66 0-3.07 2.08-3.07 4.23V24H8z" data-astro-cid-j7pv25f6></path></svg> </a>`, siteConfig?.social?.github && renderTemplate`<a${addAttribute(siteConfig.social.github, "href")} target="_blank" aria-label="GitHub" rel="noopener noreferrer" data-astro-cid-j7pv25f6> <svg viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-j7pv25f6><path d="M12 .5C5.73.5 0 6.23 0 12.5c0 5.3 3.44 9.8 8.21 11.38.6.11.8-.26.8-.58 0-.28-.01-1.02-.02-1.99-3.34.73-4.05-1.6-4.05-1.6-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.85 1.23 1.85 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.3.76-1.6-2.68-.31-5.49-1.33-5.49-5.9 0-1.3.47-2.36 1.24-3.2-.12-.3-.54-1.55.12-3.25 0 0 1.01-.32 3.3 1.22.96-.27 1.99-.41 3.01-.41s2.05.14 3.01.41c2.29-1.54 3.3-1.22 3.3-1.22.66 1.7.24 2.95.12 3.25.77.84 1.24 1.9 1.24 3.2 0 4.58-2.81 5.58-5.5 5.89.43.37.81 1.09.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.69.81.57C20.56 22.29 24 17.79 24 12.5 24 6.23 18.27.5 12 .5z" data-astro-cid-j7pv25f6></path></svg> </a>`, siteConfig?.social?.twitter && renderTemplate`<a${addAttribute(siteConfig.social.twitter, "href")} target="_blank" aria-label="Twitter" rel="noopener noreferrer" data-astro-cid-j7pv25f6> <svg viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-j7pv25f6><path d="M23 4.8a9.2 9.2 0 0 1-2.65.73A4.6 4.6 0 0 0 22.38 3a9.23 9.23 0 0 1-2.92 1.12 4.6 4.6 0 0 0-7.85 4.2A13.06 13.06 0 0 1 3.16 3.9a4.6 4.6 0 0 0 1.42 6.13 4.54 4.54 0 0 1-2.08-.58v.06a4.6 4.6 0 0 0 3.69 4.51 4.6 4.6 0 0 1-2.07.08 4.6 4.6 0 0 0 4.29 3.19A9.22 9.22 0 0 1 1 20.54 13 13 0 0 0 8.04 22.5c7.75 0 12-6.42 12-11.98 0-.18-.01-.35-.02-.53A8.5 8.5 0 0 0 23 4.8z" data-astro-cid-j7pv25f6></path></svg> </a>`, siteConfig?.social?.email && renderTemplate`<a${addAttribute(`mailto:${siteConfig.social.email}`, "href")} aria-label="Email" data-astro-cid-j7pv25f6> <svg viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-j7pv25f6><path d="M2 5h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2v.2l10 6.25L22 7.2V7H2zm20 10V9.04l-10 6.25L2 9.04V17h20z" data-astro-cid-j7pv25f6></path></svg> </a>`, siteConfig?.resumeUrl && renderTemplate`<a class="btn white"${addAttribute(siteConfig.resumeUrl, "href")} target="_blank" data-astro-cid-j7pv25f6>View My Resume <img style="height: 25px" src="/assets/arrow_right.svg" alt="Arrow right" data-astro-cid-j7pv25f6></a>`, siteConfig.aboutMe, siteConfig.skills?.length > 0 ? renderTemplate`<div style="margin-top:8px" data-astro-cid-j7pv25f6> ${siteConfig.skills.map((s) => renderTemplate`<span class="pill" data-astro-cid-j7pv25f6>${s}</span>`)} </div>` : renderTemplate`<p class="muted" data-astro-cid-j7pv25f6>Add your top skills to highlight your strengths.</p>`, siteConfig.experience?.length > 0 && renderTemplate`<section class="bg-light-gray" data-scroll-index="2" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="row" data-astro-cid-j7pv25f6> <div class="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center" data-astro-cid-j7pv25f6> <h3 class="font-weight-700 font-size32 md-font-size27 sm-font-size24 xs-font-size20 section-title" data-astro-cid-j7pv25f6>My Experience</h3> </div> </div> <div class="row" data-astro-cid-j7pv25f6> <div class="col-md-12" data-astro-cid-j7pv25f6> <div class="main-timeline" data-astro-cid-j7pv25f6> ${timeline.map((t) => renderTemplate`<div class="timeline" data-astro-cid-j7pv25f6> <div class="icon" data-astro-cid-j7pv25f6></div> <div class="date-content" data-astro-cid-j7pv25f6> <div class="date-outer" data-astro-cid-j7pv25f6> <span class="date" data-astro-cid-j7pv25f6> <span class="month" data-astro-cid-j7pv25f6>${t.duration}</span> <span class="year" data-astro-cid-j7pv25f6>${t.year}</span> </span> </div> </div> <div class="timeline-content" data-astro-cid-j7pv25f6> <h5 class="title" data-astro-cid-j7pv25f6>${t.title}</h5> <p data-astro-cid-j7pv25f6><strong style="color: var(--accent)" data-astro-cid-j7pv25f6>${t.company}</strong></p> ${t.lines.length > 0 && renderTemplate`<ul class="experience-bullets" data-astro-cid-j7pv25f6> ${t.lines.map((ln) => renderTemplate`<li data-astro-cid-j7pv25f6>• ${ln}</li>`)} </ul>`} ${t.techStack && renderTemplate`<div class="muted" style="margin-top:6px; font-size:13px" data-astro-cid-j7pv25f6>${t.techStack}</div>`} </div> </div>`)} </div> </div> </div> </div> </section>`, (siteConfig.projects?.length > 0 || siteConfig.links?.length > 0) && renderTemplate`<section class="section" data-scroll-index="3" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Projects</h3> ${siteConfig.projects?.length > 0 && renderTemplate`<div class="portfolio-grid" style="margin-top:12px" data-astro-cid-j7pv25f6> ${siteConfig.projects.map((p) => renderTemplate`<div class="portfolio-card" data-astro-cid-j7pv25f6> <div class="content" data-astro-cid-j7pv25f6> <div class="row" style="justify-content: space-between; align-items: center; gap: 12px;" data-astro-cid-j7pv25f6> <strong class="px-2" style="line-height:1.2" data-astro-cid-j7pv25f6>${p.name}</strong> </div> ${p.description && renderTemplate`<div class="muted" style="margin-top:6px" data-astro-cid-j7pv25f6>${p.description}</div>`} ${p.link && renderTemplate`<div style="margin-top:8px" data-astro-cid-j7pv25f6> <a${addAttribute(p.link, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`color: var(--accent); text-decoration:none; word-break: break-all;`, "style")} data-astro-cid-j7pv25f6> ${p.link} </a> </div>`} ${p.skills?.length && renderTemplate`<div style="margin-top:6px" data-astro-cid-j7pv25f6> ${p.skills?.map((s) => renderTemplate`<span class="pill" data-astro-cid-j7pv25f6>${s}</span>`)} </div>`} </div> </div>`)} </div>`} ${siteConfig.links?.length > 0 && renderTemplate`<div style="margin-top:24px" data-astro-cid-j7pv25f6> <h4 style="margin:0 0 8px" data-astro-cid-j7pv25f6>More Links</h4> <div data-astro-cid-j7pv25f6> ${siteConfig.links.map((l) => renderTemplate`<a class="link-chip"${addAttribute(l.url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-j7pv25f6>${l.name}</a>`)} </div> </div>`} </div> </section>`, (/* @__PURE__ */ new Date()).getFullYear(), siteConfig.name, siteConfig?.scripts && siteConfig.scripts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${siteConfig.scripts.map((src) => renderTemplate(_a || (_a = __template(["<script", " defer><\/script>"])), addAttribute(src, "src")))}` })}`) })}`);
}, "/Users/samsonoyetola/workspace/foliomade/templates/stem/src/pages/index.astro", void 0);

const $$file = "/Users/samsonoyetola/workspace/foliomade/templates/stem/src/pages/index.astro";
const $$url = "/t/stem";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
