#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { optimize } from 'svgo';
import { transform } from '@svgr/core';
import { 
  normalizeSlug, 
  ensureUnique, 
  getComponentName, 
  getFileName, 
  parseTags 
} from './helpers.js';
import { VersionUtils } from './version-utils.js';

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
  
  // Get version information using the version utils
  const versionUtils = new VersionUtils(join(__dirname, '..'));
  const versionInfo = versionUtils.getVersionForNewIcons();
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
    const normalizedSlug = normalizeSlug(originalName);
    
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
    
    // Process each variant (Bold, Fill, Regular)
    for (const variantData of icon.variants) {
      
      const variant = variantData.variant === 'Fill' ? 'filled' : 
                     variantData.variant === 'Bold' ? 'bold' : 'regular';
      const componentName = getComponentName(uniqueSlug, variant);
      const fileName = getFileName(uniqueSlug, variant);
      
      console.log(`  📝 Processing ${componentName} (${variant})`);
      
      // Optimize SVG with SVGO
      const optimizedSvg = optimize(variantData.svg, svgoConfig).data;
      
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
      
      // Add to exports with variant suffix to avoid conflicts with wrapper components
      const individualComponentName = variant === 'regular' ? `${componentName}Regular` : componentName;
      exports.push(`export { ${componentName} as ${individualComponentName} } from './icons/${fileName}';`);
      
      // Track variant for wrapper generation
      iconVariants.push({ variant, componentName, fileName });
      
      
      // Check if this is a new icon or an existing one
      const existingItem = existingMetadata.find(item => item.name === uniqueSlug && item.variant === variant);
      const isNewIcon = !existingItem;
      
      // Determine version and date information
      let versionAdded, dateAdded, lastModified;
      
      if (isNewIcon) {
        // New icon - use current version and date
        versionAdded = currentVersion;
        dateAdded = currentDate;
        lastModified = currentDate;
        console.log(`  🆕 New icon: ${baseComponentName} ${variant} (v${currentVersion})`);
      } else {
        // Existing icon - preserve original version/date, update last modified
        versionAdded = existingItem.versionAdded || currentVersion;
        dateAdded = existingItem.dateAdded || currentDate;
        lastModified = currentDate;
        
        // Check if the icon was actually modified (compare SVG content)
        const currentSvgHash = createHash('md5').update(optimizedSvg).digest('hex');
        const existingSvgHash = existingItem.svgHash;
        
        if (existingSvgHash && currentSvgHash !== existingSvgHash) {
          console.log(`  🔄 Modified icon: ${baseComponentName} ${variant} (last modified: v${currentVersion})`);
        } else {
          console.log(`  ✅ Unchanged icon: ${baseComponentName} ${variant}`);
        }
      }
      
      // Add to metadata with the wrapper component name (user-facing API)
      metadata.push({
        name: uniqueSlug,
        variant,
        tags: parseTags(icon.tags),
        componentName: baseComponentName,
        fileName: `${fileName}.tsx`,
        versionAdded,
        dateAdded,
        lastModified,
        svgHash: createHash('md5').update(optimizedSvg).digest('hex')
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
import type { IconProps } from '../types';
import { ${baseComponentName} as ${baseComponentName}Regular } from './${baseName}';
import { ${baseComponentName}Bold } from './${baseName}-bold';
import { ${baseComponentName}Filled } from './${baseName}-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <${baseComponentName}Regular ref={ref} {...props} />;
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

// Primary API: Wrapper components with variant props
${wrapperExports.join('\n')}

// Secondary API: Individual variant components (for advanced use cases)
${exports.join('\n')}

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
  
  // Calculate summary statistics
  const newIcons = metadata.filter(item => item.versionAdded === currentVersion).length;
  const modifiedIcons = metadata.filter(item => {
    const existing = existingMetadataMap.get(item.componentName);
    return existing && existing.svgHash && item.svgHash !== existing.svgHash;
  }).length;
  const unchangedIcons = metadata.length - newIcons - modifiedIcons;
  
  console.log(`\n📊 Build Summary:`);
  console.log(`  ✅ Generated ${metadata.length} individual icon components`);
  console.log(`  🔗 Generated ${wrapperExports.length} wrapper components`);
  console.log(`  🆕 New icons: ${newIcons}`);
  console.log(`  🔄 Modified icons: ${modifiedIcons}`);
  console.log(`  ✅ Unchanged icons: ${unchangedIcons}`);
  console.log(`  📁 Components written to: ${iconsDir}`);
  console.log(`  📊 Metadata written to: ${join(distDir, 'icons.meta.json')}`);
}

// Main execution
const iconsExportPath = process.argv[2];
if (!iconsExportPath) {
  console.error('❌ Please provide path to icons-export.json');
  console.error('Usage: node scripts/build-icons.js <path-to-icons-export.json>');
  process.exit(1);
}

buildIcons(iconsExportPath).catch(console.error);
