import { error } from '@sveltejs/kit';
import { base } from '$app/paths';

export const prerender = true;

// Normalise legacy format (scenario + insights at root) into the new
// multi-scenario format ({ scenarios: [{ scenario, insights }] }).
function normalizeThinkie(t) {
  if (t.scenarios) return t;
  return { ...t, scenarios: [{ scenario: t.scenario, insights: t.insights }] };
}

export async function load({ params, fetch }) {
  try {
    const response = await fetch(`${base}/conferences/${params.slug}/data.json`);
    if (!response.ok) throw error(404, `Conference "${params.slug}" not found`);
    const data = await response.json();
    return {
      slug: params.slug,
      thinkies: data.thinkies.map(normalizeThinkie)
    };
  } catch (err) {
    throw error(404, `Conference "${params.slug}" not found`);
  }
}

export function entries() {
  return [{ slug: 'twc-1' }, { slug: 'twc-2' }];
}
