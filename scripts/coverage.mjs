// Regenerate or check the README coverage block from the result records.
//   node scripts/coverage.mjs           print the summary
//   node scripts/coverage.mjs --write   update README.md
//   node scripts/coverage.mjs --check   fail when README.md is out of date
import { readFile, writeFile } from 'node:fs/promises';
import { parseArgs } from 'node:util';
import { cases } from '../src/metadata-cases/cases.ts';
import { coverage, coverageMarkdown } from '../src/metadata-cases/coverage.ts';

const { values } = parseArgs({ options: { write: { type: 'boolean' }, check: { type: 'boolean' } } });
const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');

const records = Object.fromEntries(await Promise.all(cases.map(async c => {
  const label = `${c.group}/${c.id}`;
  return [label, await read(`src/metadata-cases/results/cases/${label}.md`)];
})));
const summary = coverageMarkdown(coverage(cases, records, await read('src/metadata-cases/results/sessions.md')));

if (!values.write && !values.check) {
  console.log(summary);
} else {
  const start = '<!-- coverage:start -->\n';
  const end = '\n<!-- coverage:end -->';
  const readme = await read('README.md');
  const from = readme.indexOf(start);
  const to = readme.indexOf(end);
  if (from < 0 || to < from) throw new Error('README.md needs the coverage:start and coverage:end markers');
  const next = readme.slice(0, from + start.length) + summary + readme.slice(to);
  if (values.write) {
    await writeFile(new URL('README.md', root), next);
  } else if (next !== readme) {
    console.error('README.md coverage is out of date; run pnpm coverage');
    process.exit(1);
  } else {
    console.log('README.md coverage matches the result records.');
  }
}
