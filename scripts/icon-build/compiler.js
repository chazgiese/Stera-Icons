/**
 * Compilation Utilities
 * 
 * Functions for compiling icon components with esbuild.
 */

import { build } from 'esbuild';
import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { ESBUILD_ESM_CONFIG, ESBUILD_CJS_CONFIG, TYPE_DEFS } from './config.js';

/**
 * Compile icon components to ESM and CJS formats
 * @param {Object} params - Compilation parameters
 * @param {Array<Object>} params.entryPoints - Array of {in, out} objects for esbuild
 * @param {string} params.outDir - Output directory path
 * @param {string} params.srcDir - Source directory path (for absWorkingDir)
 * @returns {Promise<{esmTime: number, cjsTime: number}>} - Compilation times
 */
export async function compileIcons({ entryPoints, outDir, srcDir }) {
  // Batch compile ESM versions
  console.log('⚡ Compiling ESM bundles (batched)...');
  const esmStartTime = Date.now();
  try {
    await build({
      ...ESBUILD_ESM_CONFIG,
      entryPoints,
      outdir: outDir,
      absWorkingDir: srcDir,
    });
    const esmTime = Date.now() - esmStartTime;
    console.log(`  ✅ ESM compilation complete (${esmTime}ms)`);
    
    // Batch compile CJS versions
    console.log('⚡ Compiling CJS bundles (batched)...');
    const cjsStartTime = Date.now();
    await build({
      ...ESBUILD_CJS_CONFIG,
      entryPoints,
      outdir: outDir,
      absWorkingDir: srcDir,
    });
    const cjsTime = Date.now() - cjsStartTime;
    console.log(`  ✅ CJS compilation complete (${cjsTime}ms)`);
    
    return { esmTime, cjsTime };
  } catch (error) {
    console.error(`  ❌ Compilation failed: ${error.message}`);
    throw error;
  }
}

/**
 * Generate TypeScript declarations for wrapper components
 * @param {Array<string>} componentNames - Array of component names
 * @param {string} outDir - Output directory path
 */
export function generateWrapperDeclarations(componentNames, outDir) {
  console.log('📝 Generating TypeScript definitions...');
  
  for (const componentName of componentNames) {
    const typesContent = TYPE_DEFS.wrapper(componentName);
    writeFileSync(join(outDir, `${componentName}.d.ts`), typesContent);
  }
}

/**
 * Generate TypeScript declarations for variant components
 * @param {Array<string>} componentNames - Array of component names
 * @param {string} outDir - Output directory path
 */
export function generateVariantDeclarations(componentNames, outDir) {
  for (const componentName of componentNames) {
    const typesContent = TYPE_DEFS.variant(componentName);
    writeFileSync(join(outDir, `${componentName}.d.ts`), typesContent);
  }
  
  console.log(`  ✅ Generated ${componentNames.length} TypeScript definitions`);
}

/**
 * Collect entry points for compilation
 * @param {Map} iconsByBaseName - Map of icon data by base name
 * @param {string} iconsDir - Icons directory path
 * @returns {Object} - Object with wrapperEntryPoints, variantEntryPoints, wrapperComponents, variantComponents
 */
export function collectEntryPoints(iconsByBaseName, iconsDir) {
  const wrapperEntryPoints = [];
  const wrapperComponents = [];
  const variantEntryPoints = [];
  const variantComponents = [];
  
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
  
  return {
    wrapperEntryPoints,
    variantEntryPoints,
    wrapperComponents,
    variantComponents
  };
}
