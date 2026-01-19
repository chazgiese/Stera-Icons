#!/usr/bin/env node

/**
 * Bundle Size Analyzer
 * 
 * Similar to Bundlephobia, this script measures:
 * - Minified size
 * - Gzipped size  
 * - Brotli size
 * - Per-icon cost analysis
 * - Tree-shaking effectiveness
 * 
 * Usage:
 *   node scripts/analyze-bundle-size.js                    # Analyze full package
 *   node scripts/analyze-bundle-size.js --icon Activity    # Analyze specific icon
 *   node scripts/analyze-bundle-size.js --compare          # Compare all icons
 */

import { build } from 'esbuild';
import { writeFileSync, mkdirSync, rmSync, existsSync, statSync, readFileSync, readdirSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

// Try to use brotli if available
let brotliCompress;
try {
  const zlib = await import('zlib');
  brotliCompress = zlib.brotliCompressSync;
} catch {
  brotliCompress = null;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TEMP_DIR = join(__dirname, '..', '.bundle-analysis');
const PACKAGES_DIR = join(__dirname, '..', 'packages', 'react');
const SRC_DIR = join(PACKAGES_DIR, 'src');
const DIST_DIR = join(PACKAGES_DIR, 'dist');

// Parse CLI arguments
const args = process.argv.slice(2);
const iconArg = args.find((_, i) => args[i - 1] === '--icon');
const compareMode = args.includes('--compare');
const jsonOutput = args.includes('--json');
const helpMode = args.includes('--help') || args.includes('-h');

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function formatBytesShort(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  return `${(bytes / 1024).toFixed(1)}KB`;
}

async function bundleCode(code, name) {
  const testFile = join(TEMP_DIR, `${name}.tsx`);
  const outFile = join(TEMP_DIR, `${name}.bundle.js`);
  
  writeFileSync(testFile, code);
  
  try {
    await build({
      entryPoints: [testFile],
      bundle: true,
      format: 'esm',
      outfile: outFile,
      external: ['react', 'react/jsx-runtime'],
      minify: true,
      treeShaking: true,
      platform: 'neutral',
      target: 'es2020',
      jsx: 'automatic',
      write: true,
      logLevel: 'silent',
    });
    
    const content = readFileSync(outFile);
    const gzipped = gzipSync(content);
    const brotli = brotliCompress ? brotliCompress(content) : null;
    
    return {
      success: true,
      minified: content.length,
      gzip: gzipped.length,
      brotli: brotli ? brotli.length : null,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

async function analyzeFullPackage() {
  console.log('\n📦 Full Package Analysis\n');
  console.log('Simulating: import * from "stera-icons"\n');
  
  // Check if index.ts exists
  const indexPath = join(SRC_DIR, 'index.ts');
  if (!existsSync(indexPath)) {
    console.log('❌ Source files not found. Run `pnpm build:icons` first.\n');
    return null;
  }
  
  const code = `
import * as SteraIcons from '../src/index';
export { SteraIcons };
`;
  
  const result = await bundleCode(code, 'full-package');
  
  if (result.success) {
    console.log('  Full bundle (all icons):');
    console.log(`    Minified:  ${formatBytes(result.minified)}`);
    console.log(`    Gzipped:   ${formatBytes(result.gzip)}`);
    if (result.brotli) {
      console.log(`    Brotli:    ${formatBytes(result.brotli)}`);
    }
  } else {
    console.log(`  ❌ Failed: ${result.error}`);
  }
  
  return result;
}

async function analyzeSingleIcon(iconName) {
  console.log(`\n🔍 Single Icon Analysis: ${iconName}\n`);
  
  // Find the icon file
  const iconsDir = join(SRC_DIR, 'icons');
  if (!existsSync(iconsDir)) {
    console.log('❌ Icons directory not found. Run `pnpm build:icons` first.\n');
    return null;
  }
  
  // Look for the icon file (could be wrapper or direct variant)
  const files = readdirSync(iconsDir);
  const matchingFiles = files.filter(f => 
    f.toLowerCase().includes(iconName.toLowerCase()) && f.endsWith('.tsx')
  );
  
  if (matchingFiles.length === 0) {
    console.log(`❌ Icon "${iconName}" not found.\n`);
    console.log('Available icons (sample):');
    files.slice(0, 10).forEach(f => console.log(`  - ${f.replace('.tsx', '')}`));
    return null;
  }
  
  const results = {};
  
  for (const file of matchingFiles) {
    const componentName = file.replace('.tsx', '');
    const importPath = `../src/icons/${componentName}`;
    
    const code = `
import { ${componentName} } from '${importPath}';
export { ${componentName} };
`;
    
    const result = await bundleCode(code, componentName);
    results[componentName] = result;
    
    if (result.success) {
      console.log(`  ${componentName}:`);
      console.log(`    Minified:  ${formatBytes(result.minified)}`);
      console.log(`    Gzipped:   ${formatBytes(result.gzip)}`);
      if (result.brotli) {
        console.log(`    Brotli:    ${formatBytes(result.brotli)}`);
      }
      console.log();
    } else {
      console.log(`  ${componentName}: ❌ ${result.error}\n`);
    }
  }
  
  return results;
}

async function compareIcons() {
  console.log('\n📊 Icon Size Comparison\n');
  
  const iconsDir = join(SRC_DIR, 'icons');
  if (!existsSync(iconsDir)) {
    console.log('❌ Icons directory not found. Run `pnpm build:icons` first.\n');
    return null;
  }
  
  const files = readdirSync(iconsDir).filter(f => f.endsWith('.tsx'));
  
  // Group by base icon name (wrapper vs variants)
  const iconGroups = {};
  for (const file of files) {
    const name = file.replace('.tsx', '');
    // Extract base name (e.g., "Activity" from "Activity" or "activity-bold")
    const baseName = name.includes('-') ? name.split('-')[0] : name;
    if (!iconGroups[baseName]) {
      iconGroups[baseName] = [];
    }
    iconGroups[baseName].push(name);
  }
  
  console.log(`Found ${Object.keys(iconGroups).length} icon families, ${files.length} total files\n`);
  
  // Sample a subset for analysis (analyzing all would take too long)
  const sampleSize = Math.min(20, Object.keys(iconGroups).length);
  const sampleGroups = Object.keys(iconGroups).slice(0, sampleSize);
  
  console.log(`Analyzing ${sampleSize} icon families...\n`);
  console.log('-'.repeat(70));
  console.log(`${'Icon'.padEnd(35)} ${'Min'.padStart(10)} ${'Gzip'.padStart(10)} ${'Brotli'.padStart(10)}`);
  console.log('-'.repeat(70));
  
  const results = [];
  
  for (const baseName of sampleGroups) {
    const variants = iconGroups[baseName];
    
    // Analyze the first variant (usually the wrapper or main component)
    const mainVariant = variants.find(v => v === baseName) || variants[0];
    const importPath = `../src/icons/${mainVariant}`;
    
    const code = `
import { ${mainVariant} } from '${importPath}';
export { ${mainVariant} };
`;
    
    const result = await bundleCode(code, mainVariant);
    
    if (result.success) {
      results.push({ name: mainVariant, ...result });
      const brotliStr = result.brotli ? formatBytesShort(result.brotli) : 'N/A';
      console.log(
        `${mainVariant.padEnd(35)} ${formatBytesShort(result.minified).padStart(10)} ${formatBytesShort(result.gzip).padStart(10)} ${brotliStr.padStart(10)}`
      );
    } else {
      console.log(`${mainVariant.padEnd(35)} ${'ERROR'.padStart(10)}`);
    }
  }
  
  console.log('-'.repeat(70));
  
  // Calculate averages
  const successful = results.filter(r => r.success);
  if (successful.length > 0) {
    const avgMinified = successful.reduce((sum, r) => sum + r.minified, 0) / successful.length;
    const avgGzip = successful.reduce((sum, r) => sum + r.gzip, 0) / successful.length;
    
    console.log(`\n📈 Statistics (${successful.length} icons):`);
    console.log(`  Average minified: ${formatBytes(avgMinified)}`);
    console.log(`  Average gzipped:  ${formatBytes(avgGzip)}`);
    console.log(`  Smallest:         ${formatBytes(Math.min(...successful.map(r => r.gzip)))} gzip`);
    console.log(`  Largest:          ${formatBytes(Math.max(...successful.map(r => r.gzip)))} gzip`);
  }
  
  return results;
}

async function analyzeTreeShakingEffectiveness() {
  console.log('\n🌳 Tree-Shaking Effectiveness\n');
  
  const scenarios = [
    {
      name: '1 icon import',
      code: `
import { Activity } from '../src/index';
export { Activity };
`,
    },
    {
      name: '5 icon imports',
      code: `
import { Activity, Accessibility, Airplane, AlarmClock, AlertCircle } from '../src/index';
export { Activity, Accessibility, Airplane, AlarmClock, AlertCircle };
`,
    },
    {
      name: '10 icon imports',
      code: `
import { Activity, Accessibility, Airplane, AlarmClock, AlertCircle, AlertDiamond, AlertHexagon, AlertOctagon, AlertSquare, AlertTriangle } from '../src/index';
export { Activity, Accessibility, Airplane, AlarmClock, AlertCircle, AlertDiamond, AlertHexagon, AlertOctagon, AlertSquare, AlertTriangle };
`,
    },
  ];
  
  console.log('-'.repeat(50));
  console.log(`${'Scenario'.padEnd(25)} ${'Gzip'.padStart(12)} ${'Per Icon'.padStart(12)}`);
  console.log('-'.repeat(50));
  
  let baseSize = 0;
  
  for (const scenario of scenarios) {
    const result = await bundleCode(scenario.code, scenario.name.replace(/ /g, '-'));
    
    if (result.success) {
      const iconCount = parseInt(scenario.name) || 1;
      const perIcon = result.gzip / iconCount;
      
      if (baseSize === 0) baseSize = result.gzip;
      
      console.log(
        `${scenario.name.padEnd(25)} ${formatBytesShort(result.gzip).padStart(12)} ${formatBytesShort(perIcon).padStart(12)}`
      );
    }
  }
  
  console.log('-'.repeat(50));
  console.log('\n✅ Good tree-shaking: per-icon cost stays relatively constant');
  console.log('❌ Bad tree-shaking: bundle grows faster than linearly\n');
}

async function main() {
  if (helpMode) {
    console.log(`
Bundle Size Analyzer for Stera Icons

Usage:
  node scripts/analyze-bundle-size.js              Analyze full package
  node scripts/analyze-bundle-size.js --icon Name  Analyze specific icon
  node scripts/analyze-bundle-size.js --compare    Compare icon sizes
  node scripts/analyze-bundle-size.js --json       Output as JSON

Examples:
  node scripts/analyze-bundle-size.js --icon Activity
  node scripts/analyze-bundle-size.js --compare
`);
    process.exit(0);
  }
  
  console.log('═'.repeat(60));
  console.log('  📦 Bundle Size Analyzer (like Bundlephobia, but local!)');
  console.log('═'.repeat(60));
  
  // Create temp directory
  if (existsSync(TEMP_DIR)) {
    rmSync(TEMP_DIR, { recursive: true });
  }
  mkdirSync(TEMP_DIR, { recursive: true });
  
  try {
    if (iconArg) {
      await analyzeSingleIcon(iconArg);
    } else if (compareMode) {
      await compareIcons();
    } else {
      // Default: full analysis
      await analyzeFullPackage();
      await analyzeTreeShakingEffectiveness();
      
      console.log('═'.repeat(60));
      console.log('\n💡 Tips:');
      console.log('  - Use --icon <name> to analyze a specific icon');
      console.log('  - Use --compare to see size comparison across icons');
      console.log('  - Run pnpm test:tree-shaking for detailed tree-shaking tests\n');
    }
  } finally {
    // Cleanup
    rmSync(TEMP_DIR, { recursive: true });
  }
}

main().catch(error => {
  console.error('❌ Analysis failed:', error);
  process.exit(1);
});
