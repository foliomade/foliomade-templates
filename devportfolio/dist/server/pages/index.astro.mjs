import { e as createComponent, f as createAstro, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as Fragment, n as renderHead } from '../chunks/astro/server_DIc26fA9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteConfig } = Astro2.props;
  const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
  const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;
  const hasEducation = siteConfig.education && siteConfig.education.length > 0;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header id="header" class="fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300" data-astro-cid-3ef6ksr2> <nav class="max-w-7xl mx-auto px-8 py-4" data-astro-cid-3ef6ksr2> <ul class="flex items-center gap-8 justify-center" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="#about" class="text-gray-700 hover:text-black transition-colors font-medium" data-astro-cid-3ef6ksr2>\nAbout\n</a> </li> ', " ", " ", ' </ul> </nav> </header> <script>\n  window.addEventListener("scroll", () => {\n    const header = document.getElementById("header");\n    if (window.scrollY > 100) {\n      header?.classList.add("bg-white/80", "backdrop-blur-sm");\n    } else {\n      header?.classList.remove("bg-white/80", "backdrop-blur-sm");\n    }\n  });\n<\/script> '])), maybeRenderHead(), hasProjects && renderTemplate`<li data-astro-cid-3ef6ksr2> <a href="#projects" class="text-gray-700 hover:text-black transition-colors font-medium" data-astro-cid-3ef6ksr2>
Projects
</a> </li>`, hasExperience && renderTemplate`<li data-astro-cid-3ef6ksr2> <a href="#experience" class="text-gray-700 hover:text-black transition-colors font-medium" data-astro-cid-3ef6ksr2>
Experience
</a> </li>`, hasEducation && renderTemplate`<li data-astro-cid-3ef6ksr2> <a href="#education" class="text-gray-700 hover:text-black transition-colors font-medium" data-astro-cid-3ef6ksr2>
Education
</a> </li>`);
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/components/Header.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { siteConfig } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="hero" class="relative isolate overflow-hidden bg-white py-24 md:h-screen"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")} data-astro-cid-bbe6dxrz> <!-- Gradient overlay --> <div class="absolute inset-0 -z-10"${addAttribute(`background: radial-gradient(ellipse 800px 1200px at 0% 0%, ${siteConfig.accentColor}40 0%, ${siteConfig.accentColor}25 20%, ${siteConfig.accentColor}10 40%, rgba(255, 255, 255, 0.3) 70%, rgba(255, 255, 255, 0.8) 90%, white 100%)`, "style")} data-astro-cid-bbe6dxrz></div> <svg aria-hidden="true" class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" data-astro-cid-bbe6dxrz> <defs data-astro-cid-bbe6dxrz> <pattern x="50%"${addAttribute(-1, "y")} id="0787a7c5-978c-4f66-83c7-11c213f99cb7"${addAttribute(200, "width")}${addAttribute(200, "height")} patternUnits="userSpaceOnUse" data-astro-cid-bbe6dxrz> <path d="M.5 200V.5H200" fill="none" data-astro-cid-bbe6dxrz></path> </pattern> <pattern id="programming-symbols" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse" data-astro-cid-bbe6dxrz> <text x="50" y="50"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="24" transform="rotate(-15)" data-astro-cid-bbe6dxrz>&lt;/&gt;</text> <text x="150" y="100"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="20" transform="rotate(10)" data-astro-cid-bbe6dxrz>${ void 0}</text> <text x="250" y="80"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="18" transform="rotate(-5)" data-astro-cid-bbe6dxrz>=&gt;</text> <text x="100" y="200"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="22" transform="rotate(15)" data-astro-cid-bbe6dxrz>[]</text> <text x="300" y="180"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="20" transform="rotate(-10)" data-astro-cid-bbe6dxrz>&lt;&gt;</text> <text x="200" y="250"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="24" transform="rotate(5)" data-astro-cid-bbe6dxrz>()</text> <text x="50" y="320"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="18" transform="rotate(-8)" data-astro-cid-bbe6dxrz>::</text> <text x="350" y="300"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="22" transform="rotate(12)" data-astro-cid-bbe6dxrz>==</text> <text x="150" y="350"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="20" transform="rotate(-15)" data-astro-cid-bbe6dxrz>++</text> <text x="250" y="370"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="24" transform="rotate(8)" data-astro-cid-bbe6dxrz>;</text> </pattern> </defs> <rect fill="url(#programming-symbols)" width="100%" height="100%" opacity="0.2" data-astro-cid-bbe6dxrz></rect> <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%"${addAttribute(0, "stroke-width")} data-astro-cid-bbe6dxrz></rect> </svg> <div class="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center" data-astro-cid-bbe6dxrz> <div data-astro-cid-bbe6dxrz> <h2 class="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 animate-fade-in" data-astro-cid-bbe6dxrz>
Hello! 👋
</h2> <h1 class="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 animate-fade-in animation-delay-200" data-astro-cid-bbe6dxrz>
I'm <span${addAttribute({ color: siteConfig.accentColor }, "style")} data-astro-cid-bbe6dxrz>${siteConfig.name}</span> </h1> <p class="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 animate-fade-in animation-delay-400" data-astro-cid-bbe6dxrz> ${siteConfig.title} </p> </div> </div> <div class="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in animation-delay-600" data-astro-cid-bbe6dxrz> ${siteConfig.social?.email && renderTemplate`<a${addAttribute(`mailto:${siteConfig.social.email}`, "href")} aria-label="Email" class="transition-colors duration-300 hover:text-[var(--accent-color)]" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" data-astro-cid-bbe6dxrz> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-bbe6dxrz></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" data-astro-cid-bbe6dxrz></path> <path d="M3 7l9 6l9 -6" data-astro-cid-bbe6dxrz></path> </svg> </a>`} ${siteConfig.social?.linkedin && renderTemplate`<a${addAttribute(siteConfig.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="transition-colors duration-300 hover:text-[var(--accent-color)]" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-bbe6dxrz></path> <path d="M8 11v5" data-astro-cid-bbe6dxrz></path> <path d="M8 8v.01" data-astro-cid-bbe6dxrz></path> <path d="M12 16v-5" data-astro-cid-bbe6dxrz></path> <path d="M16 16v-3a2 2 0 1 0 -4 0" data-astro-cid-bbe6dxrz></path> <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" data-astro-cid-bbe6dxrz></path> ` })} </svg> </a>`} ${siteConfig.social?.twitter && renderTemplate`<a${addAttribute(siteConfig.social.twitter, "href")} target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="transition-colors duration-300 hover:text-[var(--accent-color)]" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-bbe6dxrz></path> <path d="M4 4l11.733 16h4.267l-11.733 -16z" data-astro-cid-bbe6dxrz></path> <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" data-astro-cid-bbe6dxrz></path> ` })} </svg> </a>`} ${siteConfig.social?.github && renderTemplate`<a${addAttribute(siteConfig.social.github, "href")} target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="transition-colors duration-300 hover:text-[var(--accent-color)]" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-bbe6dxrz></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-astro-cid-bbe6dxrz></path> ` })} </svg> </a>`} </div> </div> `;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/components/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  const { siteConfig } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="p-8 sm:p-12 md:p-16 lg:p-24"> <div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"> <div class="lg:col-span-4"> <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
About Me
</h2> <div class="w-[75px] h-[5px] mt-2 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}></div> </div> <div class="lg:col-span-8 space-y-8"> <p class="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600"> ${siteConfig.aboutMe} </p> ${siteConfig.resumeUrl && renderTemplate`<div class="pt-2"> <a${addAttribute(siteConfig.resumeUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}> <span>View Resume</span> </a> </div>`} <div class="pt-4"> <div class="flex flex-wrap gap-3"> ${siteConfig.skills.map((skill) => renderTemplate`<span class="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-800 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-200 transition-colors duration-200"> ${skill} </span>`)} </div> </div> </div> </div> </div> </section>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/components/About.astro", void 0);

const $$Astro$4 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Projects;
  const { siteConfig } = Astro2.props;
  const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
  return renderTemplate`${hasProjects && renderTemplate`${maybeRenderHead()}<section id="projects" class="p-8 sm:p-12 md:p-16 lg:p-24"><div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"><div class="lg:col-span-4"><h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
Projects
</h2><div class="w-[75px] h-[5px] mt-2 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}></div></div><div class="lg:col-span-8"><div class="space-y-8">${siteConfig.projects.map((project, index) => {
    const Component = project.link ? "a" : "div";
    const linkProps = project.link ? {
      href: project.link,
      target: "_blank",
      rel: "noopener noreferrer"
    } : {};
    return renderTemplate`<div class="group relative">${renderComponent($$result, "Component", Component, { ...linkProps, "class": `block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 ${project.link ? "hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1" : ""}` }, { "default": ($$result2) => renderTemplate`${project.link && renderTemplate`<div class="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-gray-700"><svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17"></path></svg></div>`}<div class="space-y-4"><div><span class="text-sm font-mono"${addAttribute({ color: siteConfig.accentColor }, "style")}>
0${index + 1}</span><h3 class="text-xl sm:text-2xl font-bold text-gray-900 mt-1">${project.name}</h3></div><p${addAttribute(`text-base sm:text-lg text-gray-600 leading-relaxed ${project.link ? "pr-12 sm:pr-14 md:pr-16" : ""}`, "class")}>${project.description}</p>${project.skills && project.skills.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1.5 sm:gap-2 pt-2">${project.skills.map((skill) => renderTemplate`<span${addAttribute(`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${project.link ? "group-hover:bg-gray-800" : ""}`, "class")}>${skill}</span>`)}</div>`}</div>` })}</div>`;
  })}</div></div></div></div></section>`}`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/components/Projects.astro", void 0);

const $$Astro$3 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const { siteConfig } = Astro2.props;
  const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;
  return renderTemplate`${hasExperience && renderTemplate`${maybeRenderHead()}<section id="experience" class="p-8 sm:p-12 md:p-16 lg:p-24"><div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"><div class="lg:col-span-4"><h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
Experience
</h2><div class="w-[75px] h-[5px] mt-2 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}></div></div><div class="lg:col-span-8"><div class="relative">${siteConfig.experience.map((exp, index) => renderTemplate`<div class="relative mb-12 last:mb-0"><div class="absolute left-1/2 -top-2 w-4 h-4 bg-white border-2 rounded-full -translate-x-1/2 z-20 transition-all duration-300"${addAttribute(`border-color: ${siteConfig.accentColor}; background-color: ${siteConfig.accentColor}`, "style")}></div>${index < siteConfig.experience.length - 1 && renderTemplate`<div class="absolute left-1/2 bottom-0 w-0.5 h-12 bg-gray-300 -translate-x-1/2 translate-y-full z-10"></div>`}<div class="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"><div><h3 class="text-lg sm:text-xl font-semibold text-gray-900">${exp.title}</h3><p class="text-base sm:text-lg"${addAttribute(`color: ${siteConfig.accentColor}`, "style")}>${exp.company}</p></div><span class="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">${exp.dateRange}</span></div><ul class="space-y-2">${exp.bullets.map((bullet) => renderTemplate`<li class="flex items-start"><span class="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span><span class="text-sm sm:text-base text-gray-600">${bullet}</span></li>`)}</ul></div></div>`)}</div></div></div></div></section>`}`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/components/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$Education = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Education;
  const { siteConfig } = Astro2.props;
  const hasEducation = siteConfig.education && siteConfig.education.length > 0;
  return renderTemplate`${hasEducation && renderTemplate`${maybeRenderHead()}<section id="education" class="p-8 sm:p-12 md:p-16 lg:p-24"><div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"><div class="lg:col-span-4"><h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
Education
</h2><div class="w-[75px] h-[5px] mt-2 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}></div></div><div class="lg:col-span-8"><div class="space-y-8">${siteConfig.education.map((edu) => renderTemplate`<div class="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300"><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4"><div><h3 class="text-lg sm:text-xl font-semibold text-gray-900">${edu.degree}</h3><p class="text-base sm:text-lg"${addAttribute(`color: ${siteConfig.accentColor}`, "style")}>${edu.school}</p></div><span class="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">${edu.dateRange}</span></div><ul class="space-y-2">${edu.achievements.map((achievement) => renderTemplate`<li class="flex items-start"><span class="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span><span class="text-sm sm:text-base text-gray-600">${achievement}</span></li>`)}</ul></div>`)}</div></div></div></div></section>`}`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/components/Education.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { siteConfig } = Astro2.props;
  const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
  const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;
  const hasEducation = siteConfig.education && siteConfig.education.length > 0;
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-gray-50 border-t border-gray-200"> <div class="mx-auto max-w-6xl px-6 py-12 lg:px-8"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8"> <div class="flex flex-col gap-4"> <h3 class="text-2xl font-bold text-gray-800"> ${siteConfig.name} </h3> <p class="text-base text-gray-600"> ${siteConfig.title} </p> <div class="flex gap-x-6"> <a${addAttribute(`mailto:${siteConfig.social.email}`, "href")} aria-label="Email" class="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg> </a> <a${addAttribute(siteConfig.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 1 0 -4 0"></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path></svg> </a> <a${addAttribute(siteConfig.social.twitter, "href")} target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg> </a> <a${addAttribute(siteConfig.social.github, "href")} target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> </a> </div> </div> <div class="hidden md:block flex flex-col md:items-end gap-4"> <nav class="flex gap-x-8"> <a href="#about" class="text-sm text-gray-600 hover:text-gray-800 transition-colors">About</a> ${hasProjects && renderTemplate`<a href="#projects" class="text-sm text-gray-600 hover:text-gray-800 transition-colors">
Projects
</a>`} ${hasExperience && renderTemplate`<a href="#experience" class="text-sm text-gray-600 hover:text-gray-800 transition-colors">
Experience
</a>`} ${hasEducation && renderTemplate`<a href="#education" class="text-sm text-gray-600 hover:text-gray-800 transition-colors">
Education
</a>`} </nav> <p class="text-sm text-gray-500">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteConfig.name}. All rights reserved.
</p> <p class="text-sm text-gray-500 mt-4">
Powered by
<a href="https://foliomade.com" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 text-gray-600 hover:text-[var(--accent-color)] transition-colors"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}>
Foliomade
</a> </p> </div> </div> </div> <!-- Decorative pattern --> <div class="absolute inset-0 -z-10 overflow-hidden"> <svg aria-hidden="true" class="absolute bottom-0 left-0 w-full h-24 text-gray-100"> <pattern id="footer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"> <path d="M0 50 Q 25 40, 50 50 T 100 50" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4"></path> </pattern> <rect width="100%" height="100%" fill="url(#footer-pattern)"></rect> </svg> </div> </footer>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/components/Footer.astro", void 0);

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
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(siteConfig?.description || "Developer portfolio", "content")}><!-- Theming for browsers using the portfolio accent color --><meta name="theme-color"${addAttribute(siteConfig?.accentColor || "#22c55e", "content")}><meta name="msapplication-navbutton-color"${addAttribute(siteConfig?.accentColor || "#22c55e", "content")}><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"><title>${siteConfig ? `${siteConfig?.name} - ${siteConfig?.title}` : "Portfolio Not Found"}</title>${renderHead()}</head> <body${addAttribute(`--accent: ${siteConfig?.accentColor || "#22c55e"}`, "style")}> ${notFound ? renderTemplate`<main style="min-height: 100vh; display:grid; place-items:center; background:#0b0f1a; color:#e5e7eb;"> <section style="text-align:center; max-width: 720px; padding: 2rem;"> <h1 style="font-size: clamp(2.25rem, 6vw, 4rem); line-height:1.05; margin:0 0 .75rem; font-weight:800;">Portfolio Not Found</h1> <p style="color:#9ca3af; font-size: clamp(1rem, 1.2vw, 1.15rem); margin: 0 0 1.5rem;">The requested portfolio is private or does not exist.</p> <a href="/" style="display:inline-block; padding:.7rem 1rem; border-radius:999px; border:1px solid rgba(148,163,184,.35); color:#e5e7eb; text-decoration:none; background-color: rgba(255,255,255,.06);">← Back to Home</a> </section> </main>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "siteConfig": siteConfig })} <section> ${renderComponent($$result2, "Hero", $$Hero, { "siteConfig": siteConfig })} ${renderComponent($$result2, "About", $$About, { "siteConfig": siteConfig })} ${renderComponent($$result2, "Projects", $$Projects, { "siteConfig": siteConfig })} ${renderComponent($$result2, "Experience", $$Experience, { "siteConfig": siteConfig })} ${renderComponent($$result2, "Education", $$Education, { "siteConfig": siteConfig })} </section> ${renderComponent($$result2, "Footer", $$Footer, { "siteConfig": siteConfig })} ${siteConfig?.scripts && siteConfig.scripts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${siteConfig.scripts.map((src) => renderTemplate(_a || (_a = __template(["<script", " defer><\/script>"])), addAttribute(src, "src")))}` })}`}` })}`} </body> </html>`;
}, "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/pages/index.astro", void 0);

const $$file = "/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/devportfolio/src/pages/index.astro";
const $$url = "/t/devportfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
