const TTL = 1000 * 60 * 60 * 24; // 24 hours default

export function cacheGet(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { data, expiresAt } = JSON.parse(raw);
    if (Date.now() > expiresAt) {
      localStorage.removeItem(key);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export function cacheSet(key, data, ttl = TTL) {
  try {
    localStorage.setItem(key, JSON.stringify({
      data,
      expiresAt: Date.now() + ttl,
    }));
  } catch {
    console.log('Cache set failed');
}
}

export function cacheClear(key) {
  try { localStorage.removeItem(key); } catch {}
}