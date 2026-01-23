#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';
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
  generateTripleExportWithPath,
  generateAliasedReExport,
  generateTripleExportWithPathDist,
  generateAliasedReExportDist
} from './helpers.js';
import { HashVersioning } from './hash-versioning.js';
import { parsePathAttributes, extractPathsFromSvg } from './icon-build/svg-parser.js';
import { generatePathJsx, generateVariantComponent, generateWrapperComponent, buildSelectionLogic } from './icon-build/jsx-generator.js';
import { compileIcons, generateWrapperDeclarations, generateVariantDeclarations, collectEntryPoints } from './icon-build/compiler.js';
import { PROGRESS_INTERVAL } from './icon-build/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load SVGO config
const svgoConfig = (await import('./svgo.config.js')).default;

/**
 * Main function to build icon components from Figma export
 * @param {string} iconsExportPath - Path to icons-export.json file
 * @returns {Promise<void>}
 */
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
  
  const iconsDir = join(__dirname, '..', 'src', 'icons');
  const distDir = join(__dirname, '..', 'dist');
  
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
  const wrapperExports = [];           // For dynamic-variants.ts (wrapper components)
  const baseNameExports = [];          // For index.ts (Regular variants aliased as base names)
  const directVariantExports = [];     // For index.ts (all variants with their own names)
  // Dist versions (with .js extensions for ESM)
  const wrapperExportsDist = [];
  const baseNameExportsDist = [];
  const directVariantExportsDist = [];
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
    // Show progress every PROGRESS_INTERVAL icons or at the end
    if (processedIcons % PROGRESS_INTERVAL === 0 || processedIcons === totalIcons) {
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
      const componentCode = generateVariantComponent({
        componentName,
        kebabIconName,
        pathJsx
      });
      
      // Write component file
      const componentPath = join(iconsDir, `${fileName}.tsx`);
      writeFileSync(componentPath, componentCode);
      
      // Track variant for wrapper generation
      iconVariants.push({ weight, duotone, componentName, fileName });
      
      // Add to direct variant exports with triple aliasing
      directVariantExports.push(generateTripleExportWithPath(componentName, `./icons/${fileName}`));
      directVariantExportsDist.push(generateTripleExportWithPathDist(componentName, `./icons/${componentName}`));
      
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
    
    // Show progress every PROGRESS_INTERVAL wrappers or at the end
    if (wrappersGenerated % PROGRESS_INTERVAL === 0 || wrappersGenerated === totalWrappers) {
      process.stdout.write(`\r  📊 Progress: ${wrappersGenerated}/${totalWrappers} wrappers generated`);
    }
    
    // Build imports for all variants (no aliases needed since all variants have unique names)
    const imports = [];
    const componentMap = new Map();
    
    for (const variantInfo of iconData.variants) {
      const { weight, duotone, componentName, fileName } = variantInfo;
      // Use .js extension for ESM compatibility
      imports.push(`import { ${componentName} } from './${fileName}.js';`);
      componentMap.set(`${weight}-${duotone}`, componentName);
    }
    
    // Build the selection logic
    const selectionLogic = buildSelectionLogic(componentMap);
    
    const defaultComponent = componentMap.get('regular-false') || componentMap.values().next().value;
    selectionLogic.push(`return <${defaultComponent} ref={ref} {...rest} />;`);
    
    // Get the actual regular variant name for documentation
    const regularVariantName = iconData.variants.find(v => v.weight === 'regular' && !v.duotone)?.componentName || baseComponentName;
    
    // Generate wrapper component code with triple exports
    const wrapperCode = generateWrapperComponent({
      baseComponentName,
      imports,
      componentMap,
      selectionLogic,
      defaultComponent,
      regularVariantName
    });
    
    // Write wrapper component file (PascalCase filename matching component name)
    const wrapperPath = join(iconsDir, `${baseComponentName}.tsx`);
    writeFileSync(wrapperPath, wrapperCode);
    
    // Add to wrapper exports for dynamic-variants.ts (with triple aliasing)
    wrapperExports.push(generateTripleExportWithPath(baseComponentName, `./icons/${baseComponentName}`));
    wrapperExportsDist.push(generateTripleExportWithPathDist(baseComponentName, `./icons/${baseComponentName}`));
    
    // Add base name export: Regular variant aliased as base name (Search → SearchRegular)
    // This makes `import { Search } from 'stera-icons'` give the efficient Regular variant
    const regularVariant = iconData.variants.find(v => v.weight === 'regular' && !v.duotone);
    if (regularVariant) {
      baseNameExports.push(generateAliasedReExport(
        baseComponentName,                    // Target name: Search
        regularVariant.componentName,         // Source component: SearchRegular
        `./icons/${regularVariant.fileName}`  // Import path: ./icons/SearchRegular
      ));
      baseNameExportsDist.push(generateAliasedReExportDist(
        baseComponentName,
        regularVariant.componentName,
        `./icons/${regularVariant.componentName}`  // Use componentName for dist
      ));
    }
    
    // Add duotone shorthand: Regular duotone variant aliased as base name + Duotone (SearchDuotone → SearchRegularDuotone)
    // This makes `import { SearchDuotone } from 'stera-icons'` give the efficient Regular duotone variant
    const regularDuotoneVariant = iconData.variants.find(v => v.weight === 'regular' && v.duotone);
    if (regularDuotoneVariant) {
      baseNameExports.push(generateAliasedReExport(
        `${baseComponentName}Duotone`,              // Target name: SearchDuotone
        regularDuotoneVariant.componentName,        // Source component: SearchRegularDuotone
        `./icons/${regularDuotoneVariant.fileName}` // Import path: ./icons/SearchRegularDuotone
      ));
      baseNameExportsDist.push(generateAliasedReExportDist(
        `${baseComponentName}Duotone`,
        regularDuotoneVariant.componentName,
        `./icons/${regularDuotoneVariant.componentName}`  // Use componentName for dist
      ));
    }
  }
  
  // Finish wrapper progress line
  console.log(''); // Newline after progress indicator
  console.log(`  ✅ Generated ${wrapperExports.length} wrapper components`);
  
  // Generate main index file with efficient defaults
  // Base names (Search) → Regular variants (SearchRegular) for optimal bundle size
  const indexContent = `// Auto-generated file - do not edit manually
// Stera Icons - Modern React icon library with efficient defaults
// 
// Base icon names (Search, Home, etc.) resolve to Regular variants (~300 bytes each)
// For dynamic variant switching at runtime, use: import { Search } from 'stera-icons/dynamic-variants'

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
// BASE ICON NAMES → REGULAR VARIANTS (efficient defaults, ~300 bytes each)
// import { Search } from 'stera-icons' gives you SearchRegular
// All icons available with 3 aliases: Base, Icon suffix, Si prefix
// =============================================================================
${baseNameExports.join('\n')}

// =============================================================================
// DIRECT VARIANT EXPORTS (all variants with explicit names, ~300 bytes each)
// Use these when you need a specific weight or duotone variant
// Example: import { SearchBold, SearchFillDuotone } from 'stera-icons';
// =============================================================================
${directVariantExports.join('\n')}
`;
  
  writeFileSync(join(__dirname, '..', 'src', 'index.ts'), indexContent);
  
  // Generate dynamic-variants.ts for users who need runtime variant switching
  const dynamicVariantsContent = `// Auto-generated file - do not edit manually
// Dynamic wrapper components for runtime variant switching
// 
// Use these when you need to change icon weight/duotone at runtime via props.
// Note: Each wrapper includes all 6 variants (~1KB per icon vs ~300 bytes for direct imports)
// 
// Example:
//   import { Search } from 'stera-icons/dynamic-variants';
//   <Search weight="bold" duotone />

${wrapperExports.join('\n')}
`;
  
  writeFileSync(join(__dirname, '..', 'src', 'dynamic-variants.ts'), dynamicVariantsContent);
  
  // Generate dist barrel files (ESM with .js extensions)
  // These are re-export files that don't bundle icons inline
  console.log('\n📦 Generating dist barrel files...');
  const distEsmDir = join(distDir, 'esm');
  if (!existsSync(distEsmDir)) {
    mkdirSync(distEsmDir, { recursive: true });
  }
  
  // Generate dist/esm/stera-icons.js (main entry point with re-exports)
  const indexDistContent = `// Auto-generated - ESM barrel with re-exports
// Import paths use .js extension for ESM compatibility

// Export types
export * from './types.js';

// Export utility functions
export { mergeClasses, hasA11yProp, toKebabCase, toCamelCase, toPascalCase } from './utils.js';

// Base icon names (re-exports to individual icon files)
${baseNameExportsDist.join('\n')}

// Direct variant exports
${directVariantExportsDist.join('\n')}
`;
  writeFileSync(join(distEsmDir, 'stera-icons.js'), indexDistContent);
  
  // Generate dist/esm/dynamic-variants.js
  const dynamicVariantsDistContent = `// Auto-generated - ESM barrel with re-exports
${wrapperExportsDist.join('\n')}
`;
  writeFileSync(join(distEsmDir, 'dynamic-variants.js'), dynamicVariantsDistContent);
  
  console.log('  ✅ Generated dist barrel files');
  
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
    join(__dirname, '..', 'src', 'dynamicIconImports.ts'),
    dynamicImportsContent
  );
  
  // Generate dist version of dynamicIconImports.js
  const dynamicImportsEntriesDist = Array.from(dynamicImportsMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([key, componentName]) => `  '${key}': () => import('./icons/${componentName}.js')`)
    .join(',\n');
  
  const dynamicImportsDistContent = `// Auto-generated - ESM with .js extensions
export const dynamicIconImports = {
${dynamicImportsEntriesDist}
};

export const iconNames = Object.keys(dynamicIconImports);
export default dynamicIconImports;
`;
  writeFileSync(join(distEsmDir, 'dynamicIconImports.js'), dynamicImportsDistContent);
  
  // Generate dist version of dynamic.js
  const dynamicDistContent = `// Auto-generated - ESM entry point for dynamic icon loading
import { createDynamicIcon, getIconNames } from './DynamicIcon.js';
import { dynamicIconImports } from './dynamicIconImports.js';

export const DynamicIcon = createDynamicIcon(dynamicIconImports);
export { dynamicIconImports };
export const iconNames = getIconNames(dynamicIconImports);
`;
  writeFileSync(join(distEsmDir, 'dynamic.js'), dynamicDistContent);
  
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
  // ESM-only build - CJS removed for smaller package size
  console.log('\n📦 Preparing icon components for compilation...');
  const distEsmIconsDir = join(distDir, 'esm', 'icons');
  
  if (!existsSync(distEsmIconsDir)) {
    mkdirSync(distEsmIconsDir, { recursive: true });
  }
  
  const packageJsonPath = join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  
  const srcDir = join(__dirname, '..', 'src');
  
  // Collect all entry points for batched compilation
  const { wrapperEntryPoints, variantEntryPoints, wrapperComponents, variantComponents } = 
    collectEntryPoints(iconsByBaseName, iconsDir);
  
  const totalComponents = wrapperEntryPoints.length + variantEntryPoints.length;
  console.log(`  📋 Found ${wrapperEntryPoints.length} wrapper components`);
  console.log(`  📋 Found ${variantEntryPoints.length} variant components`);
  console.log(`  📋 Total: ${totalComponents} components to compile`);
  
  // Combine all entry points for a single batched build
  const allEntryPoints = [...wrapperEntryPoints, ...variantEntryPoints];
  
  // Compile icons to ESM only
  await compileIcons({
    entryPoints: allEntryPoints,
    esmOutDir: distEsmIconsDir,
    srcDir
  });
  
  // Generate TypeScript declarations (in ESM directory)
  generateWrapperDeclarations(wrapperComponents, distEsmIconsDir);
  generateVariantDeclarations(variantComponents, distEsmIconsDir);
  
  console.log(`  ✅ Generated ${totalComponents} TypeScript definitions`)
  
  // Update package.json with wildcard exports (ESM-only)
  // Preserve existing exports (./base, ./dynamic, etc.) and only update ./icons/*
  const existingExports = packageJson.exports?.['.'] || {
    types: './dist/esm/stera-icons.d.ts',
    import: './dist/esm/stera-icons.js',
    default: './dist/esm/stera-icons.js'
  };
  
  packageJson.exports = {
    ...packageJson.exports, // Preserve all existing exports
    '.': existingExports,
    './icons/*': {
      types: './dist/esm/icons/*.d.ts',
      import: './dist/esm/icons/*.js',
      default: './dist/esm/icons/*.js'
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
  console.log(`  🔗 Generated ${wrapperExports.length} dynamic wrapper components (in dynamic-variants.ts)`);
  console.log(`  📦 Using wildcard exports (./icons/*) for ${totalComponents} components`);
  console.log(`  🆕 New icons: ${newIcons}`);
  console.log(`  🔄 Modified icons: ${modifiedIcons}`);
  console.log(`  ✅ Unchanged icons: ${unchangedIcons}`);
  console.log(`  📁 Components written to: ${iconsDir}`);
  console.log(`  📁 ESM bundles written to: ${distEsmIconsDir}`);
  console.log(`  📊 Metadata written to: ${join(distDir, 'icons.meta.json')}`);
  console.log(`\n🎯 Import patterns (efficient defaults):`);
  console.log(`  • Base names: import { Search } from 'stera-icons' → SearchRegular (~300 bytes)`);
  console.log(`  • Explicit variants: import { SearchBold } from 'stera-icons' (~300 bytes)`);
  console.log(`  • Dynamic variants: import { Search } from 'stera-icons/dynamic-variants' (~1KB)`);
  console.log(`  • Subpath imports: import { Search } from 'stera-icons/icons/Search'`);
}

// Main execution
const iconsExportPath = process.argv[2];
if (!iconsExportPath) {
  console.error('❌ Please provide path to icons-export.json');
  console.error('Usage: node scripts/build-icons.js <path-to-icons-export.json>');
  process.exit(1);
}

buildIcons(iconsExportPath).catch(console.error);
