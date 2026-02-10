import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params, fetch }) {
  try {
    const response = await fetch(`/conferences/${params.slug}/data.json`);
    if (!response.ok) throw error(404, `Conference "${params.slug}" not found`);
    const data = await response.json();
    return {
      slug: params.slug,
      thinkies: data.thinkies
    };
  } catch (err) {
    throw error(404, `Conference "${params.slug}" not found`);
  }
}

export function entries() {
  return [{ slug: 'twc-1' }]; // Add twc-2, twc-3, etc. here
}
