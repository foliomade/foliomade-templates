import { TemplateInput } from './types';

export type PortfolioSiteConfig = {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  scripts?: string[];
  resumeUrl?: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  aboutMe: string;
  skills: string[];
  projects: Array<{
    name: string;
    description?: string;
    link?: string;
    skills?: string[];
  }>;
  experience: Array<{
    company: string;
    title: string;
    dateRange?: string;
    bullets: string[];
  }>;
  education: Array<{
    school: string;
    degree?: string;
    dateRange?: string;
    achievements: string[];
  }>;
};

export const DEFAULT_ACCENT = '#14b8a6'; // teal

// Resolve public app base for scripts when building static or embedding remotely
const PUBLIC_APP_BASE_URL: string =
  (typeof import.meta !== 'undefined' && (import.meta as any)?.env?.PUBLIC_APP_BASE_URL) ||
  (typeof process !== 'undefined' && process.env?.PUBLIC_APP_BASE_URL) ||
  '';

export function buildPortfolioSiteConfig(input: TemplateInput): PortfolioSiteConfig {
  const fullName =
    [input?.firstName, input?.lastName].filter(Boolean).join(' ').trim() || 'Your Name';

  const skills: string[] = (input.skills || []).map((s) => s?.name).filter(Boolean) as string[];

  const projects = (input.projects || []).map((p) => ({
    name: p.name,
    description: p.description || undefined,
    link: p.link || undefined,
    skills: (p.techStack || '')
      .split(/[,|]/)
      .map((s) => s.trim())
      .filter(Boolean),
  }));

  const experience = (input.experiences || []).map((e) => ({
    company: e.companyName,
    title: e.title,
    dateRange: [e.startDate, e.endDate].filter(Boolean).join(' - ') || undefined,
    bullets:
      (e.bullets && e.bullets.length
        ? e.bullets
        : (e.description || '')
            .split(/\n|•|-/)
            .map((b) => b.trim())
            .filter(Boolean)) || [],
  }));

  const education = (input.education || []).map((ed) => ({
    school: ed.school,
    degree: [ed.degree, ed.field].filter(Boolean).join(' • ') || undefined,
    dateRange: [ed.startDate, ed.endDate].filter(Boolean).join(' - ') || undefined,
    achievements: (ed.description || '')
      .split(/\n|•|-/)
      .map((a) => a.trim())
      .filter(Boolean),
  }));

  const social = {
    email: input?.email || undefined,
    linkedin: input?.linkedInUrl || undefined,
    twitter: undefined, // not captured in current schema
    github: input?.githubUrl || undefined,
  };

  const cfg: PortfolioSiteConfig = {
    name: fullName,
    title: input.roleTitle || input?.title || 'Professional Title',
    description: input.summary || `Portfolio website of ${fullName}`,
    accentColor: input.themeColor || DEFAULT_ACCENT,
    scripts: [],
    resumeUrl: input.resumeUrl || undefined,
    social,
    aboutMe:
      input.summary ||
      'Write a concise summary highlighting your strengths, passions, and what you bring to a team.',
    skills,
    projects,
    experience,
    education,
  };

  // Calendar widget: render floating "Schedule Time" button above chat if calendarUrl is present
  if (input.calendarUrl) {
    const base = PUBLIC_APP_BASE_URL || '';
    const calSrc = `${base}/widgets/calender.js?calendarUrl=${encodeURIComponent(input.calendarUrl)}`;
    cfg.scripts = [...(cfg.scripts || []), calSrc];
  }

  // Initialize chat widget script from config to keep templates clean.
  // Uses same-origin API base by default inside the widget; only requires portfolioId.
  if (input.enableFaqs && input.id) {
    const base = PUBLIC_APP_BASE_URL || '';
    const src = `${base}/widgets/chat.min.js?portfolioId=${encodeURIComponent(input.id)}${
      base ? `&apiBase=${encodeURIComponent(base)}` : ''
    }`;
    cfg.scripts = [...(cfg.scripts || []), src];
  }

  // Always include lightweight analytics widget if portfolio id is available
  if (input.id) {
    const base = PUBLIC_APP_BASE_URL || '';
    const aSrc = `${base}/widgets/analytics.min.js?portfolioId=${encodeURIComponent(input.id)}${
      base ? `&apiBase=${encodeURIComponent(base)}` : ''
    }`;
    cfg.scripts = [...(cfg.scripts || []), aSrc];
  }

  return cfg;
}

// Utility used by the Astro page to fetch config at runtime
export async function fetchSiteConfig(
  portfolioId?: string | null,
): Promise<PortfolioSiteConfig | undefined> {
  if (!portfolioId) {
    // No portfolio ID available; nothing to fetch.
    return undefined;
  }

  try {
    // Determine effective base for SSR vs browser
    let effectiveBase = '';
    if (typeof window === 'undefined') {
      const port = process.env.PORT || '3100';
      // Prefer explicitly configured SSR internal base; fall back to legacy var; then localhost
      effectiveBase =
        process.env.TEMPLATES_SSR_API_BASE_URL ||
          `http://localhost:${port}`;
    } else {
      // In the browser, use configured public base if provided; otherwise same-origin
      effectiveBase = PUBLIC_APP_BASE_URL || '';
    }

    const endpoint = effectiveBase
      ? `${effectiveBase}/api/public/portfolios/${encodeURIComponent(portfolioId)}`
      : `/api/public/portfolios/${encodeURIComponent(portfolioId)}`;

    const res = await fetch(endpoint, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Status Code ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const tpl = data.data as TemplateInput;
    return buildPortfolioSiteConfig(tpl);
  } catch (err) {
    // Log for diagnostics only; return undefined so callers can render fallbacks
    console.error('Error Fetching portfolio config.', err);
    return undefined;
  }
}
