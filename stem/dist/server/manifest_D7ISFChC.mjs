import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_ClqnVeDH.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B_ldT30K.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/","cacheDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/node_modules/.astro/","outDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/dist/","srcDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/src/","publicDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/public/","buildClientDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/dist/client/","buildServerDir":"file:///Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent:{siteConfig?.accentColor || \"#3175D1\"}}.pill[data-astro-cid-j7pv25f6]{display:inline-block;padding:6px 10px;border-radius:20px;background:#eef2f7;border:1px solid #e5e9f2;margin:4px 6px 0 0;font-size:12px}.muted[data-astro-cid-j7pv25f6]{color:#64748b}.card[data-astro-cid-j7pv25f6]{background:#fff;border:1px solid #e7ecf2;border-radius:12px;padding:16px;margin:10px 0}.btn-accent[data-astro-cid-j7pv25f6]{background:var(--accent);color:#fff;border-radius:8px;padding:8px 12px;text-decoration:none;display:inline-block}.social-links[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:999px;border:1px solid #e5e9f2;color:#0f172a;margin-right:8px;transition:background .15s ease,color .15s ease}.social-links[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]:hover{background:var(--accent);color:#fff}.social-links[data-astro-cid-j7pv25f6] svg[data-astro-cid-j7pv25f6]{width:18px;height:18px;fill:currentColor}.portfolio-grid[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap;gap:16px}.portfolio-card[data-astro-cid-j7pv25f6]{position:relative;flex:1 1 300px;min-width:260px;background:#fff;border:1px solid #e7ecf2;border-radius:12px;padding:22px;transition:box-shadow .18s ease,transform .18s ease}.portfolio-card[data-astro-cid-j7pv25f6]:hover{box-shadow:0 4px 20px #0f172a14;transform:translateY(-2px)}.portfolio-card[data-astro-cid-j7pv25f6] .content[data-astro-cid-j7pv25f6]{position:relative;z-index:1}.link-chip[data-astro-cid-j7pv25f6]{display:inline-block;border:1px solid #e5e9f2;background:#f8fafc;color:#0f172a;padding:8px 10px;border-radius:10px;margin:6px 8px 0 0;font-size:13px}.link-chip[data-astro-cid-j7pv25f6]:hover{color:#0f172a;text-decoration:none;border-color:color-mix(in oklab,var(--accent) 40%,#e5e9f2)}.icon-link[data-astro-cid-j7pv25f6]{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:999px;border:1px solid #e5e9f2;color:#0f172a;transition:background .15s ease,color .15s ease}.icon-link[data-astro-cid-j7pv25f6]:hover{background:var(--accent);color:#fff;text-decoration:none}.icon-link[data-astro-cid-j7pv25f6] svg[data-astro-cid-j7pv25f6]{width:18px;height:18px;fill:currentColor}.experience-bullets[data-astro-cid-j7pv25f6]{margin:8px 0 0;padding-left:1px;list-style:disc}.experience-bullets[data-astro-cid-j7pv25f6] li[data-astro-cid-j7pv25f6]{margin:10px 0;color:#334155}.main-timeline[data-astro-cid-j7pv25f6] .date-outer[data-astro-cid-j7pv25f6] .date[data-astro-cid-j7pv25f6]{border-color:var(--accent)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/t/stem/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:../../node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D7ISFChC.mjs","/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_eE7MjCWe.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/t/stem/preview.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"5zdr61XnPHgdtch4vdmNbQ1HFxHanj/PFmjP8rn0e7M=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/samsonoyetola/workspace/NextJs/foliomade-monorepo/foliomade/templates/stem/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
