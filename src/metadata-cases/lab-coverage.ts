// Build-time coverage for the pages, read from the same records as the README.
import { cases } from './cases.ts';
import { coverage } from './coverage.ts';
import sessions from './results/sessions.md?raw';

const files = import.meta.glob<string>('./results/cases/**/*.md', { query: '?raw', import: 'default', eager: true });
const records = Object.fromEntries(Object.entries(files).map(([path, text]) => [path.slice('./results/cases/'.length, -'.md'.length), text]));

export const labCoverage = coverage(cases, records, sessions);
