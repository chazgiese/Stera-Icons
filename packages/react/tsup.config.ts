import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: false, // Don't clean dist to preserve metadata files
  external: ['react'],
  treeshake: true,
  minify: true,
  outDir: 'dist',
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.mjs',
    };
  },
  esbuildOptions: (options) => {
    if (options.format === 'cjs') {
      options.banner = {
        js: '"use strict";',
      };
    }
  },
});
