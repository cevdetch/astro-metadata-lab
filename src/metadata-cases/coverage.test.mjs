import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { cases } from './cases.ts';
import { clientName, coverage, observedRuns, runRegistry } from './coverage.ts';

const read = path => readFile(new URL(path, import.meta.url), 'utf8');

test('registry entries reduce to short client names', () => {
  assert.equal(clientName('Firefox 160.0a1 (2026-10-20), 64-bit'), 'Firefox');
  assert.equal(clientName('Brave Origin 1.97.59; Chromium 155.0.8059.85 (Official Build), x86_64'), 'Brave Origin');
  assert.equal(clientName('Tor Browser Alpha 16.0a14 (153.5.0esr)'), 'Tor Browser Alpha');
  assert.equal(clientName('im.molly.app v8.19.2-4'), 'Molly');
  assert.equal(clientName('LinkedIn Post Inspector /inspect/; web'), 'LinkedIn Post Inspector');
  assert.equal(clientName('discord.com; version unknown'), 'Discord');
  assert.equal(clientName('LinkedIn; inherited Inspector context from S037'), 'LinkedIn Post Inspector');
  assert.equal(clientName('LinkedIn; version unknown; inherited from S008'), 'LinkedIn');
});

test('placeholder rows marked not tested are not observations', () => {
  const record = [
    '| Run | Platform | Title | Status / notes |',
    '| --- | --- | --- | --- |',
    '| — | Discord | — | not tested |',
    '| B003 | Brave | — | not tested |',
    '| S014 | Discord | none | reported; title confirmed |',
    '| S011 | B | none | unreported |',
  ].join('\n');
  assert.deepEqual(observedRuns(record), ['S011', 'S014']);
});

test('the status comes from the Status column when the table has one', () => {
  const record = [
    '| Run | Browser / device | Icon shown | Status | Notes / evidence |',
    '| --- | --- | --- | --- | --- |',
    '| B003 | Brave | — | not tested | worksheet row kept for later |',
    '| B004 | Firefox | blue-circle | reported | not tested in light mode |',
    '',
    '| Run | Visible title | Layout |',
    '| --- | --- | --- |',
    '| S011 | B | not tested |',
  ].join('\n');
  assert.deepEqual(observedRuns(record), ['B004']);
});

test('coverage counts every case once and every cited run is registered', async () => {
  const sessions = await read('results/sessions.md');
  const records = Object.fromEntries(await Promise.all(cases.map(async c => [`${c.group}/${c.id}`, await read(`results/cases/${c.group}/${c.id}.md`)])));
  const summary = coverage(cases, records, sessions);
  assert.equal(summary.cases, cases.length);
  assert.equal(summary.observed + summary.untested, cases.length);
  assert.equal(summary.groups.reduce((sum, g) => sum + g.cases, 0), cases.length);
  for (const g of summary.groups) assert.equal(g.observed.length + g.untested.length, g.cases);
  const registry = runRegistry(sessions);
  assert.ok(registry.size > 0);
  for (const run of registry.values()) assert.match(run.date, /^\d{4}-\d{2}-\d{2}$/);
  assert.throws(() => coverage(cases.slice(0, 1), { [`${cases[0].group}/${cases[0].id}`]: '| Z |\n| B999 | x | reported |' }, sessions), /B999/);
});
