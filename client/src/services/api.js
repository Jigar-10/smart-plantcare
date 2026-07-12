const apiBase = '/api';

async function request(path, options = {}) {
  const res = await fetch(`${apiBase}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || 'Request failed');
  }

  if (res.status === 204) return null;
  return res.json();
}

export async function getGarden() {
  return request('/garden');
}

export async function addGardenPlant(payload) {
  return request('/garden', { method: 'POST', body: JSON.stringify(payload) });
}

export async function waterGardenPlant(id) {
  return request(`/garden/${id}/water`, { method: 'PATCH' });
}

export async function toggleGardenFavorite(id) {
  return request(`/garden/${id}/favorite`, { method: 'PATCH' });
}

export async function deleteGardenPlant(id) {
  return request(`/garden/${id}`, { method: 'DELETE' });
}

