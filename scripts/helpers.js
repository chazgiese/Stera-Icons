/**
 * Helper functions for processing icon names and generating component names
 */

export function normalizeSlug(name) {
  // Replace unicode dashes with ASCII hyphen
  const unified = name.replace(/[‒–—―−]/g, '-');
  // Keep only lowercase letters, numbers, and hyphens
  const stripped = unified.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  // Collapse multiple hyphens and trim leading/trailing hyphens
  return stripped.replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export function ensureUnique(slug, taken) {
  if (!taken.has(slug)) {
    taken.add(slug);
    return slug;
  }
  
  let i = 2;
  while (taken.has(`${slug}-${i}`)) {
    i++;
  }
  
  const unique = `${slug}-${i}`;
  taken.add(unique);
  return unique;
}

export function toPascalCase(slug) {
  return slug
    .split('-')
    .map(s => s ? s[0].toUpperCase() + s.slice(1) : '')
    .join('');
}

export function getComponentName(slug, variant) {
  const baseName = toPascalCase(slug);
  if (variant === 'filled') return `${baseName}Filled`;
  if (variant === 'bold') return `${baseName}Bold`;
  return baseName; // regular variant gets no suffix
}

export function getFileName(slug, variant) {
  if (variant === 'filled') return `${slug}-filled`;
  if (variant === 'bold') return `${slug}-bold`;
  return slug; // regular variant gets no suffix
}

export function parseTags(tagsString) {
  return tagsString
    .split(',')
    .map(tag => tag.trim().toLowerCase())
    .filter(tag => tag.length > 0);
}
