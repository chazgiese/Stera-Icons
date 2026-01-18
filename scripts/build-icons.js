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
  isValidWeight
} from './helpers.js';
import { HashVersioning } from './hash-versioning.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load SVGO config
const svgoConfig = (await import('./svgo.config.js')).default;

/**
 * Parse optimized SVG and extract path elements as JSX
 */
function extractPathsFromSvg(svgString) {
  // Extract all path elements from the SVG
  const pathRegex = /<path\s+([^>]*)\/>/g;
  const paths = [];
  let match;
  
  while ((match = pathRegex.exec(svgString)) !== null) {
    const attrsString = match[1];
    const attrs = {};
    
    // Parse attributes
    const attrRegex = /(\w+(?:-\w+)?)=["']([^"']*)["']/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attrsString)) !== null) {
      const [, name, value] = attrMatch;
      // Convert kebab-case to camelCase for JSX
      const jsxName = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      attrs[jsxName] = value;
    }
    
    paths.push(attrs);
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
  
  // Track icons by base name for wrapper generation
  const iconsByBaseName = new Map();
  
  // Process each icon
  for (const icon of iconsExport.icons) {
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
      
      const variantLabel = duotone ? `${weight}-duotone` : weight;
      console.log(`  📝 Processing ${componentName} (${variantLabel})`);
      
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
      
      // Generate thin variant component using IconBase
      const componentCode = `import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ${componentName}Props = Omit<IconBaseProps, 'children'>;

const ${componentName} = memo(
  forwardRef<SVGSVGElement, ${componentName}Props>((props, ref) => (
    <IconBase ref={ref} {...props}>
      ${pathJsx}
    </IconBase>
  ))
);

${componentName}.displayName = '${componentName}';

export { ${componentName} };
export type { ${componentName}Props };
`;
      
      // Write component file
      const componentPath = join(iconsDir, `${fileName}.tsx`);
      writeFileSync(componentPath, componentCode);
      
      // Track variant for wrapper generation
      iconVariants.push({ weight, duotone, componentName, fileName });
      
      // Add to direct variant exports
      directVariantExports.push(`export { ${componentName} } from './icons/${fileName}';`);
      
      // Use hash-based versioning to determine icon status
      const existingItem = existingMetadata.find(item => 
        item.name === parsedIconName && 
        item.weight === weight && 
        item.duotone === duotone &&
        item.componentName === baseComponentName
      );
      
      const currentSvgHash = variantData.hash;
      const versionForIcons = hashVersioning.getVersionForIcons().version;
      
      let changeAnalysis;
      if (!existingItem) {
        changeAnalysis = {
          status: 'new',
          versionAdded: versionForIcons,
          dateAdded: new Date().toISOString(),
          lastModified: new Date().toISOString(),
          versionLastModified: versionForIcons
        };
      } else {
        const isModified = existingItem.svgHash !== currentSvgHash;
        if (isModified) {
          changeAnalysis = {
            status: 'modified',
            versionAdded: existingItem.versionAdded,
            dateAdded: existingItem.dateAdded,
            lastModified: new Date().toISOString(),
            versionLastModified: versionForIcons
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
      
      // Log the status
      switch (changeAnalysis.status) {
        case 'new':
          console.log(`  🆕 New icon: ${componentName} (v${versionAdded})`);
          break;
        case 'modified':
          console.log(`  🔄 Modified icon: ${componentName} (last modified: v${versionForIcons})`);
          break;
        case 'unchanged':
          console.log(`  ✅ Unchanged icon: ${componentName}`);
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
  
  // Generate wrapper components (for backwards compatibility with dynamic weight prop)
  console.log('🔗 Generating wrapper components...');
  for (const [baseName, iconData] of iconsByBaseName) {
    const baseComponentName = baseName.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('');
    
    console.log(`  📦 Creating wrapper for ${baseComponentName}`);
    
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
    
    // Generate wrapper component code
    const wrapperCode = `import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
${imports.join('\n')}

export interface ${baseComponentName}Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ${baseComponentName} with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ${regularVariantName} } from 'stera-icons/${regularVariantName}';
 */
const ${baseComponentName} = memo(forwardRef<SVGSVGElement, ${baseComponentName}Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  ${selectionLogic.join('\n  ')}
}));

${baseComponentName}.displayName = '${baseComponentName}';

export { ${baseComponentName} };
`;
    
    // Write wrapper component file (PascalCase filename matching component name)
    const wrapperPath = join(iconsDir, `${baseComponentName}.tsx`);
    writeFileSync(wrapperPath, wrapperCode);
    
    // Add to wrapper exports
    wrapperExports.push(`export { ${baseComponentName} } from './icons/${baseComponentName}';`);
  }
  
  // Generate main index file with both wrapper and direct variant exports
  const indexContent = `// Auto-generated file - do not edit manually
// Stera Icons - Optimized with IconBase architecture

// Re-export IconBase for advanced usage
export { IconBase } from './IconBase';
export type { IconBaseProps } from './IconBase';

// Export types
export type { IconProps, IconWeight, PathData, PathElement, IconPathData } from './types';

// =============================================================================
// WRAPPER COMPONENTS (backwards compatible, includes all 6 variants per icon)
// Use these when you need dynamic weight/duotone props
// =============================================================================
${wrapperExports.join('\n')}

// =============================================================================
// DIRECT VARIANT EXPORTS (optimal bundle size, ~300 bytes each)
// Use these for maximum tree-shaking - import only the exact variant you need
// Example: import { SearchBold } from 'stera-icons';
// =============================================================================
${directVariantExports.join('\n')}
`;
  
  writeFileSync(join(__dirname, '..', 'packages', 'react', 'src', 'index.ts'), indexContent);
  
  // Generate metadata JSON
  writeFileSync(
    join(distDir, 'icons.meta.json'), 
    JSON.stringify(metadata, null, 2)
  );
  
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
  
  // Compile individual icon components for subpath exports
  console.log('\n📦 Compiling individual icon components for subpath exports...');
  const distIconsDir = join(distDir, 'icons');
  if (!existsSync(distIconsDir)) {
    mkdirSync(distIconsDir, { recursive: true });
  }
  
  const packageJsonPath = join(__dirname, '..', 'packages', 'react', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  
  const subpathExports = {};
  const srcDir = join(__dirname, '..', 'packages', 'react', 'src');
  
  // Compile wrapper components
  for (const [baseName] of iconsByBaseName) {
    const componentName = baseName.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('');
    const wrapperPath = join(iconsDir, `${componentName}.tsx`);
    
    if (!existsSync(wrapperPath)) {
      console.warn(`  ⚠️  Wrapper not found: ${wrapperPath}`);
      continue;
    }
    
    try {
      // Compile ESM version
      await build({
        entryPoints: [wrapperPath],
        bundle: true,
        format: 'esm',
        outfile: join(distIconsDir, `${componentName}.mjs`),
        external: ['react'],
        minify: true,
        treeShaking: true,
        platform: 'neutral',
        target: 'es2020',
        jsx: 'automatic',
        resolveExtensions: ['.tsx', '.ts', '.jsx', '.js'],
        absWorkingDir: srcDir,
      });
      
      // Compile CJS version
      await build({
        entryPoints: [wrapperPath],
        bundle: true,
        format: 'cjs',
        outfile: join(distIconsDir, `${componentName}.cjs`),
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
      
      // Generate TypeScript definitions
      const typesContent = `import type { IconProps } from '../index';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface ${componentName}Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

export declare const ${componentName}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
`;
      writeFileSync(join(distIconsDir, `${componentName}.d.ts`), typesContent);
      
      subpathExports[`./${componentName}`] = {
        types: `./dist/icons/${componentName}.d.ts`,
        import: `./dist/icons/${componentName}.mjs`,
        require: `./dist/icons/${componentName}.cjs`
      };
    } catch (error) {
      console.error(`  ❌ Failed to compile wrapper ${componentName}: ${error.message}`);
    }
  }
  
  // Compile direct variant components
  console.log('\n📦 Compiling direct variant components for subpath exports...');
  for (const [baseName, iconData] of iconsByBaseName) {
    for (const variantInfo of iconData.variants) {
      const { componentName, fileName } = variantInfo;
      const variantPath = join(iconsDir, `${fileName}.tsx`);
      
      if (!existsSync(variantPath)) {
        continue;
      }
      
      try {
        // Compile ESM version
        await build({
          entryPoints: [variantPath],
          bundle: true,
          format: 'esm',
          outfile: join(distIconsDir, `${componentName}.mjs`),
          external: ['react'],
          minify: true,
          treeShaking: true,
          platform: 'neutral',
          target: 'es2020',
          jsx: 'automatic',
          resolveExtensions: ['.tsx', '.ts', '.jsx', '.js'],
          absWorkingDir: srcDir,
        });
        
        // Compile CJS version
        await build({
          entryPoints: [variantPath],
          bundle: true,
          format: 'cjs',
          outfile: join(distIconsDir, `${componentName}.cjs`),
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
        
        // Generate TypeScript definitions
        const variantTypesContent = `import type { IconBaseProps } from '../IconBase';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export type ${componentName}Props = Omit<IconBaseProps, 'children'>;

export declare const ${componentName}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
`;
        writeFileSync(join(distIconsDir, `${componentName}.d.ts`), variantTypesContent);
        
        subpathExports[`./${componentName}`] = {
          types: `./dist/icons/${componentName}.d.ts`,
          import: `./dist/icons/${componentName}.mjs`,
          require: `./dist/icons/${componentName}.cjs`
        };
      } catch (error) {
        console.error(`  ❌ Failed to compile variant ${componentName}: ${error.message}`);
      }
    }
  }
  
  // Update package.json with subpath exports
  const existingExports = packageJson.exports?.['.'] || {
    types: './dist/index.d.ts',
    import: './dist/index.mjs',
    require: './dist/index.cjs'
  };
  
  packageJson.exports = {
    '.': existingExports,
    './package.json': './package.json',
    ...subpathExports
  };
  
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`  ✅ Generated ${Object.keys(subpathExports).length} subpath exports`);
  
  // Calculate summary statistics
  const newIcons = metadata.filter(item => item.versionAdded === currentVersion).length;
  const modifiedIcons = metadata.filter(item => {
    const existing = existingMetadata.find(e => 
      e.name === item.name && 
      e.weight === item.weight && 
      e.duotone === item.duotone &&
      e.componentName === item.componentName
    );
    return existing && existing.svgHash && item.svgHash !== existing.svgHash;
  }).length;
  const unchangedIcons = metadata.length - newIcons - modifiedIcons;
  
  console.log(`\n📊 Build Summary:`);
  console.log(`  ✅ Generated ${metadata.length} direct variant components (IconBase-based)`);
  console.log(`  🔗 Generated ${wrapperExports.length} wrapper components (backwards compatible)`);
  console.log(`  📦 Compiled ${Object.keys(subpathExports).length} individual bundles for subpath exports`);
  console.log(`  🆕 New icons: ${newIcons}`);
  console.log(`  🔄 Modified icons: ${modifiedIcons}`);
  console.log(`  ✅ Unchanged icons: ${unchangedIcons}`);
  console.log(`  📁 Components written to: ${iconsDir}`);
  console.log(`  📁 Individual bundles written to: ${distIconsDir}`);
  console.log(`  📊 Metadata written to: ${join(distDir, 'icons.meta.json')}`);
  console.log(`\n🎯 Import patterns:`);
  console.log(`  • Direct variant (smallest): import { SearchBold } from 'stera-icons/SearchBold';`);
  console.log(`  • Wrapper (dynamic props): import { Search } from 'stera-icons/Search';`);
  console.log(`  • From index: import { Search, SearchBold } from 'stera-icons';`);
}

// Main execution
const iconsExportPath = process.argv[2];
if (!iconsExportPath) {
  console.error('❌ Please provide path to icons-export.json');
  console.error('Usage: node scripts/build-icons.js <path-to-icons-export.json>');
  process.exit(1);
}

buildIcons(iconsExportPath).catch(console.error);
