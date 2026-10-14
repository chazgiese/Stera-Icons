# Stera Icons docs site

The Next.js app behind [stera.sh](https://stera.sh): an icon gallery, per-icon pages and usage docs. Private workspace package; it is not published to npm.

## Run locally

From the monorepo root:

```bash
pnpm install
pnpm build
pnpm dev:docs
```

`pnpm build` is required first. The site imports `stera-icons` from the workspace, which resolves to `packages/icons/dist`.

Open [http://localhost:3000](http://localhost:3000).

## How icon data gets here

`scripts/generate-icons.mjs` runs before `dev` and `build`. It reads `packages/icons/dist/icons.meta.json`, `packages/icons/categories.json` and `packages/icons/llms.txt` and writes to `data/` (gitignored):

| File | Contents |
|------|----------|
| `data/icons.json` | One entry per icon: names, tags, categories, variants |
| `data/categories.json` | The category list from `packages/icons/categories.json`, in display order |
| `data/icon-components.tsx` | Map from kebab name to component, from `stera-icons/dynamic-variants` |
| `data/llms.json` | The text of `packages/icons/llms.txt` |

Do not edit files in `data/`. Restart the dev server to pick up changes to the icon package.

## Routes

| Route | Source |
|-------|--------|
| `/` | `app/page.tsx` — icon gallery |
| `/icons/[name]` | `app/icons/[name]` — one page per icon |
| `/docs` | `app/docs`, content in `components/docs-content.tsx` |
| `/llms.txt` | `app/llms.txt/route.ts` — serves `packages/icons/llms.txt` |
| `/llms-full.txt` | `app/llms-full.txt/route.ts` — the guide plus an index of every icon |

## Deploy

Deployed on Vercel. The `build` script builds `stera-icons` first, then generates data, then runs `next build`.
