import { cases, caseHref } from './cases.ts';

// Host-specific files for the research site, not defaults for the future starter.
export function hostFiles(base = '/') {
  const headers: string[] = [];
  const redirects: string[] = [];
  for (const definition of cases) {
    const path = caseHref(definition, base);
    const options = definition.options;
    if (options.headers) {
      const values = Object.entries(options.headers).map(([key, value]) => `  ${key}: ${value}`).join('\n');
      // Cover both the friendly URL and direct-file requests.
      for (const url of [path, path.slice(0, -1), `${path}index.html`]) headers.push(`${url}\n${values}`);
    }
    if (options.redirect) {
      const [group, id] = options.redirect.split('/');
      const target = caseHref({ group: group!, id: id! }, base);
      for (const url of [path, path.slice(0, -1), `${path}index.html`]) redirects.push(`${url} ${target} ${options.status ?? 302}`);
    }
  }
  return { headers: `${headers.join('\n\n')}\n`, redirects: `${redirects.join('\n')}\n` };
}
