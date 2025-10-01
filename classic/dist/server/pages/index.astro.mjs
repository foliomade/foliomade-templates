import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, r as renderTemplate, l as renderComponent, n as Fragment } from '../chunks/astro/server_ClqnVeDH.mjs';
import 'kleur/colors';
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
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${siteConfig ? `${siteConfig.name} - ${siteConfig.title}` : "Portfolio Not Found"}</title><meta name="description"${addAttribute(siteConfig?.description || "Developer portfolio", "content")}><!-- Theming for browsers using the portfolio accent color --><meta name="theme-color"${addAttribute(siteConfig?.accentColor || "#22c55e", "content")}><meta name="msapplication-navbutton-color"${addAttribute(siteConfig?.accentColor || "#22c55e", "content")}><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">${renderHead()}</head> <body${addAttribute(`--accent: ${siteConfig?.accentColor || "#22c55e"}`, "style")} data-astro-cid-j7pv25f6> ${notFound ? renderTemplate`<main style="min-height: 100vh; display:grid; place-items:center; background:#0b0f1a; color:#e5e7eb;" data-astro-cid-j7pv25f6> <section style="text-align:center; max-width: 720px; padding: 2rem;" data-astro-cid-j7pv25f6> <h1 style="font-size: clamp(2.25rem, 6vw, 4rem); line-height:1.05; margin:0 0 .75rem; font-weight:800;" data-astro-cid-j7pv25f6>Portfolio Not Found</h1> <p style="color:#9ca3af; font-size: clamp(1rem, 1.2vw, 1.15rem); margin: 0 0 1.5rem;" data-astro-cid-j7pv25f6>The requested portfolio is private or does not exist.</p> <a href="/" style="display:inline-block; padding:.7rem 1rem; border-radius:999px; border:1px solid rgba(148,163,184,.35); color:#e5e7eb; text-decoration:none; background-color: rgba(255,255,255,.06);" data-astro-cid-j7pv25f6>← Back to Home</a> </section> </main>` : renderTemplate`<div class="wrap" data-astro-cid-j7pv25f6> <header data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${siteConfig.name}</h1> <div class="muted" data-astro-cid-j7pv25f6>${siteConfig.title}</div> ${siteConfig.resumeUrl && renderTemplate`<div style="margin-top:12px" data-astro-cid-j7pv25f6> <a${addAttribute(siteConfig.resumeUrl, "href")} class="btn" target="_blank" data-astro-cid-j7pv25f6>View Resume</a> </div>`} </header> <section class="section" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>About Me</h2> <p data-astro-cid-j7pv25f6>${siteConfig.aboutMe}</p> ${siteConfig.skills.length > 0 && renderTemplate`<div style="margin-top:12px" data-astro-cid-j7pv25f6> ${siteConfig.skills.map((s) => renderTemplate`<span class="pill" data-astro-cid-j7pv25f6>${s}</span>`)} </div>`} </section> ${siteConfig.experience.length > 0 && renderTemplate`<section class="section" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Experience</h2> ${siteConfig.experience.map((e) => renderTemplate`<div class="card" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>${e.title}</strong> @ <span${addAttribute(`color: var(--accent)`, "style")} data-astro-cid-j7pv25f6>${e.company}</span></div> ${e.dateRange && renderTemplate`<div class="muted" style="font-size:13px" data-astro-cid-j7pv25f6>${e.dateRange}</div>`} ${e.bullets?.length > 0 && renderTemplate`<ul data-astro-cid-j7pv25f6> ${e.bullets.map((b) => renderTemplate`<li data-astro-cid-j7pv25f6>${b}</li>`)} </ul>`} </div>`)} </section>`} ${siteConfig.education.length > 0 && renderTemplate`<section class="section" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Education</h2> ${siteConfig.education.map((ed) => renderTemplate`<div class="card" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>${ed.degree}</strong></div> <div${addAttribute(`color: var(--accent)`, "style")} data-astro-cid-j7pv25f6>${ed.school}</div> ${ed.dateRange && renderTemplate`<div class="muted" style="font-size:13px" data-astro-cid-j7pv25f6>${ed.dateRange}</div>`} </div>`)} </section>`} ${siteConfig.projects.length > 0 && renderTemplate`<section class="section" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Projects</h2> ${siteConfig.projects.map((p) => renderTemplate`<div class="card" data-astro-cid-j7pv25f6> <div class="row" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>${p.name}</strong> ${p.link && renderTemplate`<a${addAttribute(p.link, "href")} target="_blank" data-astro-cid-j7pv25f6>Visit</a>`} </div> ${p.description && renderTemplate`<div class="muted" style="margin-top:8px" data-astro-cid-j7pv25f6>${p.description}</div>`} </div>`)} </section>`} <footer data-astro-cid-j7pv25f6>
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteConfig.name} <span style="margin: 0 6px" data-astro-cid-j7pv25f6>•</span>
Powered by <a href="https://foliomade.com" target="_blank" rel="noopener noreferrer" data-astro-cid-j7pv25f6>Foliomade</a> </footer> </div>`} ${siteConfig?.scripts && siteConfig.scripts.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`${siteConfig.scripts.map((src) => renderTemplate(_a || (_a = __template(["<script", " defer><\/script>"])), addAttribute(src, "src")))}` })}`} </body> </html>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/src/pages/index.astro", void 0);

const $$file = "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/src/pages/index.astro";
const $$url = "/t/classic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
