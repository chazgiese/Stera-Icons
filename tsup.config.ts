import { defineConfig } from 'tsup';

// ESM-only build - CJS removed for smaller package size
// Modern bundlers and Node.js 18+ handle ESM natively
//
// NOTE: Only shared modules are built here. The main entry points
// (stera-icons, dynamic, dynamic-variants) are generated as re-export
// files by the build script to avoid bundling all icons inline.
export default defineConfig({
  entry: {
    'base': 'src/base.ts',
    'types': 'src/types.ts',
    'utils': 'src/utils.ts',
    'IconBase': 'src/IconBase.tsx',
    'DynamicIcon': 'src/DynamicIcon.tsx',
  },
  format: ['esm'],
  dts: true, // Generate .d.ts files for shared modules
  splitting: false,
  sourcemap: false,
  clean: false, // Don't clean dist to preserve metadata files
  external: ['react', 'react/jsx-runtime'],
  treeshake: true,
  minify: true,
  outDir: 'dist/esm',
  outExtension() {
    return {
      js: '.js',
    };
  },
});
