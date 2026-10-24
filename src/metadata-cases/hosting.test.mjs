import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import { assetHref, caseHref, cases } from './cases.ts';

let originApi, hostApi;
try { originApi = await import('./build-origin.mjs'); }
catch (error) { if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error; }
try { hostApi = await import('./host-files.ts'); }
catch (error) { if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error; }

test('build URLs use an explicit origin, then the Cloudflare deployment URL, then local defaults', () => {
  assert.ok(originApi, 'Build-origin selection has not been implemented');
  assert.equal(originApi.buildOrigin({}), undefined);
  assert.equal(originApi.buildOrigin({ CF_PAGES_URL: 'https://abc.example.pages.dev/' }), 'https://abc.example.pages.dev');
  assert.equal(originApi.buildOrigin({ CASE_ORIGIN: 'https://custom.example/', CF_PAGES_URL: 'https://abc.example.pages.dev' }), 'https://custom.example');
  assert.equal(originApi.buildOrigin({ CASE_ORIGIN: '', CF_PAGES_URL: 'https://abc.example.pages.dev' }), 'https://abc.example.pages.dev');
});

test('a misconfigured origin fails instead of emitting broken or credential-bearing share URLs', () => {
  assert.ok(originApi, 'Build-origin validation has not been implemented');
  for (const value of ['example.com', 'file:///tmp/site', 'https://user:secret@example.com', 'https://example.com/project/', 'https://example.com/?query=1', 'https://example.com/#fragment']) {
    assert.throws(() => originApi.buildOrigin({ CASE_ORIGIN: value }), /CASE_ORIGIN/);
  }
  assert.throws(() => originApi.buildOrigin({ CF_PAGES_URL: 'invalid' }), /CF_PAGES_URL/);
  assert.equal(originApi.buildOrigin({ CASE_ORIGIN: 'http://localhost:4321' }), 'http://localhost:4321');
});

test('Cloudflare files preserve the HTTP-only noindex control and redirect at root and subpath', () => {
  assert.ok(hostApi, 'Static host files have not been implemented');
  for (const base of ['/', '/project/']) {
    const files = hostApi.hostFiles(base);
    assert.ok(files.headers.includes(`${base}cases/indexing/http-noindex/\n  X-Robots-Tag: noindex`));
    assert.ok(files.headers.includes(`${base}cases/indexing/http-noindex/index.html\n  X-Robots-Tag: noindex`));
    assert.ok(!files.headers.includes('/*'), 'Do not contaminate every research case with noindex');
    assert.ok(files.redirects.includes(`${base}cases/indexing/redirect/ ${base}cases/metadata/explicit-og/ 302\n`));
    assert.ok(files.redirects.includes(`${base}cases/indexing/redirect ${base}cases/metadata/explicit-og/ 302\n`));
  }
});

test('Astro dev routes match the icon URLs emitted in the fixture head', async () => {
  // Build output alone cannot catch dev-only route-matching regressions.
  // This research check uses the installed Astro route builder without a server.
  const astro = new URL('../../node_modules/astro/dist/', import.meta.url);
  const { resolveConfig } = await import(new URL('core/config/config.js', astro));
  const { createBaseSettings } = await import(new URL('core/config/settings.js', astro));
  const { createRoutesList } = await import(new URL('core/routing/create-manifest.js', astro));
  const { AstroLogger } = await import(new URL('core/logger/core.js', astro));
  const logger = new AstroLogger({ level: 'silent', destination: { write() {} } });
  for (const base of ['/', '/project/']) {
    const { astroConfig } = await resolveConfig({ root: new URL('../../', import.meta.url), base }, 'dev');
    const settings = createBaseSettings(astroConfig, 'silent');
    const { routes } = await createRoutesList({ settings }, logger, { dev: true });
    const assetRoute = routes.find(route => route.route === '/cases/assets/[asset]');
    const caseRoute = routes.find(route => route.route === '/cases/[group]/[id]');
    assert.ok(assetRoute, 'The fixture asset route must exist');
    assert.ok(caseRoute, 'The standalone case route must exist');
    const names = [...await readdir(new URL('./assets/', import.meta.url)), 'app.webmanifest', 'second.webmanifest'];
    for (const name of names) {
      const url = assetHref(name, base).slice(astroConfig.base.replace(/\/$/, '').length);
      assert.ok(assetRoute.pattern.test(url), `Astro dev rejects asset URL ${assetHref(name, base)} with trailingSlash=${astroConfig.trailingSlash}`);
    }
    for (const definition of cases.filter(c => c.group === 'icons')) {
      const url = caseHref(definition, base).slice(astroConfig.base.replace(/\/$/, '').length);
      assert.ok(caseRoute.pattern.test(url), `Astro dev rejects icon case ${caseHref(definition, base)}`);
    }
  }
});
