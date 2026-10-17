#!/usr/bin/env node

/**
 * Generate TypeScript declarations for the icon library.
 * 
 * This script generates .d.ts files without using the TypeScript compiler,
 * which allows it to run with constant memory regardless of icon count.
 * 
 * Generated files:
 * - dist/types.d.ts - Core type definitions
 * - dist/IconBase.d.ts - IconBase component declaration
 * - dist/base.d.ts - Separate entry point for IconBase (advanced usage)
 * - dist/esm/index.d.ts - Main entry re-exporting all icons
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { loadAliases, getDeprecatedExports, deprecationMessage } from './icon-build/aliases.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PACKAGE_DIR = join(__dirname, '..');
const SRC_DIR = join(PACKAGE_DIR, 'src');
const DIST_DIR = join(PACKAGE_DIR, 'dist', 'esm');

// Old export names of renamed icons, from icon-aliases.json
const DEPRECATED_EXPORTS = getDeprecatedExports(loadAliases(PACKAGE_DIR));

/**
 * Declare the exports of a re-export line as @deprecated constants.
 * A plain re-export cannot carry a deprecation, so each name is declared separately.
 * e.g. "LaptopBold as DeviceLaptopBold, ..." from "./icons/LaptopBold"
 * @param {string} exportNames
 * @param {string} importPath
 * @returns {string[]|null} - Declaration lines, or null if the line exports no deprecated name
 */
function generateDeprecatedDeclarations(exportNames, importPath) {
  const specifiers = exportNames.split(',').map(specifier => specifier.trim().split(/\s+as\s+/));
  if (!specifiers.some(([source, name]) => DEPRECATED_EXPORTS.has(name || source))) {
    return null;
  }

  const lines = [];
  for (const [source, name = source] of specifiers) {
    const { replacement, removeIn } = DEPRECATED_EXPORTS.get(name);
    lines.push(`/** @deprecated ${deprecationMessage(replacement, removeIn)} */`);
    lines.push(`export declare const ${name}: typeof import('${importPath}').${source};`);
  }
  return lines;
}

/**
 * Generate types.d.ts from src/types.ts (enhanced with new types)
 */
function generateTypesDeclaration() {
  const typesContent = `import { SVGProps, RefAttributes, ForwardRefExoticComponent } from 'react';

export type SVGElementType = 
  | 'circle' 
  | 'ellipse' 
  | 'g' 
  | 'line' 
  | 'path' 
  | 'polygon' 
  | 'polyline' 
  | 'rect';

export type IconNode = Array<[elementName: SVGElementType, attrs: Record<string, string>]>;

export type IconWeight = 'regular' | 'bold' | 'fill';

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

export type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  duotone?: boolean;
  'aria-label'?: string;
  title?: string;
}

export type SteraIcon = ForwardRefExoticComponent<
  Omit<IconProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

export interface IconMetadata {
  /** Stable icon id: the Figma component set key. It survives renames; the name is the public API */
  id: string;
  name: string;
  weight: 'regular' | 'bold' | 'fill';
  duotone: boolean;
  tags: string[];
  /** Category ids from categories.json, primary first */
  categories: string[];
  componentName: string;
  fileName: string;
  versionAdded: string;
  dateAdded: string;
  lastModified: string;
  svgHash: string;
}

export interface IconsExport {
  schemaVersion: string;
  exportedAt: string;
  totalIcons: number;
  icons: Array<{
    /** Stable icon id: the Figma component set key */
    id: string;
    name: string;
    tags: string[];
    categories: string[];
    variants: Array<{
      variant: {
        weight: 'Regular' | 'Bold' | 'Fill';
        duotone: boolean;
      };
      svg: string;
      hash: string;
    }>;
  }>;
}

export interface NameMapping {
  [originalName: string]: string;
}

export interface PathElement {
  d: string;
  opacity?: number;
  fillRule?: 'nonzero' | 'evenodd';
  clipRule?: 'nonzero' | 'evenodd';
}

export type PathData = string | PathElement | PathElement[];

export interface IconPathData {
  regular?: PathData;
  regularDuotone?: PathData;
  bold?: PathData;
  boldDuotone?: PathData;
  fill?: PathData;
  fillDuotone?: PathData;
}
`;

  return typesContent;
}

/**
 * Generate IconBase.d.ts
 */
function generateIconBaseDeclaration() {
  const iconBaseContent = `import { ReactNode } from 'react';
import type { IconProps } from './types';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface IconBaseProps extends Omit<IconProps, 'weight' | 'duotone'> {
  children: ReactNode;
}

export declare const IconBase: MemoExoticComponent<ForwardRefExoticComponent<IconBaseProps & RefAttributes<SVGSVGElement>>>;
`;

  return iconBaseContent;
}

/**
 * Generate base.d.ts - separate entry point for IconBase
 */
function generateBaseDeclaration() {
  const baseContent = `// Separate entry point for IconBase (advanced usage)
// Import via: import { IconBase } from 'stera-icons/base';

export { IconBase } from './IconBase';
export type { IconBaseProps } from './IconBase';
`;

  return baseContent;
}

/**
 * Generate dynamic.d.ts - dynamic icon loading entry point
 */
function generateDynamicDeclaration() {
  const dynamicContent = `import type { ComponentType, ReactNode, Ref } from 'react';
import type { IconProps } from './types';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface DynamicIconProps extends Omit<IconProps, 'weight' | 'duotone'> {
  name: string;
  fallback?: ComponentType | ReactNode;
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
  onError?: (error: Error) => void;
}

export type DynamicIconComponent = ComponentType<Omit<IconProps, 'ref'> & { ref?: Ref<SVGSVGElement> }>;

export type DynamicIconImports = Record<string, () => Promise<{ default: DynamicIconComponent }>>;

export type DynamicIconAliases = Record<string, { to: string; removeIn: string }>;

export declare const DynamicIcon: ForwardRefExoticComponent<
  DynamicIconProps & RefAttributes<SVGSVGElement>
>;

export declare const dynamicIconImports: DynamicIconImports;

export declare const iconNames: string[];

export type { DynamicIconProps as DynamicIconPropsType };
`;

  return dynamicContent;
}

/**
 * Generate dynamicIconImports.d.ts - dynamic icon imports map
 */
function generateDynamicIconImportsDeclaration() {
  const dynamicIconImportsContent = `import type { ComponentType, Ref } from 'react';
import type { IconProps } from './types';

export type DynamicIconComponent = ComponentType<Omit<IconProps, 'ref'> & { ref?: Ref<SVGSVGElement> }>;

export type DynamicIconImports = Record<string, () => Promise<{ default: DynamicIconComponent }>>;

export declare const dynamicIconImports: DynamicIconImports;

export declare const iconNames: string[];

export type DynamicIconAliases = Record<string, { to: string; removeIn: string }>;

export declare const dynamicIconAliases: DynamicIconAliases;

export default dynamicIconImports;
`;

  return dynamicIconImportsContent;
}

/**
 * Generate dynamic-variants.d.ts - wrapper components with weight/duotone props
 */
function generateDynamicVariantsDeclaration() {
  const dynamicVariantsPath = join(SRC_DIR, 'dynamic-variants.ts');
  
  // Check if the file exists (it's auto-generated by build-icons.js)
  if (!existsSync(dynamicVariantsPath)) {
    // Return a placeholder that will be regenerated on next build
    return `// Auto-generated TypeScript declarations for dynamic variant wrappers
// Generated by scripts/generate-declarations.js
// This file is populated when build-icons.js generates dynamic-variants.ts

// Re-export wrapper components (with weight/duotone props)
// Run 'pnpm build:icons' to generate the full exports
`;
  }
  
  const dynamicVariantsContent = readFileSync(dynamicVariantsPath, 'utf8');
  
  const lines = dynamicVariantsContent.split('\n');
  const declarationLines = [];
  
  // Add header comment
  declarationLines.push('// Auto-generated TypeScript declarations for dynamic variant wrappers');
  declarationLines.push('// Generated by scripts/generate-declarations.js');
  declarationLines.push('// Use these when you need to switch icon weight/duotone at runtime');
  declarationLines.push('');
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines and comments
    if (trimmedLine === '' || trimmedLine.startsWith('//')) {
      continue;
    }
    
    // Handle re-exports: export { X, XIcon, SiX } from './path';
    const reExportMatch = trimmedLine.match(/^export\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"]\s*;?$/);
    if (reExportMatch) {
      const [, exportNames, importPath] = reExportMatch;
      const deprecatedDeclarations = generateDeprecatedDeclarations(exportNames, importPath);
      if (deprecatedDeclarations) {
        declarationLines.push(...deprecatedDeclarations);
        continue;
      }
      declarationLines.push(`export { ${exportNames} } from '${importPath}';`);
    }
  }
  
  return declarationLines.join('\n') + '\n';
}

/**
 * Load icons.meta.json and build a lookup map of variantComponentName → tags.
 * @returns {Map<string, string[]>}
 */
function loadTagsMap() {
  const metaPath = join(PACKAGE_DIR, 'dist', 'icons.meta.json');
  if (!existsSync(metaPath)) return new Map();
  const metadata = JSON.parse(readFileSync(metaPath, 'utf8'));
  const tagsMap = new Map();
  for (const entry of metadata) {
    tagsMap.set(entry.variantComponentName, entry.tags);
  }
  return tagsMap;
}

/**
 * Extract the Si-prefixed alias from a comma-separated export names string.
 * e.g. "AccessibilityRegular as Accessibility, AccessibilityRegular as AccessibilityIcon, AccessibilityRegular as SiAccessibility"
 * → "SiAccessibility"
 * @param {string} exportNames
 * @returns {string|null}
 */
function extractSiAlias(exportNames) {
  const match = exportNames.match(/\bSi\w+/);
  return match ? match[0] : null;
}

/**
 * Extract the source component name from an import path.
 * e.g. "./icons/AccessibilityRegular" → "AccessibilityRegular"
 * @param {string} importPath
 * @returns {string}
 */
function extractComponentFromPath(importPath) {
  return importPath.split('/').pop();
}

/**
 * Parse src/index.ts and generate index.d.ts with JSDoc tags for LLM discoverability.
 */
function generateIndexDeclaration() {
  const indexPath = join(SRC_DIR, 'index.ts');
  const indexContent = readFileSync(indexPath, 'utf8');
  const tagsMap = loadTagsMap();

  const lines = indexContent.split('\n');
  const declarationLines = [];

  // Add header comment
  declarationLines.push('// To find an icon by keyword, search this file for the keyword in @tags on each icon\'s JSDoc.');
  declarationLines.push('// Auto-generated TypeScript declarations');
  declarationLines.push('// Generated by scripts/generate-declarations.js');
  declarationLines.push('// Triple-aliased exports: Base, Icon suffix, Si prefix');
  declarationLines.push('');

  let inMultilineExport = false;
  let multilineExport = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Skip empty lines and comments in source, but preserve section comments
    if (trimmedLine === '' || trimmedLine.startsWith('//')) {
      // Preserve section divider comments
      if (trimmedLine.includes('===') || trimmedLine.includes('BASE ICON') || trimmedLine.includes('DIRECT VARIANT') || trimmedLine.includes('DEPRECATED ALIASES')) {
        declarationLines.push(line);
      }
      continue;
    }

    // Handle multiline exports
    if (trimmedLine.startsWith('export type {') && !trimmedLine.includes('} from')) {
      inMultilineExport = true;
      multilineExport = [line];
      continue;
    }

    if (inMultilineExport) {
      multilineExport.push(line);
      if (trimmedLine.includes('} from')) {
        // End of multiline export
        declarationLines.push(multilineExport.join('\n'));
        inMultilineExport = false;
        multilineExport = [];
      }
      continue;
    }

    // Handle re-exports: export { X } from './path';
    // Now also handles triple exports: export { X, XIcon, SiX } from './path';
    const reExportMatch = trimmedLine.match(/^export\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"]\s*;?$/);
    if (reExportMatch) {
      const [, exportNames, importPath] = reExportMatch;

      // Old names of renamed icons are declared as @deprecated
      const deprecatedDeclarations = generateDeprecatedDeclarations(exportNames, importPath);
      if (deprecatedDeclarations) {
        declarationLines.push(...deprecatedDeclarations);
        continue;
      }

      // Add JSDoc with @component and @tags for icon exports
      if (importPath.startsWith('./icons/')) {
        const sourceComponent = extractComponentFromPath(importPath);
        const tags = tagsMap.get(sourceComponent);
        const siAlias = extractSiAlias(exportNames);
        if (tags && tags.length > 0 && siAlias) {
          declarationLines.push(`/**`);
          declarationLines.push(` * @component ${siAlias}`);
          declarationLines.push(` * @tags ${tags.join(', ')}`);
          declarationLines.push(` */`);
        }
      }

      declarationLines.push(`export { ${exportNames} } from '${importPath}';`);
      continue;
    }

    // Handle type re-exports: export type { X } from './path';
    const typeReExportMatch = trimmedLine.match(/^export\s+type\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"]\s*;?$/);
    if (typeReExportMatch) {
      const [, typeNames, importPath] = typeReExportMatch;
      declarationLines.push(`export type { ${typeNames} } from '${importPath}';`);
      continue;
    }
  }

  return declarationLines.join('\n') + '\n';
}

/**
 * Main function to generate all declarations
 */
function main() {
  console.log('📝 Generating TypeScript declarations...');
  
  // Ensure dist directory exists
  if (!existsSync(DIST_DIR)) {
    mkdirSync(DIST_DIR, { recursive: true });
  }
  
  // Generate types.d.ts
  const typesDeclaration = generateTypesDeclaration();
  writeFileSync(join(DIST_DIR, 'types.d.ts'), typesDeclaration);
  console.log('  ✅ Generated dist/esm/types.d.ts');
  
  // Generate IconBase.d.ts
  const iconBaseDeclaration = generateIconBaseDeclaration();
  writeFileSync(join(DIST_DIR, 'IconBase.d.ts'), iconBaseDeclaration);
  console.log('  ✅ Generated dist/esm/IconBase.d.ts');
  
  // Generate base.d.ts (separate entry point for IconBase)
  const baseDeclaration = generateBaseDeclaration();
  writeFileSync(join(DIST_DIR, 'base.d.ts'), baseDeclaration);
  console.log('  ✅ Generated dist/esm/base.d.ts');
  
  // Generate dynamic.d.ts (dynamic icon loading entry point)
  const dynamicDeclaration = generateDynamicDeclaration();
  writeFileSync(join(DIST_DIR, 'dynamic.d.ts'), dynamicDeclaration);
  console.log('  ✅ Generated dist/esm/dynamic.d.ts');
  
  // Generate dynamicIconImports.d.ts (dynamic icon imports map)
  const dynamicIconImportsDeclaration = generateDynamicIconImportsDeclaration();
  writeFileSync(join(DIST_DIR, 'dynamicIconImports.d.ts'), dynamicIconImportsDeclaration);
  console.log('  ✅ Generated dist/esm/dynamicIconImports.d.ts');
  
  // Generate dynamic-variants.d.ts (wrapper components with weight/duotone props)
  const dynamicVariantsDeclaration = generateDynamicVariantsDeclaration();
  writeFileSync(join(DIST_DIR, 'dynamic-variants.d.ts'), dynamicVariantsDeclaration);
  console.log('  ✅ Generated dist/esm/dynamic-variants.d.ts');
  
  // Generate index.d.ts (main barrel export)
  const indexDeclaration = generateIndexDeclaration();
  writeFileSync(join(DIST_DIR, 'index.d.ts'), indexDeclaration);

  // Count exports
  const exportCount = (indexDeclaration.match(/^export\s*\{/gm) || []).length;
  const typeExportCount = (indexDeclaration.match(/^export\s+type\s*\{/gm) || []).length;
  console.log(`  ✅ Generated dist/esm/index.d.ts (${exportCount} component exports, ${typeExportCount} type exports)`);
  
  console.log('✨ Declaration generation complete!');
}

main();
