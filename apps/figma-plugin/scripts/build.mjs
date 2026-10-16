// Builds the Figma plugin into dist/.
//
//   node scripts/build.mjs          one-off build
//   node scripts/build.mjs --watch  rebuild on change
//
// src/code.ts is bundled with esbuild into dist/code.js (the sandbox code the
// manifest points at). src/ui.html is copied as-is to dist/ui.html.

import { build, context } from 'esbuild';
import { copyFile, mkdir, watch } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const uiSource = path.join(root, 'src', 'ui.html');
const uiOutput = path.join(dist, 'ui.html');
const isWatch = process.argv.includes('--watch');

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: [path.join(root, 'src', 'code.ts')],
  outfile: path.join(dist, 'code.js'),
  bundle: true,
  // Figma evaluates `main` as a plain script, so wrap everything in an IIFE.
  format: 'iife',
  platform: 'browser',
  // Matches the target the previous tsc-based build used.
  target: 'es2017',
  minify: false,
  sourcemap: false,
  logLevel: 'info',
};

async function copyUi() {
  await mkdir(dist, { recursive: true });
  await copyFile(uiSource, uiOutput);
  console.log('copied src/ui.html -> dist/ui.html');
}

if (!isWatch) {
  await build(options);
  await copyUi();
} else {
  const ctx = await context(options);
  await ctx.watch();
  await copyUi();
  console.log('watching src/ for changes...');
  for await (const event of watch(uiSource)) {
    if (event.eventType === 'change' || event.eventType === 'rename') {
      try {
        await copyUi();
      } catch (error) {
        console.error(error);
      }
    }
  }
}
