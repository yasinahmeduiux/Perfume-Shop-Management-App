const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
export async function api(path, options = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('scentra_token') : null;
  const response = await fetch(`${baseUrl}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } });
  const payload = response.status === 204 ? { success: true } : await response.json();
  if (!response.ok) throw new Error(payload.message || 'Request failed');
  return payload;
}
