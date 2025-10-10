import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_BfIubAXm.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DCGmmhsP.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/","cacheDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/node_modules/.astro/","outDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/dist/","srcDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/","publicDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/public/","buildClientDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/dist/client/","buildServerDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}body{margin:0;color:#e5e7eb;background:#000}.bg[data-astro-cid-zetdm5md]{position:fixed;inset:0;background:radial-gradient(1200px 800px at 50% -10%,#0b1220,#0b0f1a 45%,#0a0a0a);opacity:.95}.wrap[data-astro-cid-zetdm5md]{position:relative;min-height:100vh;display:grid;place-items:center;padding:24px}.card[data-astro-cid-zetdm5md]{text-align:center;max-width:860px}.tag[data-astro-cid-zetdm5md]{display:inline-block;padding:6px 12px;border-radius:999px;background:#6366f124;color:#c7d2fe;font-weight:600;font-size:12px;letter-spacing:.04em;border:1px solid rgba(99,102,241,.28)}h1[data-astro-cid-zetdm5md]{margin:12px 0 4px;font-size:clamp(2rem,5vw,3.25rem);letter-spacing:-.01em;font-weight:800}p[data-astro-cid-zetdm5md]{color:#a1a1aa;margin:10px 0;font-size:1.025rem}.img[data-astro-cid-zetdm5md]{display:block;margin:0 auto 12px;width:min(620px,92vw);height:auto;filter:drop-shadow(0 10px 40px rgba(99,102,241,.32))}.row[data-astro-cid-zetdm5md]{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:18px}.btn[data-astro-cid-zetdm5md]{display:inline-block;padding:11px 16px;border-radius:12px;font-weight:700;font-size:14px}.primary[data-astro-cid-zetdm5md]{background:linear-gradient(90deg,#6366f1,#10b981);color:#fff;box-shadow:0 6px 22px #6366f159}.secondary[data-astro-cid-zetdm5md]{color:#e5e7eb;border:1px solid rgba(148,163,184,.35);background-color:#ffffff0f}footer[data-astro-cid-zetdm5md]{margin-top:26px;color:#a1a1aa;font-size:13px}a[data-astro-cid-zetdm5md]{color:#c7d2fe;text-decoration:none}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/t/zen/_astro/index.B_mcO00q.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/t/zen/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:../../node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C6pUDKzE.mjs","/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bt6oobv2.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/t/zen/_astro/index.B_mcO00q.css","/t/zen/check.svg","/t/zen/external.svg","/t/zen/favicon.svg","/t/zen/menu.svg","/t/zen/preview.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"0mGj/vWIDW/+dJAv1lo6v36+yJMMAFwGrKIRvhVVBmY=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/zen/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
