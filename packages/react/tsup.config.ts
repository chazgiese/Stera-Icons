import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/icons/*.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react'],
  treeshake: true,
  minify: true,
  outDir: 'dist',
  esbuildOptions: (options, context) => {
    if (context.format === 'cjs') {
      options.banner = {
        js: '"use strict";',
      };
    }
  },
});
