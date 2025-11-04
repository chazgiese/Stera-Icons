#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { optimize } from 'svgo';
import { transform } from '@svgr/core';
import { build } from 'esbuild';
import { 
  normalizeSlug, 
  ensureUnique, 
  getComponentName, 
  getFileName, 
  parseTags,
  parseIconName,
  mapVariantName,
  validateVariantData,
  isValidVariant
} from './helpers.js';
import { HashVersioning } from './hash-versioning.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load SVGO config
const svgoConfig = (await import('./svgo.config.js')).default;

// Load SVGR template
const svgrTemplate = (await import('./svgr-template.js')).default;

async function buildIcons(iconsExportPath) {
  console.log('🚀 Building Stera Icons with wrapper components...');
  
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
  const exports = [];
  const wrapperExports = [];
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
  
  // Create a map of existing metadata by component name for quick lookup
  const existingMetadataMap = new Map();
  existingMetadata.forEach(item => {
    existingMetadataMap.set(item.componentName, item);
  });
  
  
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
      continue; // Skip this icon to avoid further conflicts
    }
    
    const uniqueSlug = ensureUnique(normalizedSlug, takenSlugs);
    
    
    // Track variants for this icon
    const iconVariants = [];
    
    // Generate the wrapper component name (user-facing API)
    const baseComponentName = uniqueSlug.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('') + 'Icon';
    
    // Process each variant (Bold, Fill, Filltone, Linetone, Regular)
    for (const variantData of icon.variants) {
      // Validate variant data structure
      if (!validateVariantData(variantData)) {
        console.error(`  ❌ Invalid variant data for ${originalName}: ${JSON.stringify(variantData)}`);
        continue; // Skip this variant
      }
      
      // Map export variant name to internal variant name
      const variant = mapVariantName(variantData.variant);
      
      // Validate that this is a recognized variant type
      if (!isValidVariant(variant)) {
        console.error(`  ❌ Unknown variant type "${variantData.variant}" for ${originalName}`);
        continue; // Skip this variant
      }
      const componentName = getComponentName(uniqueSlug, variant);
      const fileName = getFileName(uniqueSlug, variant);
      
      console.log(`  📝 Processing ${componentName} (${variant})`);
      
      // Optimize SVG with SVGO
      let optimizedSvg;
      try {
        optimizedSvg = optimize(variantData.svg, svgoConfig).data;
      } catch (error) {
        console.error(`  ❌ Failed to optimize SVG for ${componentName} (${variant}): ${error.message}`);
        console.error(`  ⚠️  Skipping this variant due to malformed SVG`);
        continue; // Skip this variant and continue with the next one
      }
      
      // Generate React component with SVGR
      const componentCode = await transform(
        optimizedSvg,
        {
          template: svgrTemplate,
          typescript: true,
          plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          svgProps: {
            width: '{size}',
            height: '{size}',
            fill: '{color}',
            className: '{className}',
            'aria-label': '{ariaLabel}',
            'aria-hidden': '{ariaHidden}',
            ref: '{ref}'
          }
        },
        { componentName }
      );
      
      // Write component file
      const componentPath = join(iconsDir, `${fileName}.tsx`);
      writeFileSync(componentPath, componentCode);
      
      // Individual variant components are no longer exported - only wrapper components are used
      
      // Track variant for wrapper generation
      iconVariants.push({ variant, componentName, fileName });
      
      
      // Use hash-based versioning to determine icon status
      const currentSvgHash = variantData.hash; // Use SHA-256 hash from export
      const changeAnalysis = hashVersioning.analyzeIconChange(uniqueSlug, variant, currentSvgHash, existingMetadata);
      
      const { versionAdded, dateAdded, lastModified, versionLastModified } = changeAnalysis;
      
      // Log the status
      switch (changeAnalysis.status) {
        case 'new':
          console.log(`  🆕 New icon: ${baseComponentName} ${variant} (v${versionAdded})`);
          break;
        case 'modified':
          console.log(`  🔄 Modified icon: ${baseComponentName} ${variant} (last modified: v${currentVersion})`);
          break;
        case 'unchanged':
          console.log(`  ✅ Unchanged icon: ${baseComponentName} ${variant}`);
          break;
      }
      
      // Add to metadata with the wrapper component name (user-facing API)
      metadata.push({
        name: parsedIconName,
        variant,
        tags: parseTags(icon.tags),
        componentName: baseComponentName,
        fileName: `${fileName}.tsx`,
        versionAdded,
        dateAdded,
        lastModified,
        versionLastModified,
        svgHash: variantData.hash // Use SHA-256 hash from export
      });
    }
    
    // Store icon variants for wrapper generation
    iconsByBaseName.set(uniqueSlug, {
      baseName: uniqueSlug,
      variants: iconVariants,
      tags: parseTags(icon.tags)
    });
  }
  
  // Generate wrapper components
  console.log('🔗 Generating wrapper components...');
  for (const [baseName, iconData] of iconsByBaseName) {
    const baseComponentName = baseName.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('') + 'Icon';
    
    console.log(`  📦 Creating wrapper for ${baseComponentName}`);
    
    // Generate wrapper component code
    const wrapperCode = `import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ${baseComponentName} as Regular${baseComponentName} } from './${baseName}';
import { ${baseComponentName}Bold } from './${baseName}-bold';
import { ${baseComponentName}Filled } from './${baseName}-filled';
import { ${baseComponentName}Filltone } from './${baseName}-filltone';
import { ${baseComponentName}Linetone } from './${baseName}-linetone';

export interface ${baseComponentName}Props extends IconProps {
  variant?: IconVariant;
}

const ${baseComponentName} = memo(forwardRef<SVGSVGElement, ${baseComponentName}Props>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <${baseComponentName}Filled ref={ref} {...props} />;
    case 'bold':
      return <${baseComponentName}Bold ref={ref} {...props} />;
    case 'filltone':
      return <${baseComponentName}Filltone ref={ref} {...props} />;
    case 'linetone':
      return <${baseComponentName}Linetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <Regular${baseComponentName} ref={ref} {...props} />;
  }
}));

${baseComponentName}.displayName = '${baseComponentName}';

export { ${baseComponentName} };
`;
    
    // Write wrapper component file
    const wrapperPath = join(iconsDir, `${baseName}-wrapper.tsx`);
    writeFileSync(wrapperPath, wrapperCode);
    
    // Add to wrapper exports
    wrapperExports.push(`export { ${baseComponentName} } from './icons/${baseName}-wrapper';`);
  }
  
  // Generate main index file
  const indexContent = `// Auto-generated file - do not edit manually
import type { IconProps } from './types';

// Wrapper components with variant props
${wrapperExports.join('\n')}

export type { IconProps } from './types';
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
    console.error(`   Consider renaming conflicting icons to have distinct names.`);
    process.exit(1);
  }
  
  // Compile individual icon wrappers for subpath exports
  console.log('\n📦 Compiling individual icon components for subpath exports...');
  const distIconsDir = join(distDir, 'icons');
  if (!existsSync(distIconsDir)) {
    mkdirSync(distIconsDir, { recursive: true });
  }
  
  // Compile each wrapper component individually
  const packageJsonPath = join(__dirname, '..', 'packages', 'react', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  
  const subpathExports = {};
  
  for (const [baseName] of iconsByBaseName) {
    const componentName = baseName.split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : '').join('') + 'Icon';
    const wrapperPath = join(iconsDir, `${baseName}-wrapper.tsx`);
    
    if (!existsSync(wrapperPath)) {
      console.warn(`  ⚠️  Wrapper not found: ${wrapperPath}`);
      continue;
    }
    
    // Compile ESM version
    try {
      const srcDir = join(__dirname, '..', 'packages', 'react', 'src');
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
        banner: {
          js: '"use strict";',
        },
      });
      
      // Generate TypeScript definitions
      const typesContent = `import type { IconProps, IconVariant } from '../index';
import type { MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface ${componentName}Props extends IconProps {
  variant?: IconVariant;
}

export declare const ${componentName}: MemoExoticComponent<ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>>;
`;
      writeFileSync(join(distIconsDir, `${componentName}.d.ts`), typesContent);
      
      // Add to exports
      subpathExports[`./${componentName}`] = {
        types: `./dist/icons/${componentName}.d.ts`,
        import: `./dist/icons/${componentName}.mjs`,
        require: `./dist/icons/${componentName}.cjs`
      };
    } catch (error) {
      console.error(`  ❌ Failed to compile ${componentName}: ${error.message}`);
    }
  }
  
  // Update package.json with subpath exports
  if (!packageJson.exports) {
    packageJson.exports = {};
  }
  
  // Keep existing main exports
  const existingExports = packageJson.exports['.'] || {
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
    const existing = existingMetadataMap.get(item.componentName);
    return existing && existing.svgHash && item.svgHash !== existing.svgHash;
  }).length;
  const unchangedIcons = metadata.length - newIcons - modifiedIcons;
  
  console.log(`\n📊 Build Summary:`);
  console.log(`  ✅ Generated ${metadata.length} individual icon components (internal use only)`);
  console.log(`  🔗 Generated ${wrapperExports.length} wrapper components (public API)`);
  console.log(`  📦 Compiled ${Object.keys(subpathExports).length} individual icon bundles for subpath exports`);
  console.log(`  🆕 New icons: ${newIcons}`);
  console.log(`  🔄 Modified icons: ${modifiedIcons}`);
  console.log(`  ✅ Unchanged icons: ${unchangedIcons}`);
  console.log(`  📁 Components written to: ${iconsDir}`);
  console.log(`  📁 Individual bundles written to: ${distIconsDir}`);
  console.log(`  📊 Metadata written to: ${join(distDir, 'icons.meta.json')}`);
  console.log(`  🎯 Public API: Wrapper components with variant props are exported`);
  console.log(`  🎯 Per-icon imports: Available via 'stera-icons/IconName' subpath exports`);
}

// Main execution
const iconsExportPath = process.argv[2];
if (!iconsExportPath) {
  console.error('❌ Please provide path to icons-export.json');
  console.error('Usage: node scripts/build-icons.js <path-to-icons-export.json>');
  process.exit(1);
}

buildIcons(iconsExportPath).catch(console.error);
