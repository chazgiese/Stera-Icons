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
 * bundle: false preserves imports instead of inlining dependencies
 * This reduces icon size from ~1.4KB to ~400B each
 */
export const ESBUILD_CONFIG = {
  bundle: false,
  minify: true,
  platform: 'neutral',
  target: 'es2020',
  jsx: 'automatic',
  sourcemap: false,
};

/**
 * ESM-specific esbuild configuration
 * CJS removed - ESM-only for smaller package size
 */
export const ESBUILD_ESM_CONFIG = {
  ...ESBUILD_CONFIG,
  format: 'esm',
  outExtension: { '.js': '.js' },
};

/**
 * Progress reporting interval (icons)
 */
export const PROGRESS_INTERVAL = 100;

/**
 * TypeScript type definitions template
 * Paths are relative from dist/esm/icons/ to dist/esm/
 */
export const TYPE_DEFS = {
  wrapper: (componentName) => `import type { IconProps } from '../types.js';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface ${componentName}Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

export declare const ${componentName}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
export declare const ${componentName}Icon: typeof ${componentName};
export declare const Si${componentName}: typeof ${componentName};
`,
  
  variant: (componentName) => `import type { IconBaseProps } from '../base.js';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export type ${componentName}Props = Omit<IconBaseProps, 'children'>;

export declare const ${componentName}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
export declare const ${componentName}Icon: typeof ${componentName};
export declare const Si${componentName}: typeof ${componentName};
`
};
