import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_ClqnVeDH.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BhXJDYtA.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/","cacheDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/node_modules/.astro/","outDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/dist/","srcDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/src/","publicDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/public/","buildClientDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/dist/client/","buildServerDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}body{margin:0;color:#e5e7eb;background:radial-gradient(1200px 800px at 50% -10%,#0b1220,#0b0f1a 45%,#0a0a0a);line-height:1.6}a[data-astro-cid-zetdm5md]{color:#10b981;text-decoration:none}.wrap[data-astro-cid-zetdm5md]{min-height:100vh;display:grid;place-items:center;padding:24px}.card[data-astro-cid-zetdm5md]{text-align:center;max-width:820px}h1[data-astro-cid-zetdm5md]{margin:12px 0 4px;font-size:clamp(2rem,5vw,3rem);letter-spacing:-.01em}p[data-astro-cid-zetdm5md]{color:#94a3b8;margin:10px 0}.img[data-astro-cid-zetdm5md]{display:block;margin:0 auto 12px;width:min(560px,90vw);height:auto;filter:drop-shadow(0 10px 40px rgba(16,185,129,.25))}.row[data-astro-cid-zetdm5md]{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px}.btn[data-astro-cid-zetdm5md]{display:inline-block;padding:10px 14px;border-radius:999px;font-weight:700;font-size:14px}.primary[data-astro-cid-zetdm5md]{background:#10b981;color:#fff;box-shadow:0 6px 22px #10b98159}.secondary[data-astro-cid-zetdm5md]{color:#e5e7eb;border:1px solid rgba(148,163,184,.35);background-color:#ffffff0f}.tag[data-astro-cid-zetdm5md]{display:inline-block;padding:6px 12px;border-radius:999px;background:#10b9811f;color:#34d399;font-weight:600;font-size:12px;letter-spacing:.04em;border:1px solid rgba(16,185,129,.25)}footer[data-astro-cid-zetdm5md]{margin-top:24px;color:#94a3b8;font-size:13px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}:root{--bg: #f8fafc;--text: #0f172a;--muted: #475569;--muted-2: #334155;--card-bg: #ffffff;--card-border: #e7ecf2;--pill-bg: #eef2f7;--pill-text: #0f172a;--pill-border: #e5e9f2;--divider: #e7ecf2;--footer: #64748b}[data-astro-cid-j7pv25f6][data-theme=dark]{--bg: #0b0f1a;--text: #e5e7eb;--muted: #a1a1aa;--muted-2: #94a3b8;--card-bg: #0f172a;--card-border: rgba(148,163,184,.25);--pill-bg: rgba(148,163,184,.12);--pill-text: #e5e7eb;--pill-border: rgba(148,163,184,.25);--divider: rgba(148,163,184,.25);--footer: #9ca3af}body{margin:0;color:var(--text);background:var(--bg);line-height:1.6}.wrap[data-astro-cid-j7pv25f6]{max-width:960px;margin:0 auto;padding:40px 24px}.badge[data-astro-cid-j7pv25f6]{display:inline-block;padding:6px 12px;border-radius:999px;background:color-mix(in oklab,var(--accent) 90%,white);color:#0b1220;font-weight:600;font-size:12px;letter-spacing:.04em;border:1px solid color-mix(in oklab,var(--accent) 60%,#0000)}h1[data-astro-cid-j7pv25f6]{margin:14px 0 6px;font-size:44px;letter-spacing:-.01em;color:var(--text)}h2[data-astro-cid-j7pv25f6]{margin:36px 0 12px;font-size:22px;color:var(--text);letter-spacing:0}p[data-astro-cid-j7pv25f6]{color:var(--muted-2);margin:10px 0}.muted[data-astro-cid-j7pv25f6]{color:var(--muted)}.pill[data-astro-cid-j7pv25f6]{display:inline-block;padding:8px 12px;border-radius:999px;background:var(--pill-bg);color:var(--pill-text);margin:6px 8px 0 0;font-size:13px;border:1px solid var(--pill-border)}.card[data-astro-cid-j7pv25f6]{background:var(--card-bg);border:1px solid var(--card-border);border-radius:14px;padding:18px;margin:14px 0;transition:box-shadow .18s ease,transform .18s ease}.card[data-astro-cid-j7pv25f6]:hover{box-shadow:0 4px 20px #0f172a1f;transform:translateY(-1px)}a[data-astro-cid-j7pv25f6]{color:var(--accent);text-decoration:none}header[data-astro-cid-j7pv25f6]{padding:36px 0 18px;border-bottom:1px solid var(--divider);position:relative}footer[data-astro-cid-j7pv25f6]{margin:56px 0 24px;color:var(--footer);font-size:13px}.section[data-astro-cid-j7pv25f6]{padding-top:8px}.section[data-astro-cid-j7pv25f6]+.section[data-astro-cid-j7pv25f6]{margin-top:18px}.row[data-astro-cid-j7pv25f6]{display:flex;justify-content:space-between;align-items:center;gap:12px}.btn[data-astro-cid-j7pv25f6]{display:inline-block;background:var(--accent);color:#fff;padding:8px 12px;border-radius:10px;font-size:13px;font-weight:600;box-shadow:0 2px 8px #0f172a1a}ul[data-astro-cid-j7pv25f6]{padding-left:18px;margin:10px 0 0}li[data-astro-cid-j7pv25f6]{margin:6px 0;color:var(--muted-2)}.theme-toggle[data-astro-cid-j7pv25f6]{position:fixed;right:16px;top:16px;width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid var(--card-border);color:var(--muted);background:var(--card-bg)}[data-astro-cid-j7pv25f6][data-theme=light] .icon-sun[data-astro-cid-j7pv25f6],[data-astro-cid-j7pv25f6][data-theme=dark] .icon-moon[data-astro-cid-j7pv25f6]{display:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/t/classic/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:../../node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bq4j17Re.mjs","/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BS4MgV83.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/t/classic/preview.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"MOCURd0NmMMeN2/JbVOimyyaqs1/Fzqo3+Cx7BEDMQE=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/classic/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
