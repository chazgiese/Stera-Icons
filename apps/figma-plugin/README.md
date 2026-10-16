# Stera Icon Exporter

A Figma plugin that exports the Stera Icons file as a single `icons-export.json`. That file, committed at `packages/icons/icons-export.json`, is the only source of icon artwork, names, tags and categories for the `stera-icons` package.

The plugin is private to this repository. It is never published to npm or to the Figma Community.

## Setup

From the repo root:

```bash
pnpm install
pnpm build:plugin
```

This writes `dist/code.js` and `dist/ui.html`, the files `manifest.json` points at.

## Install in Figma Desktop

One-time step. Repeat it only if the repository moves on disk.

1. Open the Figma Desktop App.
2. Go to `Plugins` → `Development` → `Import plugin from manifest...`.
3. Select `apps/figma-plugin/manifest.json` from this repository.

The plugin appears as **Stera Icon Exporter** under Development plugins. If you previously imported it from the standalone `Stera-Icon-Exporter` repo, remove that entry first.

## Export workflow

1. Open the Stera Icons file and navigate to the page that holds the icon component sets.
2. Run the plugin.
3. Click **Run Pre-Checks**. Every check must pass before an export is allowed. Failing components are listed as links that select the node in Figma, and the **Fix Constraints** and **Rename to Vector** buttons fix the two most common problems in place.
4. Click **Export Icons**. The browser downloads `icons-export.json` (usually to `~/Downloads`).
5. Copy it into the icons package:

   ```bash
   cp ~/Downloads/icons-export.json packages/icons/icons-export.json
   ```

6. Continue with the "Adding Icons" steps in [CONTRIBUTING.md](../../CONTRIBUTING.md). Create the changeset **before** running `pnpm build:icons`, so new icons get the right `versionAdded`.

## Figma file conventions

Icons are component sets with two variant properties:

- **Weight**: `Regular`, `Bold` or `Fill`
- **Duotone**: `True` or `False`

This yields 6 variants per icon: Regular (×2 duotone states), Bold (×2), Fill (×2).

- Name the component set in kebab-case, e.g. `arrow-left`, `bubble`. Other names are converted.
- Put comma-separated tags in the component description. They are lowercased, deduped and sorted.
- Optionally end the description with up to 3 categories in brackets, e.g. `arrow, direction, right, [navigation, arrows]`. Categories are lowercase kebab-case and the first one is the primary. The ids must exist in `packages/icons/categories.json`; the plugin checks the syntax, the icons build checks the ids.

Pre-checks also require that shape layers are named `Vector`, that icons use fills only (no strokes), that constraints are `Scale`/`Scale`, and that no two icons share a name.

## Output format

```json
{
  "schemaVersion": "2.0.0",
  "exportedAt": "2024-01-15T10:30:00.000Z",
  "totalIcons": 2,
  "icons": [
    {
      "name": "arrow-right",
      "tags": ["arrow", "direction", "navigation", "right"],
      "categories": ["navigation", "arrows"],
      "variants": [
        {
          "variant": { "weight": "Regular", "duotone": false },
          "svg": "<svg viewBox=\"0 0 24 24\"...",
          "hash": "a1b2c3d4"
        },
        {
          "variant": { "weight": "Bold", "duotone": false },
          "svg": "<svg viewBox=\"0 0 24 24\"...",
          "hash": "b2c3d4e5"
        },
        {
          "variant": { "weight": "Fill", "duotone": true },
          "svg": "<svg viewBox=\"0 0 24 24\"...",
          "hash": "c3d4e5f6"
        }
      ]
    }
  ]
}
```

### Fields

- **`schemaVersion`**: Schema version (currently `2.0.0`)
- **`exportedAt`**: ISO timestamp of when the export was generated
- **`totalIcons`**: Total count of exported icons
- **`icons`**: Array of icon objects, sorted alphabetically by name
- **`name`**: Kebab-case icon name (e.g., "arrow-right")
- **`tags`**: Array of lowercase, deduped, alphabetized tags
- **`categories`**: Array of lowercase categories from the trailing `[...]` in the description, in authored order (first is primary); `[]` when none
- **`variants`**: Array of variant objects, sorted by weight (Regular, Bold, Fill) then duotone (false, true)
- **`variant.weight`**: One of `"Regular"`, `"Bold"`, or `"Fill"`
- **`variant.duotone`**: Boolean (`true` or `false`)
- **`svg`**: Normalized, minified SVG string
- **`hash`**: Deterministic hash of the normalized SVG. The icons build uses it to detect changed icons, so the hashing must never change

### Validation rules

- **ViewBox**: All SVGs must have `viewBox="0 0 24 24"`
- **Non-duotone variants**: Must not contain fixed hex colors (`fill="#..."`)

## Development

| Command (repo root) | What it does |
|---------------------|--------------|
| `pnpm build:plugin` | Bundle `src/code.ts` to `dist/code.js` with esbuild and copy `src/ui.html` to `dist/ui.html` |
| `pnpm dev:plugin` | Same, then rebuild on change. Re-run the plugin in Figma to pick up a new build |
| `pnpm --filter @stera/figma-plugin typecheck` | `tsc --noEmit` over `src/` |
| `pnpm --filter @stera/figma-plugin lint` | ESLint over `src/` and `scripts/` |

- `src/code.ts` is the plugin code that runs in the Figma sandbox. It has no imports; `@figma/plugin-typings` provides the `figma` global.
- `src/ui.html` is the plugin UI: plain HTML, CSS and JavaScript in one file.
- `dist/` is generated and gitignored.

## Troubleshooting

- **"Unable to load code"**: `dist/` is missing. Run `pnpm build:plugin`.
- **"No components found"**: the plugin only scans the current page. Switch to the page with the icon component sets.
- **A component is missing variants**: check that the component set has both the `Weight` and `Duotone` properties.
