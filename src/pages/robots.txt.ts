import type { APIRoute } from 'astro';
import { robotsRules } from '../metadata-cases/host-files.ts';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const root = site ? new URL(base.endsWith('/') ? base : `${base}/`, site) : undefined;
  const sitemap = root ? `\nSitemap: ${new URL('sitemap-index.xml', root).href}\n` : '';
  return new Response(robotsRules(base) + sitemap, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
