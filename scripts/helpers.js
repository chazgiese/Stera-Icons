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
  const iconName = `${baseName}Icon`;
  if (variant === 'filled') return `${iconName}Filled`;
  if (variant === 'bold') return `${iconName}Bold`;
  if (variant === 'filltone') return `${iconName}Filltone`;
  if (variant === 'linetone') return `${iconName}Linetone`;
  return iconName; // regular variant with Icon suffix
}

export function getFileName(slug, variant) {
  if (variant === 'filled') return `${slug}-filled`;
  if (variant === 'bold') return `${slug}-bold`;
  if (variant === 'filltone') return `${slug}-filltone`;
  if (variant === 'linetone') return `${slug}-linetone`;
  return slug; // regular variant gets no suffix
}

export function parseTags(tags) {
  // Handle both array format (new) and string format (legacy)
  if (Array.isArray(tags)) {
    return tags.map(tag => tag.trim().toLowerCase()).filter(tag => tag.length > 0);
  }
  
  // Legacy string format
  return tags
    .split(',')
    .map(tag => tag.trim().toLowerCase())
    .filter(tag => tag.length > 0);
}
