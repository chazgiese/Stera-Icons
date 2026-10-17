import { describe, it, expect } from 'vitest';
import {
  EXPORT_SCHEMA_VERSION,
  validateIconsExport,
  createMetadataIndex,
  detectRenames,
  findRemovedIcons,
  findRecreatedIcons,
  applyRenames
} from '../../scripts/icon-build/renames.js';
import { serializeAliases, validateAliases } from '../../scripts/icon-build/aliases.js';

const id = (n: number) => n.toString(16).padStart(40, '0');

const ID_LAPTOP = id(1);
const ID_MONITOR = id(2);

const meta = (name: string, iconId: string | undefined, weight = 'regular', duotone = false) =>
  iconId === undefined ? { name, weight, duotone } : { id: iconId, name, weight, duotone };

describe('validateIconsExport', () => {
  const icon = (name: string, iconId: unknown) => ({ name, id: iconId });

  it('accepts a current export with ids', () => {
    expect(validateIconsExport({ schemaVersion: EXPORT_SCHEMA_VERSION, icons: [icon('laptop', ID_LAPTOP)] })).toEqual([]);
  });

  it('rejects an older schema', () => {
    const errors = validateIconsExport({ schemaVersion: '2.0.0', icons: [icon('laptop', ID_LAPTOP)] });
    expect(errors).toEqual([`schemaVersion is 2.0.0, expected ${EXPORT_SCHEMA_VERSION}`]);
  });

  it('rejects a missing or malformed id', () => {
    const errors = validateIconsExport({
      schemaVersion: EXPORT_SCHEMA_VERSION,
      icons: [icon('laptop', undefined), icon('monitor', 'abc'), icon('tablet', id(0xabc).toUpperCase())]
    });
    expect(errors).toHaveLength(3);
    expect(errors[0]).toContain('"laptop"');
  });

  it('rejects two icons with the same name', () => {
    const errors = validateIconsExport({ schemaVersion: EXPORT_SCHEMA_VERSION, icons: [icon('laptop', ID_LAPTOP), icon('laptop', ID_MONITOR)] });
    expect(errors).toEqual(['"laptop" is the name of two icons']);
  });

  it('rejects two icons with the same id', () => {
    const errors = validateIconsExport({ schemaVersion: EXPORT_SCHEMA_VERSION, icons: [icon('laptop', ID_LAPTOP), icon('notebook', ID_LAPTOP)] });
    expect(errors).toEqual([`"laptop", "notebook" share the id ${ID_LAPTOP}`]);
  });
});

describe('createMetadataIndex', () => {
  const index = createMetadataIndex([
    meta('laptop', ID_LAPTOP),
    meta('laptop', ID_LAPTOP, 'bold'),
    meta('tablet', undefined)
  ]);

  it('finds an entry by id when the name changed', () => {
    expect(index.find(ID_LAPTOP, 'notebook', 'regular', false)).toMatchObject({ name: 'laptop', weight: 'regular' });
    expect(index.find(ID_LAPTOP, 'notebook', 'bold', false)).toMatchObject({ name: 'laptop', weight: 'bold' });
  });

  it('falls back to the name for an entry without an id', () => {
    expect(index.find(id(9), 'tablet', 'regular', false)).toMatchObject({ name: 'tablet' });
  });

  it('falls back to the name when the id changed', () => {
    expect(index.find(id(9), 'laptop', 'regular', false)).toMatchObject({ id: ID_LAPTOP });
  });

  it('returns undefined for a new variant', () => {
    expect(index.find(id(9), 'phone', 'regular', false)).toBeUndefined();
    expect(index.find(ID_LAPTOP, 'laptop', 'fill', true)).toBeUndefined();
  });
});

describe('detectRenames', () => {
  const existing = [meta('laptop', ID_LAPTOP), meta('laptop', ID_LAPTOP, 'bold'), meta('monitor', ID_MONITOR)];

  it('reports an icon whose id is known under another name', () => {
    const result = detectRenames([{ id: ID_LAPTOP, name: 'notebook' }, { id: ID_MONITOR, name: 'monitor' }], existing, []);
    expect(result).toEqual({ renames: [{ id: ID_LAPTOP, from: 'laptop', to: 'notebook' }], alreadyAliased: [], errors: [] });
  });

  it('reports nothing when names are unchanged', () => {
    expect(detectRenames([{ id: ID_LAPTOP, name: 'laptop' }], existing, []).renames).toEqual([]);
  });

  it('ignores metadata entries without an id', () => {
    expect(detectRenames([{ id: ID_LAPTOP, name: 'notebook' }], [meta('laptop', undefined)], []).renames).toEqual([]);
  });

  it('rejects a rename when another icon took the old name', () => {
    const { renames, errors } = detectRenames([{ id: ID_LAPTOP, name: 'notebook' }, { id: id(3), name: 'laptop' }], existing, []);
    expect(renames).toEqual([]);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('"laptop" was renamed to "notebook"');
  });

  it('rejects both halves of a swap', () => {
    const { errors } = detectRenames([{ id: ID_LAPTOP, name: 'monitor' }, { id: ID_MONITOR, name: 'laptop' }], existing, []);
    expect(errors).toHaveLength(2);
  });

  it('skips a rename whose alias already exists', () => {
    const aliases = [{ name: 'laptop', to: 'notebook', since: '8.9.0', removeIn: '9.0.0' }];
    const result = detectRenames([{ id: ID_LAPTOP, name: 'notebook' }], existing, aliases);
    expect(result.renames).toEqual([]);
    expect(result.alreadyAliased).toEqual([{ id: ID_LAPTOP, from: 'laptop', to: 'notebook' }]);
    expect(result.errors).toEqual([]);
  });

  it('rejects a rename whose old name is aliased elsewhere', () => {
    const aliases = [{ name: 'laptop', to: 'computer', since: '8.9.0', removeIn: '9.0.0' }];
    const { errors } = detectRenames([{ id: ID_LAPTOP, name: 'notebook' }], existing, aliases);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('already points "laptop" at "computer"');
  });

  it('rejects a rename to a name that is a deprecated alias', () => {
    const aliases = [{ name: 'notebook', to: 'monitor', since: '8.9.0', removeIn: '9.0.0' }];
    const { errors } = detectRenames([{ id: ID_LAPTOP, name: 'notebook' }], existing, aliases);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('Delete that alias');
  });

  it('rejects metadata that lists one id under two names', () => {
    const { errors } = detectRenames([{ id: ID_LAPTOP, name: 'laptop' }], [meta('laptop', ID_LAPTOP), meta('notebook', ID_LAPTOP, 'bold')], []);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('under both "laptop" and "notebook"');
  });
});

describe('findRemovedIcons', () => {
  const existing = [meta('laptop', ID_LAPTOP), meta('laptop', ID_LAPTOP, 'bold'), meta('monitor', ID_MONITOR), meta('tablet', undefined)];

  it('lists icons whose id and name are both gone, once per icon', () => {
    expect(findRemovedIcons([{ id: ID_MONITOR, name: 'monitor' }], existing)).toEqual([{ id: ID_LAPTOP, name: 'laptop' }]);
  });

  it('does not list renamed or recreated icons', () => {
    expect(findRemovedIcons([{ id: ID_LAPTOP, name: 'notebook' }, { id: id(3), name: 'monitor' }], existing)).toEqual([]);
  });
});

describe('findRecreatedIcons', () => {
  it('lists icons whose name is exported under a new id', () => {
    const existing = [meta('laptop', ID_LAPTOP), meta('laptop', ID_LAPTOP, 'bold'), meta('tablet', undefined)];
    const exported = [{ id: id(3), name: 'laptop' }, { id: id(4), name: 'tablet' }];
    expect(findRecreatedIcons(exported, existing)).toEqual([{ name: 'laptop', previousId: ID_LAPTOP, id: id(3) }]);
  });
});

describe('applyRenames', () => {
  const versions = { since: '8.10.0', removeIn: '9.0.0' };
  const existingAlias = { name: 'device-laptop', to: 'laptop', since: '8.8.0', removeIn: '9.0.0' };

  it('adds an alias per rename, sorted by name', () => {
    const aliases = [{ name: 'z-old', to: 'z', since: '8.8.0', removeIn: '9.0.0' }];
    const { aliases: result, added, retargeted } = applyRenames(aliases, [{ id: ID_MONITOR, from: 'monitor', to: 'display' }], versions);
    expect(added).toEqual([{ name: 'monitor', to: 'display', ...versions }]);
    expect(retargeted).toEqual([]);
    expect(result.map(alias => alias.name)).toEqual(['monitor', 'z-old']);
  });

  it('retargets an alias that pointed at the old name', () => {
    const { aliases: result, retargeted } = applyRenames([existingAlias], [{ id: ID_LAPTOP, from: 'laptop', to: 'notebook' }], versions);
    expect(retargeted).toEqual([{ name: 'device-laptop', from: 'laptop', to: 'notebook' }]);
    expect(result).toEqual([
      { ...existingAlias, to: 'notebook' },
      { name: 'laptop', to: 'notebook', ...versions }
    ]);
  });

  it('does not change its inputs', () => {
    const aliases = [{ ...existingAlias }];
    const renames = [{ id: ID_LAPTOP, from: 'laptop', to: 'notebook' }];
    applyRenames(aliases, renames, versions);
    expect(aliases).toEqual([existingAlias]);
    expect(renames).toEqual([{ id: ID_LAPTOP, from: 'laptop', to: 'notebook' }]);
  });

  it('produces aliases that validateAliases accepts', () => {
    const { aliases: result } = applyRenames([existingAlias], [{ id: ID_LAPTOP, from: 'laptop', to: 'notebook' }], versions);
    expect(validateAliases(result, new Set(['notebook']), versions.since)).toEqual([]);
  });
});

describe('serializeAliases', () => {
  it('writes one alias per line, sorted, with a trailing newline', () => {
    const text = serializeAliases([
      { name: 'monitor', to: 'display', since: '8.10.0', removeIn: '9.0.0' },
      { name: 'device-laptop', to: 'laptop', since: '8.8.0', removeIn: '9.0.0' }
    ]);
    expect(text).toBe(
      '{\n' +
      '  "device-laptop": { "to": "laptop", "since": "8.8.0", "removeIn": "9.0.0" },\n' +
      '  "monitor": { "to": "display", "since": "8.10.0", "removeIn": "9.0.0" }\n' +
      '}\n'
    );
    expect(JSON.parse(text)).toEqual({
      'device-laptop': { to: 'laptop', since: '8.8.0', removeIn: '9.0.0' },
      monitor: { to: 'display', since: '8.10.0', removeIn: '9.0.0' }
    });
  });

  it('writes an empty object when there are no aliases', () => {
    expect(serializeAliases([])).toBe('{}\n');
  });
});
