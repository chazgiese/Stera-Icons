/**
 * Icon identity and renames
 *
 * Every exported icon carries an `id`: the key of its Figma component set, which
 * survives renames. The name is the public API and the per-variant hash tracks
 * artwork changes; the id is what says "this is the same icon". A metadata entry
 * whose id shows up in the export under a different name is a rename, and the
 * build turns it into a deprecated alias in icon-aliases.json.
 *
 * Everything here is pure: the build loads the files and passes the data in.
 */

import { ALIASES_FILE } from './aliases.js';

export const EXPORT_SCHEMA_VERSION = '3.0.0';

// A Figma component key: 40 hex characters
const ICON_ID = /^[0-9a-f]{40}$/;

const variantKey = (icon, weight, duotone) => `${icon}|${weight}|${duotone}`;

/**
 * Check that an export carries the schema version and ids the build relies on
 * @param {{schemaVersion?: string, icons?: Array<{id?: string, name: string}>}} iconsExport - Parsed icons-export.json
 * @returns {string[]} - Error messages, empty if the export is usable
 */
export function validateIconsExport(iconsExport) {
  const errors = [];

  if (iconsExport.schemaVersion !== EXPORT_SCHEMA_VERSION) {
    errors.push(`schemaVersion is ${iconsExport.schemaVersion ?? 'missing'}, expected ${EXPORT_SCHEMA_VERSION}`);
  }

  const namesById = new Map();
  const seenNames = new Set();
  for (const icon of iconsExport.icons ?? []) {
    if (seenNames.has(icon.name)) {
      errors.push(`"${icon.name}" is the name of two icons`);
    }
    seenNames.add(icon.name);

    if (typeof icon.id !== 'string' || !ICON_ID.test(icon.id)) {
      errors.push(`"${icon.name}" has no valid id (expected the Figma component set key)`);
      continue;
    }
    namesById.set(icon.id, [...(namesById.get(icon.id) ?? []), icon.name]);
  }
  for (const [id, names] of namesById) {
    if (names.length > 1) {
      errors.push(`"${names.join('", "')}" share the id ${id}`);
    }
  }

  return errors;
}

/**
 * Index existing metadata so each exported variant can find its previous entry
 * @param {Array<{id?: string, name: string, weight: string, duotone: boolean}>} existingMetadata - Parsed icons.meta.json
 * @returns {{find: (id: string, name: string, weight: string, duotone: boolean) => Object | undefined}}
 */
export function createMetadataIndex(existingMetadata) {
  const byId = new Map();
  const byName = new Map();
  for (const entry of existingMetadata) {
    if (entry.id) {
      byId.set(variantKey(entry.id, entry.weight, entry.duotone), entry);
    }
    byName.set(variantKey(entry.name, entry.weight, entry.duotone), entry);
  }

  return {
    /**
     * The previous entry of a variant: matched by id, or by name for entries that
     * have no id yet and for component sets that were recreated in Figma under a new key
     */
    find(id, name, weight, duotone) {
      return byId.get(variantKey(id, weight, duotone)) ?? byName.get(variantKey(name, weight, duotone));
    }
  };
}

/**
 * The name each id had in the existing metadata
 * @param {Array<{id?: string, name: string}>} existingMetadata
 * @param {string[]} errors - Receives an error for an id listed under two names
 * @returns {Map<string, string>}
 */
function previousNamesById(existingMetadata, errors) {
  const names = new Map();
  for (const { id, name } of existingMetadata) {
    if (!id) continue;
    const previous = names.get(id);
    if (previous !== undefined && previous !== name) {
      errors.push(`icons.meta.json lists the id ${id} under both "${previous}" and "${name}"`);
    }
    names.set(id, name);
  }
  return names;
}

/**
 * Find icons whose id is known under another name
 * @param {Array<{id: string, name: string}>} exportedIcons - Icons in the export, with their build names
 * @param {Array<{id?: string, name: string}>} existingMetadata - Parsed icons.meta.json
 * @param {Array<{name: string, to: string}>} aliases - Current aliases from loadAliases
 * @returns {{renames: Array<{id: string, from: string, to: string}>, alreadyAliased: Array<{id: string, from: string, to: string}>, errors: string[]}}
 */
export function detectRenames(exportedIcons, existingMetadata, aliases) {
  const errors = [];
  const renames = [];
  const alreadyAliased = [];

  const previousNames = previousNamesById(existingMetadata, errors);
  const exportedNames = new Set(exportedIcons.map(icon => icon.name));
  const aliasByName = new Map(aliases.map(alias => [alias.name, alias]));

  for (const { id, name } of exportedIcons) {
    const from = previousNames.get(id);
    if (from === undefined || from === name) continue;

    if (exportedNames.has(from)) {
      errors.push(
        `"${from}" was renamed to "${name}", but another icon now uses the name "${from}". ` +
        `Rename that icon too, or give "${from}" back to the original`
      );
      continue;
    }

    const alias = aliasByName.get(from);
    if (alias) {
      if (alias.to === name) {
        alreadyAliased.push({ id, from, to: name });
      } else {
        errors.push(`"${from}" was renamed to "${name}", but ${ALIASES_FILE} already points "${from}" at "${alias.to}"`);
      }
      continue;
    }

    const shadowed = aliasByName.get(name);
    if (shadowed) {
      errors.push(
        `"${from}" was renamed to "${name}", which is a deprecated alias of "${shadowed.to}". ` +
        `Delete that alias from ${ALIASES_FILE} first`
      );
      continue;
    }

    renames.push({ id, from, to: name });
  }

  return { renames, alreadyAliased, errors };
}

/**
 * Icons that are gone: neither their id nor their name is in the export
 * @param {Array<{id: string, name: string}>} exportedIcons
 * @param {Array<{id?: string, name: string}>} existingMetadata
 * @returns {Array<{id: string, name: string}>} - One entry per icon, sorted by name
 */
export function findRemovedIcons(exportedIcons, existingMetadata) {
  const exportedIds = new Set(exportedIcons.map(icon => icon.id));
  const exportedNames = new Set(exportedIcons.map(icon => icon.name));
  const removed = new Map();
  for (const { id, name } of existingMetadata) {
    if (id && !exportedIds.has(id) && !exportedNames.has(name)) {
      removed.set(name, { id, name });
    }
  }
  return [...removed.values()].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Icons whose name is still exported but under a new id: their component set was
 * deleted and recreated in Figma. The build keeps their history by name
 * @param {Array<{id: string, name: string}>} exportedIcons
 * @param {Array<{id?: string, name: string}>} existingMetadata
 * @returns {Array<{name: string, previousId: string, id: string}>} - One entry per icon, sorted by name
 */
export function findRecreatedIcons(exportedIcons, existingMetadata) {
  const exportedIdByName = new Map(exportedIcons.map(icon => [icon.name, icon.id]));
  const recreated = new Map();
  for (const { id, name } of existingMetadata) {
    const exportedId = exportedIdByName.get(name);
    if (id && exportedId !== undefined && exportedId !== id) {
      recreated.set(name, { name, previousId: id, id: exportedId });
    }
  }
  return [...recreated.values()].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Add an alias for each rename and point aliases of the old name at the new one
 * @param {Array<{name: string, to: string, since: string, removeIn: string}>} aliases - Current aliases
 * @param {Array<{from: string, to: string}>} renames - From detectRenames
 * @param {{since: string, removeIn: string}} versions - Version the renames ship in and the next major
 * @returns {{aliases: Array<Object>, added: Array<Object>, retargeted: Array<{name: string, from: string, to: string}>}} - New sorted alias list; inputs are not changed
 */
export function applyRenames(aliases, renames, { since, removeIn }) {
  const newNameByOld = new Map(renames.map(({ from, to }) => [from, to]));
  const added = renames.map(({ from, to }) => ({ name: from, to, since, removeIn }));
  const retargeted = [];

  const retarget = alias => {
    const to = newNameByOld.get(alias.to);
    if (to === undefined) return alias;
    retargeted.push({ name: alias.name, from: alias.to, to });
    return { ...alias, to };
  };

  const result = [...aliases, ...added]
    .map(retarget)
    .sort((a, b) => a.name.localeCompare(b.name));

  return { aliases: result, added, retargeted };
}
