/**
 * Deprecated Icon Aliases
 *
 * When an icon is renamed, its old name can be kept working for a grace period
 * by adding an entry to icon-aliases.json:
 *
 *   "old-name": { "to": "new-name", "since": "8.8.0", "removeIn": "9.0.0" }
 *
 * The build re-exports the new icon under every old export name, marks those
 * exports @deprecated, and fails once the version being built reaches `removeIn`.
 * It also writes entries itself when it detects a rename (see renames.js).
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { toPascalCase } from '../helpers.js';

export const ALIASES_FILE = 'icon-aliases.json';

const SEMVER = /^\d+\.\d+\.\d+$/;
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// Suffixes of every export an icon has in the main entry point:
// the base name, the duotone shorthand and the six direct variants
export const EXPORT_SUFFIXES = ['', 'Duotone', 'Regular', 'RegularDuotone', 'Bold', 'BoldDuotone', 'Fill', 'FillDuotone'];

/**
 * Compare two x.y.z versions
 * @param {string} a
 * @param {string} b
 * @returns {number} - Negative if a < b, 0 if equal, positive if a > b
 */
export function compareVersions(a, b) {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if (partsA[i] !== partsB[i]) return partsA[i] - partsB[i];
  }
  return 0;
}

/**
 * Load icon-aliases.json
 * @param {string} packageDir - Path to packages/icons
 * @returns {Array<{name: string, to: string, since: string, removeIn: string}>} - Aliases sorted by name
 */
export function loadAliases(packageDir) {
  const aliasesPath = join(packageDir, ALIASES_FILE);
  if (!existsSync(aliasesPath)) return [];

  const parsed = JSON.parse(readFileSync(aliasesPath, 'utf8'));
  return Object.entries(parsed)
    .map(([name, alias]) => ({ name, ...alias }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * icon-aliases.json as text: one alias per line, sorted by name, trailing newline
 * @param {Array<{name: string, to: string, since: string, removeIn: string}>} aliases
 * @returns {string}
 */
export function serializeAliases(aliases) {
  const lines = [...aliases]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, to, since, removeIn }) => `  "${name}": { "to": "${to}", "since": "${since}", "removeIn": "${removeIn}" }`);
  return lines.length === 0 ? '{}\n' : `{\n${lines.join(',\n')}\n}\n`;
}

/**
 * Write icon-aliases.json
 * @param {string} packageDir - Path to packages/icons
 * @param {Array<{name: string, to: string, since: string, removeIn: string}>} aliases
 */
export function writeAliases(packageDir, aliases) {
  writeFileSync(join(packageDir, ALIASES_FILE), serializeAliases(aliases));
}

/**
 * Check aliases against the current icon set and the version being built
 * @param {Array<Object>} aliases - Aliases from loadAliases
 * @param {Set<string>} iconNames - Kebab-case names of the icons in the export
 * @param {string} version - Version being built
 * @returns {string[]} - Error messages, empty if the aliases are valid
 */
export function validateAliases(aliases, iconNames, version) {
  const errors = [];

  for (const alias of aliases) {
    const { name, to, since, removeIn } = alias;

    if (!SLUG.test(name)) {
      errors.push(`"${name}" is not a kebab-case icon name`);
      continue;
    }
    if (typeof to !== 'string' || !SEMVER.test(since ?? '') || !SEMVER.test(removeIn ?? '')) {
      errors.push(`"${name}" needs "to", "since" and "removeIn" (x.y.z versions)`);
      continue;
    }
    if (compareVersions(removeIn, since) <= 0) {
      errors.push(`"${name}" has removeIn ${removeIn}, which is not after since ${since}`);
    }
    if (iconNames.has(name)) {
      errors.push(`"${name}" is an existing icon, so it cannot also be an alias`);
    }
    if (!iconNames.has(to)) {
      errors.push(`"${name}" points to "${to}", which is not an icon`);
    }
    if (compareVersions(version, removeIn) >= 0) {
      errors.push(
        `"${name}" → "${to}" expired: it is marked for removal in ${removeIn} and this build is ${version}. ` +
        `Delete it from ${ALIASES_FILE} and list the removed name in the changeset`
      );
    }
  }

  return errors;
}

/**
 * Deprecation message shown in editors and in the DynamicIcon warning
 * @param {string} replacement - Name to use instead
 * @param {string} removeIn - Version the alias is removed in
 * @returns {string}
 */
export function deprecationMessage(replacement, removeIn) {
  return `Renamed to \`${replacement}\`. This alias will be removed in ${removeIn}.`;
}

/**
 * Map every deprecated export name to its replacement
 * @param {Array<Object>} aliases - Aliases from loadAliases
 * @returns {Map<string, {replacement: string, removeIn: string}>}
 * @example
 * // "device-laptop" → "laptop" gives DeviceLaptop → Laptop, SiDeviceLaptopBold → SiLaptopBold, ...
 */
export function getDeprecatedExports(aliases) {
  const deprecated = new Map();

  for (const { name, to, removeIn } of aliases) {
    const aliasBase = toPascalCase(name);
    const targetBase = toPascalCase(to);

    for (const suffix of EXPORT_SUFFIXES) {
      const from = `${aliasBase}${suffix}`;
      const replacement = `${targetBase}${suffix}`;
      deprecated.set(from, { replacement, removeIn });
      deprecated.set(`${from}Icon`, { replacement: `${replacement}Icon`, removeIn });
      deprecated.set(`Si${from}`, { replacement: `Si${replacement}`, removeIn });
    }
  }

  return deprecated;
}

/**
 * Declaration for a deprecated per-icon file (dist/esm/icons/<Alias>.d.ts)
 * @param {string} aliasName - Deprecated component name (e.g., "DeviceLaptopBold")
 * @param {string} targetName - Component it points to (e.g., "LaptopBold")
 * @param {string} removeIn - Version the alias is removed in
 * @returns {string}
 */
export function generateAliasDeclaration(aliasName, targetName, removeIn) {
  const doc = replacement => `/** @deprecated ${deprecationMessage(replacement, removeIn)} */`;
  return `import type { ${targetName}, ${targetName}Props } from './${targetName}.js';

${doc(targetName)}
export type ${aliasName}Props = ${targetName}Props;

${doc(targetName)}
export declare const ${aliasName}: typeof ${targetName};
${doc(`${targetName}Icon`)}
export declare const ${aliasName}Icon: typeof ${targetName};
${doc(`Si${targetName}`)}
export declare const Si${aliasName}: typeof ${targetName};
`;
}

/**
 * Module for a deprecated per-icon file (dist/esm/icons/<Alias>.js)
 * @param {string} aliasName - Deprecated component name
 * @param {string} targetName - Component it points to
 * @returns {string}
 */
export function generateAliasModule(aliasName, targetName) {
  return `export { ${targetName} as ${aliasName}, ${targetName} as ${aliasName}Icon, ${targetName} as Si${aliasName}, ${targetName} as default } from './${targetName}.js';\n`;
}
