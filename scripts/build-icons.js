#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';
import { transform } from '@svgr/core';
import { 
  normalizeSlug, 
  ensureUnique, 
  getComponentName, 
  getFileName, 
  parseTags 
} from './helpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load SVGO config
const svgoConfig = (await import('./svgo.config.js')).default;

// Load SVGR template
const svgrTemplate = (await import('./svgr-template.js')).default;

async function buildIcons(iconsExportPath) {
  console.log('🚀 Building Stera Icons...');
  
  // Read the icons export JSON
  const iconsExport = JSON.parse(readFileSync(iconsExportPath, 'utf8'));
  console.log(`📦 Processing ${iconsExport.totalIcons} icons from ${iconsExport.exportedAt}`);
  
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
  
  const nameMapping = {};
  const takenSlugs = new Set();
  const metadata = [];
  const exports = [];
  
  // Load previous name mapping to maintain backward compatibility
  const previousNameMappingPath = join(distDir, 'name_map.json');
  let previousNameMapping = {};
  if (existsSync(previousNameMappingPath)) {
    try {
      previousNameMapping = JSON.parse(readFileSync(previousNameMappingPath, 'utf8'));
      console.log('📋 Loaded previous name mapping for backward compatibility');
    } catch (error) {
      console.log('⚠️  Could not load previous name mapping, starting fresh');
    }
  }
  
  // Add known backward compatibility mappings for renamed icons
  const knownRenames = {
    'checkmark': 'check'  // checkmark was renamed to check
  };
  
  // Merge known renames into previous mapping
  for (const [oldName, newName] of Object.entries(knownRenames)) {
    if (!previousNameMapping[oldName]) {
      previousNameMapping[oldName] = oldName; // Assume it was previously named as itself
    }
  }
  
  // Process each icon
  for (const icon of iconsExport.icons) {
    const originalName = icon.name;
    const normalizedSlug = normalizeSlug(originalName);
    const uniqueSlug = ensureUnique(normalizedSlug, takenSlugs);
    
    // Store the mapping
    nameMapping[originalName] = uniqueSlug;
    
    // Check if this icon was renamed and add backward compatibility mapping
    const previousSlug = previousNameMapping[originalName];
    if (previousSlug && previousSlug !== uniqueSlug) {
      console.log(`🔄 Icon renamed: ${originalName} (was ${previousSlug}, now ${uniqueSlug})`);
      // Keep the old mapping for backward compatibility
      nameMapping[previousSlug] = uniqueSlug;
    }
    
    // Check for known renames (old name -> current name)
    for (const [oldName, newName] of Object.entries(knownRenames)) {
      if (originalName === newName) {
        console.log(`🔄 Known rename detected: ${oldName} -> ${originalName}`);
        // Add backward compatibility mapping
        const oldSlug = normalizeSlug(oldName);
        nameMapping[oldSlug] = uniqueSlug;
      }
    }
    
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
      
      // Add to exports
      exports.push(`export { ${componentName} } from './icons/${fileName}';`);
      
      // Add backward compatibility exports for renamed icons
      const previousSlug = previousNameMapping[originalName];
      if (previousSlug && previousSlug !== uniqueSlug) {
        const oldComponentName = getComponentName(previousSlug, variant);
        const oldFileName = getFileName(previousSlug, variant);
        exports.push(`export { ${componentName} as ${oldComponentName} } from './icons/${fileName}';`);
        console.log(`  📦 Added backward compatibility export: ${oldComponentName} -> ${componentName}`);
      }
      
      // Add backward compatibility exports for known renames
      for (const [oldName, newName] of Object.entries(knownRenames)) {
        if (originalName === newName) {
          const oldSlug = normalizeSlug(oldName);
          const oldComponentName = getComponentName(oldSlug, variant);
          exports.push(`export { ${componentName} as ${oldComponentName} } from './icons/${fileName}';`);
          console.log(`  📦 Added known rename export: ${oldComponentName} -> ${componentName}`);
        }
      }
      
      // Add to metadata
      metadata.push({
        name: uniqueSlug,
        variant,
        tags: parseTags(icon.tags),
        componentName,
        fileName: `${fileName}.tsx`
      });
    }
  }
  
  // Generate main index file
  const indexContent = `// Auto-generated file - do not edit manually
import type { IconProps } from './types';

${exports.join('\n')}

export type { IconProps } from './types';
`;
  
  writeFileSync(join(__dirname, '..', 'packages', 'react', 'src', 'index.ts'), indexContent);
  
  // Generate metadata JSON
  writeFileSync(
    join(distDir, 'icons.meta.json'), 
    JSON.stringify(metadata, null, 2)
  );
  
  // Generate name mapping JSON
  writeFileSync(
    join(distDir, 'name_map.json'), 
    JSON.stringify(nameMapping, null, 2)
  );
  
  console.log(`✅ Generated ${metadata.length} icon components`);
  console.log(`📁 Components written to: ${iconsDir}`);
  console.log(`📊 Metadata written to: ${join(distDir, 'icons.meta.json')}`);
  console.log(`🗺️  Name mapping written to: ${join(distDir, 'name_map.json')}`);
}

// Main execution
const iconsExportPath = process.argv[2];
if (!iconsExportPath) {
  console.error('❌ Please provide path to icons-export.json');
  console.error('Usage: node scripts/build-icons.js <path-to-icons-export.json>');
  process.exit(1);
}

buildIcons(iconsExportPath).catch(console.error);
