#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
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
  
  // Ensure directories exist
  if (!existsSync(iconsDir)) {
    mkdirSync(iconsDir, { recursive: true });
  }
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
  }
  
  const nameMapping = {};
  const takenSlugs = new Set();
  const metadata = [];
  const exports = [];
  
  // Process each icon
  for (const icon of iconsExport.icons) {
    const originalName = icon.name;
    const normalizedSlug = normalizeSlug(originalName);
    const uniqueSlug = ensureUnique(normalizedSlug, takenSlugs);
    
    // Store the mapping
    nameMapping[originalName] = uniqueSlug;
    
    // Process each variant (Bold, Fill, Regular)
    for (const variantData of icon.variants) {
      if (variantData.variant === 'Stroke') continue; // Skip Stroke variants for v1
      
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
