import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { parseArgs } from 'node:util';
import { cases, caseHref, compareHref, sourceHref, resultsHref, openHref, normalizeBase, renderCase } from '../src/metadata-cases/cases.ts';
import { buildOrigin } from '../src/metadata-cases/build-origin.mjs';
import { hostFiles } from '../src/metadata-cases/host-files.ts';

const { values } = parseArgs({ options: {
  'out-dir': { type: 'string', default: 'dist' },
  base: { type: 'string', default: '/' },
  origin: { type: 'string' },
} });
const output = resolve(values['out-dir']);
const base = normalizeBase(values.base);
// Astro's base is a mount point; it is not a subdirectory of dist.
const file = href => join(output, href.slice(base.length));
const read = path => readFile(path, 'utf8');
const reference = cases.find(c => c.group === 'metadata' && c.id === 'explicit-og');
const referenceHtml = await read(file(sourceHref(reference, base)));
const observedUrl = referenceHtml.match(/property="og:url" content="([^"]+)"/)?.[1];
assert.ok(observedUrl, 'Reference fixture must expose its built absolute URL');
const origin = values.origin ?? buildOrigin(process.env) ?? new URL(observedUrl).origin;
const index = await read(join(output, 'cases/index.html'));
const resultsIndex = await read(join(output, 'cases/results/index.html'));
assert.ok(resultsIndex.includes('name="robots" content="noindex"'), 'Results are observations, not indexable fixtures');

const guide = await read(join(output, 'cases/testing/index.html'));
assert.ok(index.includes(`href="${base}cases/testing/"`), 'The catalogue must expose the device-testing guide');
assert.ok(guide.includes('name="robots" content="noindex"'), 'The guide must not act as an indexable fixture');
for (const id of ['html-only', 'og-vs-html', 'twitter-vs-html', 'all-fields', 'twitter-first']) {
  assert.ok(guide.includes(`href="${base}cases/precedence/${id}/"`), `The guide must link to ${id} under the configured base`);
}

for (const definition of cases) {
  const label = `${definition.group}/${definition.id}`;
  const fixture = renderCase(definition, origin, base);
  const source = await read(file(sourceHref(definition, base)));
  assert.equal(source, fixture.html, `${label}: source must retain the intended origin, base and exact negative controls`);
  const comparison = await read(file(compareHref(definition, base)) + 'index.html');
  const results = await read(file(resultsHref(definition, base)) + 'index.html');
  assert.ok(results.includes(`>${label.replace('/', ' / ')}</h1>`), `${label}: the result table must belong to this case`);
  assert.ok(results.includes('<table>'), `${label}: a result table is missing`);
  assert.ok(results.includes('name="robots" content="noindex"'), `${label}: result pages must stay noindex`);
  assert.ok(results.includes(`href="${openHref(definition, base)}"`), `${label}: results must link to the actual test URL`);
  for (const page of [index, comparison, resultsIndex]) {
    assert.ok(page.includes(`href="${resultsHref(definition, base)}"`), `${label}: results must be discoverable`);
  }
  assert.ok(comparison.includes('Fixture head'), `${label}: comparison view is missing`);
  assert.ok(comparison.includes(`<iframe src="${base}cases/current/"`), `${label}: the comparison baseline is the current-page fixture`);
  assert.ok(index.includes(`href="${openHref(definition, base)}"`), `${label}: index must link to the test URL`);
  if (definition.options.redirect) {
    const html = await read(file(caseHref(definition, base)) + 'index.html');
    assert.match(html, /http-equiv="refresh"/i, 'Generic static hosting needs the Astro redirect fallback');
  } else if (definition.options.status === 404) {
    await assert.rejects(stat(file(caseHref(definition, base)) + 'index.html'), { code: 'ENOENT' }, 'The HTTP 404 test URL must be absent, not a 200 static page');
    assert.equal(await read(join(output, '404.html')), fixture.html, 'The custom 404 must preserve the error fixture');
  } else {
    assert.equal(await read(file(caseHref(definition, base)) + 'index.html'), source, `${label}: Astro must not rewrite the raw case HTML`);
  }
}

const assetDirectory = new URL('../src/metadata-cases/assets/', import.meta.url);
const assets = await readdir(assetDirectory);
for (const asset of assets) {
  assert.deepEqual(await readFile(join(output, 'cases/assets', asset)), await readFile(new URL(asset, assetDirectory)), `Asset bytes changed: ${asset}`);
}
for (const name of ['app.webmanifest', 'second.webmanifest']) {
  const manifest = JSON.parse(await read(join(output, 'cases/assets', name)));
  assert.equal(manifest.start_url, `${base}cases/`);
  assert.equal(manifest.scope, `${base}cases/`);
  assert.deepEqual(manifest.icons.map(icon => icon.src), [192, 512].map(size => `${base}cases/assets/icon-${size}.png`));
}

const expectedHostFiles = hostFiles(base);
assert.equal(await read(join(output, '_headers')), expectedHostFiles.headers);
assert.equal(await read(join(output, '_redirects')), expectedHostFiles.redirects);
const current = await read(join(output, 'cases/current/index.html'));
assert.ok(current.includes(`href="${base}favicon.ico"`), 'The baseline favicon must respect the mount point');
assert.ok(current.includes(`content="${new URL(`${base}cases/current/`, origin).href}"`), 'The baseline must use the deployment origin');
const home = await read(join(output, 'index.html'));
const homeUrl = new URL(base, origin).href;
assert.ok(home.includes(`<link rel="canonical" href="${homeUrl}">`), 'The landing page must name itself as canonical');
assert.ok(!home.includes('name="robots"'), 'The landing page is the indexable page');
assert.match(home, /<title>Astro Metadata Lab: [^<]+<\/title>/);
assert.match(home, /<meta property="og:image:alt" content="[^"]+"><meta name="twitter:card" content="summary_large_image">/, 'twitter:card follows the image tags');
assert.ok(home.includes(`content="${new URL(`${base}og-image.png`, origin).href}"`), 'The landing page needs an absolute social image');
await stat(join(output, 'og-image.png'));
const website = JSON.parse(home.match(/<script type="application\/ld\+json">(.+?)<\/script>/)[1]);
assert.equal(website['@type'], 'WebSite');
assert.equal(website.url, homeUrl);
assert.equal(website.publisher['@id'], 'https://cevdet.ch/#person');
assert.ok(home.includes(`href="${base}cases/"`), 'The landing page must lead into the catalogue');
assert.ok(!referenceHtml.includes('<script'), 'The ordinary fixture must not gain client scripts');
assert.ok(!referenceHtml.includes('rel="stylesheet"'), 'Comparison UI styles must not leak into ordinary fixtures');

async function outputFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await outputFiles(path));
    else files.push(path);
  }
  return files;
}
const files = await outputFiles(output);
assert.ok(!files.some(path => /\.(?:js|mjs|cjs)$/.test(path)), 'The research build must not ship a client JS bundle or service worker');
assert.ok(!files.some(path => path.endsWith('/_worker.js')), 'This lab deploys static assets without an adapter');
console.log(`Verified ${cases.length} fixtures, ${cases.length} comparison views, ${cases.length} result pages, ${assets.length} source assets, manifests and Cloudflare files.`);
console.log(`Base: ${base} · Origin: ${origin} · No client JS bundle.`);
