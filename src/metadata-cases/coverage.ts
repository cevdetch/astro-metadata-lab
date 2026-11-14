// Coverage is computed from the result records, so the published status cannot
// drift from the data. A case row counts as an observation when it names a run
// from the registry in results/sessions.md and its status is not "not tested".
import type { MetadataCase } from './cases.ts';

export type RunKind = 'browser' | 'social' | 'http';
export interface Run { id: string; kind: RunKind; date: string; client: string }
export interface GroupCoverage {
  group: string;
  cases: number;
  observed: string[];
  untested: string[];
  clients: Record<RunKind, string[]>;
}
export interface Coverage {
  cases: number;
  observed: number;
  untested: number;
  groups: GroupCoverage[];
  runs: Record<RunKind, number>;
  dates: string[];
  clients: Record<RunKind, string[]>;
}

const KINDS = { B: 'browser', S: 'social', H: 'http' } as const;
const RUN_ID = /^[BSH]\d{3}$/;
// The status column of a case table. HTTP tables use "Status" for the response
// code, which never reads "not tested"; their placeholders cite no run.
const STATUS_HEADER = /^status(\s*\/\s*notes)?$/i;
// Registry entries name some apps by their package or web host.
const ALIASES: Record<string, string> = {
  'im.molly.app': 'Molly',
  'discord.com': 'Discord',
  'linkedin.com': 'LinkedIn',
  'instagram.com': 'Instagram',
};

const kindOf = (id: string): RunKind => KINDS[id[0] as keyof typeof KINDS];
const emptyClients = (): Record<RunKind, string[]> => ({ browser: [], social: [], http: [] });

const cellsOf = (line: string) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim());

/** Table rows that cite a run, with the header of the table they belong to. */
function runRows(markdown: string) {
  const rows: { id: string; cells: string[]; header: string[] }[] = [];
  let header: string[] | undefined;
  for (const line of markdown.split('\n')) {
    if (!line.trimStart().startsWith('|')) { header = undefined; continue; }
    const cells = cellsOf(line);
    if (!header) { header = cells; continue; }
    const id = cells[0] ?? '';
    if (RUN_ID.test(id)) rows.push({ id, cells: cells.slice(1), header: header.slice(1) });
  }
  return rows;
}

/** Short client name from a registry entry such as "Firefox 160.0a1 (2026-10-20), 64-bit". */
export function clientName(entry: string): string {
  const first = (entry.split(';')[0] ?? '').replace(/\(.*?\)/g, '').split(',')[0]!
    .split(/\s+/).filter(word => word && !/\d/.test(word) && !word.startsWith('/')).join(' ');
  const name = ALIASES[first] ?? first;
  // Some LinkedIn runs inherit the Post Inspector context from an earlier run.
  return name === 'LinkedIn' && /\bInspector\b/.test(entry) ? 'LinkedIn Post Inspector' : name;
}

/** Test runs registered in results/sessions.md. */
export function runRegistry(sessions: string): Map<string, Run> {
  const runs = new Map<string, Run>();
  for (const { id, cells } of runRows(sessions)) {
    const [date, client] = cells;
    if (!date || !client || !/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    runs.set(id, { id, kind: kindOf(id), date, client: clientName(client) });
  }
  return runs;
}

/** Run IDs with a recorded observation in one case record. */
export function observedRuns(record: string): string[] {
  const status = (row: { cells: string[]; header: string[] }) => {
    const column = row.header.findIndex(name => STATUS_HEADER.test(name));
    return (column >= 0 ? row.cells[column] : row.cells.at(-1)) ?? '';
  };
  const ids = runRows(record).filter(row => !status(row).startsWith('not tested')).map(row => row.id);
  return [...new Set(ids)].sort();
}

const sorted = (values: Iterable<string>) => [...new Set(values)].sort((a, b) => a.localeCompare(b));

/**
 * @param records case record Markdown keyed by "group/id"
 * @param sessions results/sessions.md
 */
export function coverage(cases: readonly MetadataCase[], records: Record<string, string>, sessions: string): Coverage {
  const registry = runRegistry(sessions);
  const groups = new Map<string, GroupCoverage>();
  const used = { browser: new Set<string>(), social: new Set<string>(), http: new Set<string>() };
  for (const definition of cases) {
    const label = `${definition.group}/${definition.id}`;
    const record = records[label];
    if (record === undefined) throw new Error(`Missing result record: ${label}`);
    let group = groups.get(definition.group);
    if (!group) groups.set(definition.group, group = { group: definition.group, cases: 0, observed: [], untested: [], clients: emptyClients() });
    group.cases++;
    const runs = observedRuns(record);
    (runs.length ? group.observed : group.untested).push(definition.id);
    for (const id of runs) {
      const run = registry.get(id);
      if (!run) throw new Error(`${label} cites ${id}, which results/sessions.md does not register`);
      group.clients[run.kind].push(run.client);
      used[run.kind].add(run.client);
    }
  }
  const list = [...groups.values()].map(group => ({
    ...group,
    clients: { browser: sorted(group.clients.browser), social: sorted(group.clients.social), http: sorted(group.clients.http) },
  }));
  const runs = { browser: 0, social: 0, http: 0 };
  for (const run of registry.values()) runs[run.kind]++;
  const observed = list.reduce((sum, group) => sum + group.observed.length, 0);
  return {
    cases: cases.length,
    observed,
    untested: cases.length - observed,
    groups: list,
    runs,
    dates: sorted([...registry.values()].map(run => run.date)),
    clients: { browser: sorted(used.browser), social: sorted(used.social), http: sorted(used.http) },
  };
}

const joinList = (items: string[]) => items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;

/** Markdown summary for the README, regenerated by `pnpm coverage`. */
export function coverageMarkdown(summary: Coverage): string {
  const clients = (c: Record<RunKind, string[]>) => [...c.browser, ...c.social, ...c.http].join(', ') || '—';
  return [
    `${summary.observed} of ${summary.cases} cases have at least one recorded observation; ${summary.untested} have none yet.`,
    `The run registry holds ${summary.runs.browser} browser, ${summary.runs.social} link-preview and ${summary.runs.http} HTTP runs, recorded on ${joinList(summary.dates)}.`,
    '',
    `- Browsers: ${joinList(summary.clients.browser)}.`,
    `- Link previews: ${joinList(summary.clients.social)}.`,
    `- HTTP: ${joinList(summary.clients.http)}.`,
    '',
    '| Group | Cases | Observed | Clients with observations |',
    '| --- | ---: | ---: | --- |',
    ...summary.groups.map(g => `| ${g.group} | ${g.cases} | ${g.observed.length} | ${clients(g.clients)} |`),
    `| **Total** | **${summary.cases}** | **${summary.observed}** | |`,
    '',
    'Cases with no recorded observation yet:',
    '',
    ...summary.groups.filter(g => g.untested.length).map(g => `- ${g.group}: ${g.untested.map(id => `\`${id}\``).join(', ')}`),
  ].join('\n');
}
