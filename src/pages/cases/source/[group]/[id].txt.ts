import type { APIRoute } from 'astro';
import { cases, renderCase } from '../../../../metadata-cases/cases';

export function getStaticPaths() {
  return cases.map(definition => ({ params: { group: definition.group, id: definition.id }, props: { definition } }));
}

export const GET: APIRoute = ({ props, request }) => {
  const fixture = renderCase(props['definition'], new URL(request.url).origin, import.meta.env.BASE_URL);
  return new Response(fixture.html, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
