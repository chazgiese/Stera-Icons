import { defineConfig } from 'tsup';

export default defineConfig([
  // ESM build
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: true,
    external: ['react'],
    treeshake: true,
    minify: true,
    outDir: 'dist/esm',
    outExtension: () => ({ js: '.mjs' }),
  },
  // CJS build
  {
    entry: ['src/index.ts'],
    format: ['cjs'],
    dts: false,
    splitting: false,
    sourcemap: false,
    clean: false,
    external: ['react'],
    treeshake: true,
    minify: true,
    outDir: 'dist/cjs',
    esbuildOptions: (options) => {
      options.banner = {
        js: '"use strict";',
      };
    },
  },
  // Individual icon builds for tree-shaking
  {
    entry: ['src/icons/*.tsx'],
    format: ['esm'],
    dts: true,
    splitting: true,
    sourcemap: false,
    clean: false,
    external: ['react'],
    treeshake: true,
    minify: true,
    outDir: 'dist/icons',
  },
]);
