import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/base.ts', 'src/types.ts', 'src/utils.ts', 'src/IconBase.tsx', 'src/icons/*.tsx'],
  format: ['esm'],
  dts: false,
  splitting: false,
  sourcemap: true, // Keep source maps for development
  clean: false, // Don't clean dist to preserve production build artifacts
  external: ['react', 'react/jsx-runtime'],
  treeshake: true,
  minify: false, // No minification for development
  outDir: 'dist/esm',
  outExtension() {
    return { js: '.js' };
  },
});
