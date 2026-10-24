import type { APIRoute } from 'astro';
import { srcDir } from 'astro:config/server';
import { assetHref, normalizeBase } from '../../../metadata-cases/cases';
import { listAssets, readAsset } from '../../../metadata-cases/node-io.mjs';

const assetDir = new URL('metadata-cases/assets/', srcDir);
const manifests = ['app.webmanifest', 'second.webmanifest'];
const contentTypes: Record<string, string> = {
  '.png': 'image/png', '.ico': 'image/x-icon', '.svg': 'image/svg+xml',
  '.css': 'text/css; charset=utf-8',
};

export async function getStaticPaths() {
  const names = [...await listAssets(assetDir), ...manifests];
  return names.map(asset => ({ params: { asset } }));
}

export const GET: APIRoute = async ({ params }) => {
  const name = params['asset']!;
  if (manifests.includes(name)) {
    const base = import.meta.env.BASE_URL;
    const manifest = {
      id: `${normalizeBase(base)}cases/`,
      name: name === 'second.webmanifest' ? 'Second manifest sentinel' : 'Local metadata research',
      short_name: 'Research', start_url: `${normalizeBase(base)}cases/`,
      scope: `${normalizeBase(base)}cases/`, display: 'standalone',
      icons: [192, 512].map(size => ({ src: assetHref(`icon-${size}.png`, base), sizes: `${size}x${size}`, type: 'image/png', purpose: 'any maskable' })),
    };
    return new Response(JSON.stringify(manifest, null, 2), { headers: { 'Content-Type': 'application/manifest+json' } });
  }
  // getStaticPaths limits these to the known files. No external assets or tools.
  if (name.includes('/') || name.includes('\\')) return new Response(null, { status: 404 });
  try {
    const bytes = await readAsset(new URL(name, assetDir));
    return new Response(bytes, { headers: { 'Content-Type': contentTypes[name.slice(name.lastIndexOf('.'))] ?? 'application/octet-stream' } });
  } catch {
    return new Response(null, { status: 404 });
  }
};
