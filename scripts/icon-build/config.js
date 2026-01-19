/**
 * Build Configuration
 * 
 * Centralized configuration for the icon build system.
 */

/**
 * Valid icon weight types
 */
export const VALID_WEIGHTS = ['regular', 'bold', 'fill'];

/**
 * Duotone opacity value (40%)
 */
export const DUOTONE_OPACITY = 0.4;

/**
 * ESBuild configuration for icon compilation
 */
export const ESBUILD_CONFIG = {
  bundle: true,
  external: ['react'],
  minify: true,
  treeShaking: true,
  platform: 'neutral',
  target: 'es2020',
  jsx: 'automatic',
  resolveExtensions: ['.tsx', '.ts', '.jsx', '.js'],
};

/**
 * ESM-specific esbuild configuration
 */
export const ESBUILD_ESM_CONFIG = {
  ...ESBUILD_CONFIG,
  format: 'esm',
  outExtension: { '.js': '.mjs' },
};

/**
 * CJS-specific esbuild configuration
 */
export const ESBUILD_CJS_CONFIG = {
  ...ESBUILD_CONFIG,
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
  banner: { js: '"use strict";' },
};

/**
 * Progress reporting interval (icons)
 */
export const PROGRESS_INTERVAL = 100;

/**
 * TypeScript type definitions template
 */
export const TYPE_DEFS = {
  wrapper: (componentName) => `import type { IconProps } from '../types';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface ${componentName}Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

export declare const ${componentName}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
export declare const ${componentName}Icon: typeof ${componentName};
export declare const Si${componentName}: typeof ${componentName};
`,
  
  variant: (componentName) => `import type { IconBaseProps } from '../IconBase';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export type ${componentName}Props = Omit<IconBaseProps, 'children'>;

export declare const ${componentName}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
export declare const ${componentName}Icon: typeof ${componentName};
export declare const Si${componentName}: typeof ${componentName};
`
};
