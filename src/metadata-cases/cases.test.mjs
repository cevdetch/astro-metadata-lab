import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

let api;
try { api = await import('./cases.ts'); }
catch (error) { if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error; }

function subject(group, id, base = '/') {
  assert.ok(api, 'The local case renderer is not implemented yet');
  const definition = api.cases.find(c => c.group === group && c.id === id);
  assert.ok(definition, `Missing ${group}/${id} fixture`);
  return api.renderCase(definition, 'http://localhost:4321', base);
}

test('every prepared case gets a unique local route', () => {
  assert.ok(api, 'The local case renderer is not implemented yet');
  assert.equal(api.cases.length, 118);
  const paths = api.cases.map(c => api.caseHref(c));
  assert.equal(new Set(paths).size, 118);
  assert.ok(paths.every(path => path.startsWith('/cases/')));
});

test('subpath URLs keep the separating slash and local asset namespace', () => {
  const rendered = subject('metadata', 'explicit-og', '/project');
  assert.equal(rendered.url, 'http://localhost:4321/project/cases/metadata/explicit-og/');
  assert.match(rendered.html, /href="\/project\/cases\/assets\/icon-red\.ico"/);
  assert.match(rendered.html, /content="http:\/\/localhost:4321\/project\/cases\/assets\/social-red\.png"/);
  assert.ok(!rendered.html.includes('fixture.example'));
  assert.equal(api.caseHref({ group: 'metadata', id: 'html-only' }, '/project/'), '/project/cases/metadata/html-only/');
});

test('tracking links preserve their query without changing the generated file path', () => {
  const definition = api.cases.find(c => c.id === 'tracking-query');
  assert.equal(typeof api.openHref, 'function');
  assert.equal(api.openHref(definition, '/project/'), '/project/cases/canonical/tracking-query/?utm_source=research');
  assert.equal(api.caseHref(definition, '/project/'), '/project/cases/canonical/tracking-query/');
  assert.equal(subject('canonical', 'tracking-query').canonical, 'http://localhost:4321/cases/canonical/canonical-clean/');
});

test('HTML-only and individual OG omission cases retain their intended differences', () => {
  const htmlOnly = subject('metadata', 'html-only').html;
  assert.match(htmlOnly, /<title>/);
  assert.match(htmlOnly, /name="description"/);
  assert.match(htmlOnly, /rel="canonical"/);
  assert.ok(!htmlOnly.includes('property="og:'));
  const omitted = subject('metadata', 'no-og-title').html;
  assert.ok(!omitted.includes('property="og:title"'));
  assert.ok(omitted.includes('property="og:description"'));
  assert.ok(omitted.includes('<title>'));
});

test('precedence controls distinguish HTML, OG, Twitter and scraped body text', () => {
  for (const base of ['/', '/project/']) {
    const html = subject('precedence', 'all-fields', base).html;
    assert.ok(html.includes('<title>HTML TITLE A</title>'));
    assert.ok(html.includes('name="description" content="HTML DESCRIPTION A"'));
    assert.ok(html.includes('property="og:title" content="OG TITLE B"'));
    assert.ok(html.includes('property="og:description" content="OG DESCRIPTION B"'));
    assert.ok(html.includes('name="twitter:title" content="TWITTER TITLE C"'));
    assert.ok(html.includes('name="twitter:description" content="TWITTER DESCRIPTION C"'));
    assert.ok(html.includes(`property="og:image" content="http://localhost:4321${base}cases/assets/social-red.png"`));
    assert.ok(html.includes(`name="twitter:image" content="http://localhost:4321${base}cases/assets/social-green.png"`));
    assert.ok(html.includes('<h1>BODY HEADING D</h1><p>BODY TEXT D</p>'));
  }
});

test('Twitter-only controls keep their card and fields without inventing OG tags', () => {
  const html = subject('precedence', 'twitter-vs-html').html;
  assert.ok(!html.includes('property="og:'));
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));
  assert.ok(html.includes('name="twitter:title" content="TWITTER TITLE C"'));
  assert.ok(html.includes('name="twitter:image" content="http://localhost:4321/cases/assets/social-green.png"'));
  const htmlOnly = subject('precedence', 'html-only').html;
  assert.ok(!htmlOnly.includes('property="og:'));
  assert.ok(!htmlOnly.includes('name="twitter:'));
});

test('field-removal controls preserve the competing metadata values', () => {
  const pairs = [
    ['no-twitter-title', 'twitter:title', 'og:title', 'OG TITLE B'],
    ['no-twitter-description', 'twitter:description', 'og:description', 'OG DESCRIPTION B'],
    ['no-twitter-image', 'twitter:image', 'og:image', 'http://localhost:4321/cases/assets/social-red.png'],
    ['no-og-title', 'og:title', 'twitter:title', 'TWITTER TITLE C'],
    ['no-og-description', 'og:description', 'twitter:description', 'TWITTER DESCRIPTION C'],
    ['no-og-image', 'og:image', 'twitter:image', 'http://localhost:4321/cases/assets/social-green.png'],
  ];
  for (const [id, absent, retained, value] of pairs) {
    const html = subject('precedence', id).html;
    assert.ok(!html.includes(`="${absent}"`), `${id}: removed field reappeared`);
    assert.ok(html.includes(`="${retained}" content="${value}"`), `${id}: competing field changed`);
  }
  for (const [id, suffix] of [['no-social-title', 'title'], ['no-social-description', 'description'], ['no-social-image', 'image']]) {
    const html = subject('precedence', id).html;
    assert.ok(!html.includes(`="og:${suffix}"`));
    assert.ok(!html.includes(`="twitter:${suffix}"`));
    assert.ok(html.includes('<title>HTML TITLE A</title>'));
    assert.ok(html.includes('name="description" content="HTML DESCRIPTION A"'));
  }
});

test('empty Twitter values remain empty instead of becoming omitted or asset directory URLs', () => {
  for (const [id, key] of [['empty-twitter-title', 'twitter:title'], ['empty-twitter-description', 'twitter:description'], ['empty-twitter-image', 'twitter:image']]) {
    const html = subject('precedence', id).html;
    assert.ok(html.includes(`name="${key}" content=""`), `${id}: the empty attribute must survive`);
    assert.ok(html.includes('property="og:title" content="OG TITLE B"'));
    assert.ok(html.includes('property="og:description" content="OG DESCRIPTION B"'));
  }
});

test('social tag-order controls reverse the same values rather than changing the candidates', () => {
  const ordinary = subject('precedence', 'all-fields').head;
  const reversed = subject('precedence', 'twitter-first').head;
  assert.ok(ordinary.indexOf('property="og:title"') < ordinary.indexOf('name="twitter:title"'));
  assert.ok(reversed.indexOf('name="twitter:title"') < reversed.indexOf('property="og:title"'));
  const socialTags = head => [...head.matchAll(/<meta (?:name="twitter:[^"]+"|property="og:[^"]+") content="[^"]*">/g)]
    .map(match => match[0]).filter(tag => !tag.includes('property="og:url"')).sort();
  assert.deepEqual(socialTags(reversed), socialTags(ordinary));
});

test('title and attribute escaping preserve literal entity text without extra tags', () => {
  const html = subject('metadata', 'escaped-text').html;
  assert.match(html, /<title>A &amp; B &lt; C &gt; D "quoted" &amp;copy;<\/title>/);
  assert.match(html, /content="Café — &quot;quoted&quot; &lt;text&gt; &amp; literal &amp;copy;"/);
  assert.ok(!html.includes('<text>'));
});

test('reversing ICO and SVG cases actually reverses their head order', () => {
  const icoFirst = subject('icons', 'ico32-svg').html;
  const svgFirst = subject('icons', 'svg-ico32').html;
  assert.ok(icoFirst.indexOf('href="/cases/assets/icon-red.ico"') < icoFirst.indexOf('href="/cases/assets/icon-blue.svg"'));
  assert.ok(svgFirst.indexOf('href="/cases/assets/icon-blue.svg"') < svgFirst.indexOf('href="/cases/assets/icon-red.ico"'));
});

test('late Unicode charset stays a byte-boundary negative control', () => {
  const html = subject('head', 'charset-after-unicode-padding').html;
  const end = html.indexOf('<meta charset="utf-8">') + '<meta charset="utf-8">'.length;
  assert.ok(end < 1024);
  assert.ok(Buffer.byteLength(html.slice(0, end)) > 1024);
});

test('safe JSON-LD preserves data and the unsafe control preserves its literal end tag', () => {
  const safe = subject('json-ld', 'jsonld-escaped').html;
  const unsafe = subject('json-ld', 'jsonld-unsafe').html;
  assert.ok(safe.includes('\\u003c/script>'));
  assert.ok(!safe.includes("</script><img src='/unintended-request.png'"));
  assert.ok(unsafe.includes("</script><img src='/unintended-request.png'"));
});

test('intentional HTTP cases retain their requested status and header data', () => {
  assert.equal(subject('indexing', 'error-404').status, 404);
  assert.equal(subject('indexing', 'http-noindex').headers['X-Robots-Tag'], 'noindex');
  assert.equal(subject('indexing', 'redirect').status, 302);
});

test('ICO fixture contains a real 32px entry instead of silently using the scaffold PNG', async () => {
  const bytes = await readFile(new URL('./assets/icon-red.ico', import.meta.url)).catch(() => null);
  assert.ok(bytes, 'Local case assets have not been added yet');
  assert.equal(bytes.readUInt16LE(2), 1);
  assert.equal(bytes.readUInt16LE(4), 1);
  assert.equal(bytes[6], 32);
  assert.equal(bytes[7], 32);
});
