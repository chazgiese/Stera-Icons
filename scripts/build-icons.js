#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';
import { build } from 'esbuild';
import { 
  normalizeSlug, 
  ensureUnique, 
  getComponentName, 
  getFileName, 
  parseTags,
  parseIconName,
  mapWeightName,
  validateVariantData,
  isValidWeight,
  generateTripleExport,
  generateTripleExportWithPath
} from './helpers.js';
import { HashVersioning } from './hash-versioning.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load SVGO config
const svgoConfig = (await import('./svgo.config.js')).default;

/**
 * Parse path attributes string into an object with camelCase keys
 */
function parsePathAttributes(attrsString) {
  const attrs = {};
  const attrRegex = /(\w+(?:-\w+)?)=["']([^"']*)["']/g;
  let attrMatch;
  while ((attrMatch = attrRegex.exec(attrsString)) !== null) {
    const [, name, value] = attrMatch;
    // Convert kebab-case to camelCase for JSX
    const jsxName = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    attrs[jsxName] = value;
  }
  return attrs;
}

/**
 * Parse optimized SVG and extract path elements as JSX
 * Handles both direct path opacity and group-level opacity (for duotone icons)
 */
function extractPathsFromSvg(svgString) {
  const paths = [];
  
  // Track paths we've already processed (to avoid duplicates)
  const processedPathStrings = new Set();
  
  // Handle paths inside opacity groups: <g ... opacity="X" ...><path .../></g>
  // This is used by duotone icons to apply 40% opacity to secondary paths
  // Note: opacity attribute can appear anywhere in the <g> tag attributes
  const groupRegex = /<g\s+([^>]*)>([\s\S]*?)<\/g>/g;
  let groupMatch;
  
  while ((groupMatch = groupRegex.exec(svgString)) !== null) {
    const groupAttrs = groupMatch[1];
    const groupContent = groupMatch[2];
    
    // Check if this group has an opacity attribute
    const opacityMatch = groupAttrs.match(/opacity=["']([^"']*)["']/);
    if (opacityMatch) {
      const groupOpacity = opacityMatch[1];
      
      // Extract paths within this opacity group
      const pathRegex = /<path\s+([^>]*)\/>/g;
      let pathMatch;
      while ((pathMatch = pathRegex.exec(groupContent)) !== null) {
        const attrs = parsePathAttributes(pathMatch[1]);
        // Apply group opacity (multiply if path has its own opacity)
        const pathOpacity = attrs.opacity ? parseFloat(attrs.opacity) : 1;
        attrs.opacity = String(parseFloat(groupOpacity) * pathOpacity);
        paths.push(attrs);
        processedPathStrings.add(pathMatch[0]); // Track to avoid duplicates
      }
    }
  }
  
  // Extract remaining paths not inside opacity groups
  const pathRegex = /<path\s+([^>]*)\/>/g;
  let match;
  while ((match = pathRegex.exec(svgString)) !== null) {
    if (!processedPathStrings.has(match[0])) {
      paths.push(parsePathAttributes(match[1]));
    }
  }
  
  return paths;
}

/**
 * Generate JSX for path elements
 */
function generatePathJsx(paths) {
  if (paths.length === 0) {
    return '<path d="" />';
  }
  
  return paths.map(attrs => {
    const attrStrings = Object.entries(attrs).map(([key, value]) => {
      // Handle numeric values like opacity
      if (key === 'opacity' && !isNaN(parseFloat(value))) {
        return `${key}={${value}}`;
      }
      return `${key}="${value}"`;
    });
    return `<path ${attrStrings.join(' ')} />`;
  }).join('\n        ');
}

async function buildIcons(iconsExportPath) {
  console.log('🚀 Building Stera Icons with optimized IconBase architecture...');
  
  // Read the icons export JSON
  const iconsExport = JSON.parse(readFileSync(iconsExportPath, 'utf8'));
  console.log(`📦 Processing ${iconsExport.totalIcons} icons from ${iconsExport.exportedAt}`);
  
  // Get version information using the hash-based versioning
  const hashVersioning = new HashVersioning(join(__dirname, '..'));
  const versionInfo = hashVersioning.getVersionForIcons();
  const currentVersion = versionInfo.version;
  const currentDate = new Date().toISOString();
  
  console.log(`📅 Version for new icons: ${currentVersion} (${versionInfo.source})`);
  if (versionInfo.isEstimated) {
    console.log(`⚠️  Note: This is an estimated version based on pending changesets`);
  }
  console.log(`📅 Build date: ${currentDate}`);
  
  const iconsDir = join(__dirname, '..', 'packages', 'react', 'src', 'icons');
  const distDir = join(__dirname, '..', 'packages', 'react', 'dist');
  
  // Clean up existing files to ensure only current icons are present
  console.log('🧹 Cleaning up existing icon files...');
  if (existsSync(iconsDir)) {
    rmSync(iconsDir, { recursive: true, force: true });
  }
  
  // Create fresh directories
  mkdirSync(iconsDir, { recursive: true });
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
  }
  
  const takenSlugs = new Set();
  const metadata = [];
  const wrapperExports = [];
  const directVariantExports = [];
  const namingConflicts = [];
  
  // Load existing metadata to track version history
  const existingMetadataPath = join(distDir, 'icons.meta.json');
  let existingMetadata = [];
  if (existsSync(existingMetadataPath)) {
    try {
      existingMetadata = JSON.parse(readFileSync(existingMetadataPath, 'utf8'));
      console.log(`📋 Loaded existing metadata for ${existingMetadata.length} icon variants`);
    } catch (error) {
      console.log('⚠️  Could not load existing metadata, starting fresh');
    }
  }
  
  // Create a Map for O(1) metadata lookup (instead of O(n) find calls)
  const existingMetadataMap = new Map();
  for (const item of existingMetadata) {
    const key = `${item.name}|${item.weight}|${item.duotone}|${item.componentName}`;
    existingMetadataMap.set(key, item);
  }
  
  // Track icons by base name for wrapper generation
  const iconsByBaseName = new Map();
  
  // Process each icon with progress reporting
  const totalIcons = iconsExport.icons.length;
  let processedIcons = 0;
  console.log(`\n🔄 Processing ${totalIcons} icons...`);
  
  for (const icon of iconsExport.icons) {
    processedIcons++;
    // Show progress every 100 icons or at the end
    if (processedIcons % 100 === 0 || processedIcons === totalIcons) {
      process.stdout.write(`\r  📊 Progress: ${processedIcons}/${totalIcons} icons processed`);
    }
    const originalName = icon.name;
    const parsedIconName = parseIconName(originalName);
    const normalizedSlug = normalizeSlug(parsedIconName);
    
    // Check for naming conflicts before processing
    if (takenSlugs.has(normalizedSlug)) {
      namingConflicts.push({
        originalName,
        normalizedSlug,
        conflictWith: Array.from(takenSlugs).find(slug => slug === normalizedSlug)
      });
      console.error(`❌ NAMING CONFLICT: Icon "${originalName}" normalizes to "${normalizedSlug}" which conflicts with an existing icon`);
      continue;
    }
    
    const uniqueSlug = ensureUnique(normalizedSlug, takenSlugs);
    
    // Track variants for this icon
    const iconVariants = [];
    
    // Generate the wrapper component name (user-facing API)
    const baseComponentName = uniqueSlug.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('');
    
    // Process each variant (6 combinations: 3 weights × 2 duotone states)
    for (const variantData of icon.variants) {
      // Validate variant data structure
      if (!validateVariantData(variantData)) {
        console.error(`  ❌ Invalid variant data for ${originalName}: ${JSON.stringify(variantData)}`);
        continue;
      }
      
      // Extract weight and duotone from variant object
      const exportWeight = variantData.variant.weight;
      const duotone = variantData.variant.duotone;
      
      // Map export weight name to internal weight name
      const weight = mapWeightName(exportWeight);
      
      // Validate that this is a recognized weight type
      if (!isValidWeight(weight)) {
        console.error(`  ❌ Unknown weight type "${exportWeight}" for ${originalName}`);
        continue;
      }
      
      const componentName = getComponentName(uniqueSlug, weight, duotone);
      const fileName = getFileName(uniqueSlug, weight, duotone);
      
      // Reduced logging - progress shown per icon, not per variant
      
      // Optimize SVG with SVGO
      let optimizedSvg;
      try {
        optimizedSvg = optimize(variantData.svg, svgoConfig).data;
      } catch (error) {
        console.error(`  ❌ Failed to optimize SVG for ${componentName}: ${error.message}`);
        console.error(`  ⚠️  Skipping this variant due to malformed SVG`);
        continue;
      }
      
      // Extract path data from optimized SVG
      const paths = extractPathsFromSvg(optimizedSvg);
      const pathJsx = generatePathJsx(paths);
      
      // Generate kebab-case icon name for CSS classes
      const kebabIconName = uniqueSlug + (weight !== 'regular' ? `-${weight}` : '') + (duotone ? '-duotone' : '');
      
      // Generate thin variant component using IconBase
      const componentCode = `import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ${componentName}Props = Omit<IconBaseProps, 'children'>;

const ${componentName} = memo(
  forwardRef<SVGSVGElement, ${componentName}Props>((props, ref) => (
    <IconBase ref={ref} iconName="${kebabIconName}" {...props}>
      ${pathJsx}
    </IconBase>
  ))
);

${componentName}.displayName = '${componentName}';

// Triple export pattern (lucide-react style)
${generateTripleExport(componentName)}
export type { ${componentName}Props };
`;
      
      // Write component file
      const componentPath = join(iconsDir, `${fileName}.tsx`);
      writeFileSync(componentPath, componentCode);
      
      // Track variant for wrapper generation
      iconVariants.push({ weight, duotone, componentName, fileName });
      
      // Add to direct variant exports with triple aliasing
      directVariantExports.push(generateTripleExportWithPath(componentName, `./icons/${fileName}`));
      
      // Use hash-based versioning to determine icon status (O(1) Map lookup)
      const metadataKey = `${parsedIconName}|${weight}|${duotone}|${baseComponentName}`;
      const existingItem = existingMetadataMap.get(metadataKey);
      
      const currentSvgHash = variantData.hash;
      
      let changeAnalysis;
      if (!existingItem) {
        changeAnalysis = {
          status: 'new',
          versionAdded: currentVersion,
          dateAdded: currentDate,
          lastModified: currentDate,
          versionLastModified: currentVersion
        };
      } else {
        const isModified = existingItem.svgHash !== currentSvgHash;
        if (isModified) {
          changeAnalysis = {
            status: 'modified',
            versionAdded: existingItem.versionAdded,
            dateAdded: existingItem.dateAdded,
            lastModified: currentDate,
            versionLastModified: currentVersion
          };
        } else {
          changeAnalysis = {
            status: 'unchanged',
            versionAdded: existingItem.versionAdded,
            dateAdded: existingItem.dateAdded,
            lastModified: existingItem.lastModified,
            versionLastModified: existingItem.versionLastModified || existingItem.versionAdded
          };
        }
      }
      
      const { versionAdded, dateAdded, lastModified, versionLastModified } = changeAnalysis;
      
      // Track status counts instead of logging every variant
      switch (changeAnalysis.status) {
        case 'new':
          // Will log in summary
          break;
        case 'modified':
          // Will log in summary
          break;
        case 'unchanged':
          // Will log in summary
          break;
      }
      
      // Add to metadata
      metadata.push({
        name: parsedIconName,
        weight,
        duotone,
        tags: parseTags(icon.tags),
        componentName: baseComponentName,
        variantComponentName: componentName,
        fileName: `${fileName}.tsx`,
        versionAdded,
        dateAdded,
        lastModified,
        versionLastModified,
        svgHash: variantData.hash
      });
    }
    
    // Store icon variants for wrapper generation
    iconsByBaseName.set(uniqueSlug, {
      baseName: uniqueSlug,
      variants: iconVariants,
      tags: parseTags(icon.tags)
    });
  }
  
  // Finish progress line
  console.log(''); // Newline after progress indicator
  console.log(`  ✅ Generated ${metadata.length} variant components`);
  
  // Generate dynamic wrapper components for convenience
  const totalWrappers = iconsByBaseName.size;
  let wrappersGenerated = 0;
  console.log('\n🔗 Generating dynamic wrapper components...');
  
  for (const [baseName, iconData] of iconsByBaseName) {
    const baseComponentName = baseName.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('');
    wrappersGenerated++;
    
    // Show progress every 100 wrappers or at the end
    if (wrappersGenerated % 100 === 0 || wrappersGenerated === totalWrappers) {
      process.stdout.write(`\r  📊 Progress: ${wrappersGenerated}/${totalWrappers} wrappers generated`);
    }
    
    // Build imports for all variants (no aliases needed since all variants have unique names)
    const imports = [];
    const componentMap = new Map();
    
    for (const variantInfo of iconData.variants) {
      const { weight, duotone, componentName, fileName } = variantInfo;
      imports.push(`import { ${componentName} } from './${fileName}';`);
      componentMap.set(`${weight}-${duotone}`, componentName);
    }
    
    // Build the selection logic
    const selectionLogic = [];
    
    if (componentMap.has('bold-true')) {
      selectionLogic.push(`if (weight === 'bold' && duotone) return <${componentMap.get('bold-true')} ref={ref} {...rest} />;`);
    }
    if (componentMap.has('bold-false')) {
      selectionLogic.push(`if (weight === 'bold') return <${componentMap.get('bold-false')} ref={ref} {...rest} />;`);
    }
    if (componentMap.has('fill-true')) {
      selectionLogic.push(`if (weight === 'fill' && duotone) return <${componentMap.get('fill-true')} ref={ref} {...rest} />;`);
    }
    if (componentMap.has('fill-false')) {
      selectionLogic.push(`if (weight === 'fill') return <${componentMap.get('fill-false')} ref={ref} {...rest} />;`);
    }
    if (componentMap.has('regular-true')) {
      selectionLogic.push(`if (duotone) return <${componentMap.get('regular-true')} ref={ref} {...rest} />;`);
    }
    
    const defaultComponent = componentMap.get('regular-false') || componentMap.values().next().value;
    selectionLogic.push(`return <${defaultComponent} ref={ref} {...rest} />;`);
    
    // Get the actual regular variant name for documentation
    const regularVariantName = iconData.variants.find(v => v.weight === 'regular' && !v.duotone)?.componentName || baseComponentName;
    
    // Generate wrapper component code with triple exports
    const wrapperCode = `import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
${imports.join('\n')}

export interface ${baseComponentName}Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ${baseComponentName} - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ${regularVariantName} } from 'stera-icons/icons/${regularVariantName}';
 */
const ${baseComponentName} = memo(forwardRef<SVGSVGElement, ${baseComponentName}Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  ${selectionLogic.join('\n  ')}
}));

${baseComponentName}.displayName = '${baseComponentName}';

// Triple export pattern (lucide-react style)
${generateTripleExport(baseComponentName)}
`;
    
    // Write wrapper component file (PascalCase filename matching component name)
    const wrapperPath = join(iconsDir, `${baseComponentName}.tsx`);
    writeFileSync(wrapperPath, wrapperCode);
    
    // Add to wrapper exports with triple aliasing
    wrapperExports.push(generateTripleExportWithPath(baseComponentName, `./icons/${baseComponentName}`));
  }
  
  // Finish wrapper progress line
  console.log(''); // Newline after progress indicator
  console.log(`  ✅ Generated ${wrapperExports.length} wrapper components`);
  
  // Generate main index file with both wrapper and direct variant exports
  const indexContent = `// Auto-generated file - do not edit manually
// Stera Icons - Modern React icon library with triple-aliased exports
// Import patterns: { Search }, { SearchIcon }, { SiSearch }

// Export types
export type { 
  IconProps, 
  IconWeight, 
  PathData, 
  PathElement, 
  IconPathData,
  IconNode,
  SVGElementType,
  SteraIcon,
  SVGAttributes,
  ElementAttributes
} from './types';

// Export utility functions
export { mergeClasses, hasA11yProp, toKebabCase, toCamelCase, toPascalCase } from './utils';

// =============================================================================
// DYNAMIC WRAPPER COMPONENTS (convenience, includes all 6 variants per icon)
// Use these when you need to switch weights/duotone at runtime
// All icons available with 3 aliases: Base, Icon suffix, Si prefix
// =============================================================================
${wrapperExports.join('\n')}

// =============================================================================
// DIRECT VARIANT EXPORTS (optimal bundle size, ~300 bytes each)
// Use these for maximum tree-shaking - import only the exact variant you need
// All variants available with 3 aliases: Base, Icon suffix, Si prefix
// Example: import { SearchBold, SearchBoldIcon, SiSearchBold } from 'stera-icons';
// =============================================================================
${directVariantExports.join('\n')}
`;
  
  writeFileSync(join(__dirname, '..', 'packages', 'react', 'src', 'index.ts'), indexContent);
  
  // Generate metadata JSON
  writeFileSync(
    join(distDir, 'icons.meta.json'), 
    JSON.stringify(metadata, null, 2)
  );
  
  // Generate dynamic icon imports map for lazy loading
  console.log('\n🔄 Generating dynamic icon imports map...');
  const dynamicImportsMap = new Map();
  
  // Add wrapper components (base names)
  for (const [baseName] of iconsByBaseName) {
    const componentName = baseName.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('');
    const kebabName = baseName; // Already in kebab-case
    dynamicImportsMap.set(kebabName, componentName);
  }
  
  // Add all variant components
  for (const [baseName, iconData] of iconsByBaseName) {
    for (const variantInfo of iconData.variants) {
      const { weight, duotone, componentName } = variantInfo;
      // Create kebab-case key: icon-name-weight or icon-name-weight-duotone
      const weightSuffix = weight === 'regular' ? '' : `-${weight}`;
      const duotoneSuffix = duotone ? '-duotone' : '';
      const kebabKey = `${baseName}${weightSuffix}${duotoneSuffix}`;
      dynamicImportsMap.set(kebabKey, componentName);
    }
  }
  
  // Generate the dynamicIconImports.ts file
  const dynamicImportsEntries = Array.from(dynamicImportsMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([key, componentName]) => `  '${key}': () => import('./icons/${componentName}')`)
    .join(',\n');
  
  const dynamicImportsContent = `// Auto-generated file - do not edit manually
// Dynamic icon imports map for lazy loading icons at runtime

import type { DynamicIconImports } from './DynamicIcon';

/**
 * Map of icon names to dynamic import functions.
 * Enables lazy-loading of icon components at runtime.
 * 
 * @example
 * import { dynamicIconImports } from 'stera-icons/dynamic';
 * const SearchIcon = await dynamicIconImports['search']();
 */
export const dynamicIconImports: DynamicIconImports = {
${dynamicImportsEntries}
};

/**
 * List of all available icon names.
 * Useful for building icon pickers or validating icon names.
 */
export const iconNames = Object.keys(dynamicIconImports);

export default dynamicIconImports;
`;
  
  writeFileSync(
    join(__dirname, '..', 'packages', 'react', 'src', 'dynamicIconImports.ts'),
    dynamicImportsContent
  );
  
  console.log(`  ✅ Generated dynamic imports map with ${dynamicImportsMap.size} entries`);
  
  // Check for naming conflicts and exit with error if any found
  if (namingConflicts.length > 0) {
    console.error(`\n❌ BUILD FAILED: Found ${namingConflicts.length} naming conflict(s):`);
    namingConflicts.forEach((conflict, index) => {
      console.error(`  ${index + 1}. Icon "${conflict.originalName}" normalizes to "${conflict.normalizedSlug}"`);
      console.error(`     Conflicts with existing icon: "${conflict.conflictWith}"`);
    });
    console.error(`\n💡 To fix naming conflicts, ensure all icon names in icons-export.json normalize to unique slugs.`);
    process.exit(1);
  }
  
  // Compile individual icon components for subpath exports (BATCHED for performance)
  console.log('\n📦 Preparing icon components for compilation...');
  const distIconsDir = join(distDir, 'icons');
  if (!existsSync(distIconsDir)) {
    mkdirSync(distIconsDir, { recursive: true });
  }
  
  const packageJsonPath = join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  
  const srcDir = join(__dirname, '..', 'src');
  
  // Collect all entry points for batched compilation
  const wrapperEntryPoints = [];
  const wrapperComponents = []; // For TypeScript definitions
  const variantEntryPoints = [];
  const variantComponents = []; // For TypeScript definitions
  
  // Collect wrapper components
  for (const [baseName] of iconsByBaseName) {
    const componentName = baseName.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('');
    const wrapperPath = join(iconsDir, `${componentName}.tsx`);
    
    if (!existsSync(wrapperPath)) {
      console.warn(`  ⚠️  Wrapper not found: ${wrapperPath}`);
      continue;
    }
    
    wrapperEntryPoints.push({ in: wrapperPath, out: componentName });
    wrapperComponents.push(componentName);
  }
  
  // Collect variant components
  for (const [baseName, iconData] of iconsByBaseName) {
    for (const variantInfo of iconData.variants) {
      const { componentName, fileName } = variantInfo;
      const variantPath = join(iconsDir, `${fileName}.tsx`);
      
      if (!existsSync(variantPath)) {
        continue;
      }
      
      variantEntryPoints.push({ in: variantPath, out: componentName });
      variantComponents.push(componentName);
    }
  }
  
  const totalComponents = wrapperEntryPoints.length + variantEntryPoints.length;
  console.log(`  📋 Found ${wrapperEntryPoints.length} wrapper components`);
  console.log(`  📋 Found ${variantEntryPoints.length} variant components`);
  console.log(`  📋 Total: ${totalComponents} components to compile`);
  
  // Combine all entry points for a single batched build
  const allEntryPoints = [...wrapperEntryPoints, ...variantEntryPoints];
  
  // Batch compile ESM versions (single esbuild call for all components)
  console.log('\n⚡ Compiling ESM bundles (batched)...');
  const esmStartTime = Date.now();
  try {
    await build({
      entryPoints: allEntryPoints,
      bundle: true,
      format: 'esm',
      outdir: distIconsDir,
      outExtension: { '.js': '.mjs' },
      external: ['react'],
      minify: true,
      treeShaking: true,
      platform: 'neutral',
      target: 'es2020',
      jsx: 'automatic',
      resolveExtensions: ['.tsx', '.ts', '.jsx', '.js'],
      absWorkingDir: srcDir,
    });
    console.log(`  ✅ ESM compilation complete (${Date.now() - esmStartTime}ms)`);
  } catch (error) {
    console.error(`  ❌ ESM compilation failed: ${error.message}`);
    throw error;
  }
  
  // Batch compile CJS versions (single esbuild call for all components)
  console.log('⚡ Compiling CJS bundles (batched)...');
  const cjsStartTime = Date.now();
  try {
    await build({
      entryPoints: allEntryPoints,
      bundle: true,
      format: 'cjs',
      outdir: distIconsDir,
      outExtension: { '.js': '.cjs' },
      external: ['react'],
      minify: true,
      treeShaking: true,
      platform: 'neutral',
      target: 'es2020',
      jsx: 'automatic',
      resolveExtensions: ['.tsx', '.ts', '.jsx', '.js'],
      absWorkingDir: srcDir,
      banner: { js: '"use strict";' },
    });
    console.log(`  ✅ CJS compilation complete (${Date.now() - cjsStartTime}ms)`);
  } catch (error) {
    console.error(`  ❌ CJS compilation failed: ${error.message}`);
    throw error;
  }
  
  // Generate TypeScript definitions for wrapper components
  console.log('📝 Generating TypeScript definitions...');
  for (const componentName of wrapperComponents) {
    const aliases = {
      base: componentName,
      iconSuffix: `${componentName}Icon`,
      siPrefix: `Si${componentName}`
    };
    
    const typesContent = `import type { IconProps } from '../types';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface ${componentName}Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

export declare const ${aliases.base}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
export declare const ${aliases.iconSuffix}: typeof ${aliases.base};
export declare const ${aliases.siPrefix}: typeof ${aliases.base};
`;
    writeFileSync(join(distIconsDir, `${componentName}.d.ts`), typesContent);
  }
  
  // Generate TypeScript definitions for variant components
  for (const componentName of variantComponents) {
    const aliases = {
      base: componentName,
      iconSuffix: `${componentName}Icon`,
      siPrefix: `Si${componentName}`
    };
    
    const variantTypesContent = `import type { IconBaseProps } from '../IconBase';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export type ${componentName}Props = Omit<IconBaseProps, 'children'>;

export declare const ${aliases.base}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
export declare const ${aliases.iconSuffix}: typeof ${aliases.base};
export declare const ${aliases.siPrefix}: typeof ${aliases.base};
`;
    writeFileSync(join(distIconsDir, `${componentName}.d.ts`), variantTypesContent);
  }
  
  console.log(`  ✅ Generated ${totalComponents} TypeScript definitions`)
  
  // Update package.json with wildcard exports (following lucide-react pattern)
  // Preserve existing exports (./base, ./dynamic, etc.) and only update ./icons/*
  const existingExports = packageJson.exports?.['.'] || {
    types: './dist/index.d.ts',
    import: './dist/index.mjs',
    require: './dist/index.cjs'
  };
  
  packageJson.exports = {
    ...packageJson.exports, // Preserve all existing exports
    '.': existingExports,
    './icons/*': {
      types: './dist/icons/*.d.ts',
      import: './dist/icons/*.mjs',
      require: './dist/icons/*.cjs'
    }
  };
  
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`  ✅ Using wildcard exports pattern (./icons/*)`);
  
  // Calculate summary statistics (using O(1) Map lookup)
  const newIcons = metadata.filter(item => item.versionAdded === currentVersion).length;
  const modifiedIcons = metadata.filter(item => {
    const key = `${item.name}|${item.weight}|${item.duotone}|${item.componentName}`;
    const existing = existingMetadataMap.get(key);
    return existing && existing.svgHash && item.svgHash !== existing.svgHash;
  }).length;
  const unchangedIcons = metadata.length - newIcons - modifiedIcons;
  
  console.log(`\n📊 Build Summary:`);
  console.log(`  ✅ Generated ${metadata.length} direct variant components (IconBase-based)`);
  console.log(`  🔗 Generated ${wrapperExports.length} dynamic wrapper components (convenience)`);
  console.log(`  📦 Using wildcard exports (./icons/*) for ${totalComponents} components`);
  console.log(`  🆕 New icons: ${newIcons}`);
  console.log(`  🔄 Modified icons: ${modifiedIcons}`);
  console.log(`  ✅ Unchanged icons: ${unchangedIcons}`);
  console.log(`  📁 Components written to: ${iconsDir}`);
  console.log(`  📁 Individual bundles written to: ${distIconsDir}`);
  console.log(`  📊 Metadata written to: ${join(distDir, 'icons.meta.json')}`);
  console.log(`\n🎯 Import patterns (all with triple aliasing):`);
  console.log(`  • Barrel imports: import { SiSearch, SearchBold } from 'stera-icons';`);
  console.log(`  • Subpath imports (lucide-react pattern): import { Search } from 'stera-icons/icons/Search';`);
  console.log(`  • Variant subpath: import { SearchBold } from 'stera-icons/icons/SearchBold';`);
}

// Main execution
const iconsExportPath = process.argv[2];
if (!iconsExportPath) {
  console.error('❌ Please provide path to icons-export.json');
  console.error('Usage: node scripts/build-icons.js <path-to-icons-export.json>');
  process.exit(1);
}

buildIcons(iconsExportPath).catch(console.error);
