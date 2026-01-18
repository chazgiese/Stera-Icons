import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/base.ts', 'src/icons/*.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true, // Keep source maps for development
  clean: true,
  external: ['react'],
  treeshake: true,
  minify: false, // No minification for development
  outDir: 'dist',
  esbuildOptions: (options, context) => {
    if (context.format === 'cjs') {
      options.banner = {
        js: '"use strict";',
      };
    }
  },
});
