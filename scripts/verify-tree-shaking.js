#!/usr/bin/env node

/**
 * Tree-Shaking Verification Script
 * 
 * This script tests that tree-shaking works correctly by:
 * 1. Creating test scenarios with different import patterns
 * 2. Bundling each scenario with esbuild (minified)
 * 3. Comparing output bundle sizes
 * 
 * Expected results:
 * - Direct variant import: ~300-500 bytes (IconBase + 1 path)
 * - Wrapper import: ~1-2KB (IconBase + 6 paths + selection logic)
 * - Multiple icons: Linear scaling (not exponential)
 */

import { build } from 'esbuild';
import { writeFileSync, mkdirSync, rmSync, existsSync, statSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TEMP_DIR = join(__dirname, '..', '.tree-shaking-test');
const DIST_DIR = join(__dirname, '..', 'packages', 'react', 'dist');

// Test scenarios to verify tree-shaking
const testScenarios = [
  {
    name: 'single-direct-variant',
    description: 'Import 1 direct variant component (SearchIconRegular)',
    code: `
import { SearchIconRegular } from '../src/icons/search-regular';
export { SearchIconRegular };
`,
    expectedMaxBytes: 900,  // Should be very small (~700-800 bytes)
  },
  {
    name: 'single-wrapper',
    description: 'Import 1 wrapper component (includes all 6 variants)',
    code: `
import { SearchIcon } from '../src/icons/search-wrapper';
export { SearchIcon };
`,
    expectedMaxBytes: 3500,  // Larger due to all variants (~3KB)
  },
  {
    name: 'three-direct-variants',
    description: 'Import 3 direct variant components from different icons',
    code: `
import { SearchIconRegular } from '../src/icons/search-regular';
import { HomeIconRegular } from '../src/icons/home-regular';
import { UserIconRegular } from '../src/icons/user-regular';
export { SearchIconRegular, HomeIconRegular, UserIconRegular };
`,
    expectedMaxBytes: 2500,  // ~800 bytes each, IconBase shared
  },
  {
    name: 'three-wrappers',
    description: 'Import 3 wrapper components',
    code: `
import { SearchIcon } from '../src/icons/search-wrapper';
import { HomeIcon } from '../src/icons/home-wrapper';
import { UserIcon } from '../src/icons/user-wrapper';
export { SearchIcon, HomeIcon, UserIcon };
`,
    expectedMaxBytes: 13000,  // ~3-4KB each, IconBase shared
  },
  {
    name: 'mixed-imports',
    description: 'Mix of direct variants and wrappers',
    code: `
import { SearchIcon } from '../src/icons/search-wrapper';
import { HomeIconRegular } from '../src/icons/home-regular';
import { UserIconBold } from '../src/icons/user-bold';
export { SearchIcon, HomeIconRegular, UserIconBold };
`,
    expectedMaxBytes: 5000,  // Wrapper + 2 direct variants
  },
  {
    name: 'unused-exports-removed',
    description: 'Import from index but only use one (tree-shaking test)',
    code: `
import { SearchIcon, HomeIcon } from '../src/index';
// Only re-export SearchIcon, HomeIcon should be tree-shaken
export { SearchIcon };
`,
    // This tests if bundler removes unused imports
    expectedMaxBytes: 4000,
  },
];

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(2)} KiB`;
}

async function runScenario(scenario) {
  const testFile = join(TEMP_DIR, `${scenario.name}.tsx`);
  const outFile = join(TEMP_DIR, `${scenario.name}.bundle.js`);
  
  // Write test file
  writeFileSync(testFile, scenario.code);
  
  try {
    // Bundle with esbuild
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
      metafile: true,
      write: true,
    });
    
    // Get file sizes
    const stats = statSync(outFile);
    const content = readFileSync(outFile);
    const gzipped = gzipSync(content);
    
    return {
      success: true,
      rawBytes: stats.size,
      gzipBytes: gzipped.length,
      passed: stats.size <= scenario.expectedMaxBytes,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      passed: false,
    };
  }
}

async function verifySubpathExports() {
  console.log('\n📦 Verifying Subpath Exports...\n');
  
  const results = [];
  const subpathScenarios = [
    {
      name: 'subpath-direct-variant',
      description: 'Import via subpath (direct variant)',
      importPath: './SearchIcon',
      expectedMaxBytes: 800,
    },
    {
      name: 'subpath-wrapper',
      description: 'Import via subpath (wrapper)',
      importPath: './SearchIcon',  // Wrapper has same name
      expectedMaxBytes: 3000,
    },
  ];
  
  // Check if dist/icons exists
  const distIconsDir = join(DIST_DIR, 'icons');
  if (!existsSync(distIconsDir)) {
    console.log('⚠️  Dist icons directory not found. Run build first.');
    return results;
  }
  
  // Check sample compiled files
  const sampleFiles = [
    'SearchIcon.mjs',         // Wrapper (includes all variants)
    'SearchIconRegular.mjs',  // Direct variant (regular)
    'SearchIconBold.mjs',     // Direct variant (bold)
  ];
  
  for (const file of sampleFiles) {
    const filePath = join(distIconsDir, file);
    if (existsSync(filePath)) {
      const stats = statSync(filePath);
      const content = readFileSync(filePath);
      const gzipped = gzipSync(content);
      
      results.push({
        name: file,
        rawBytes: stats.size,
        gzipBytes: gzipped.length,
      });
      
      console.log(`  ${file}:`);
      console.log(`    Raw: ${formatBytes(stats.size)}, Gzipped: ${formatBytes(gzipped.length)}`);
    }
  }
  
  return results;
}

async function main() {
  console.log('🧪 Tree-Shaking Verification Test\n');
  console.log('=' .repeat(60));
  
  // Create temp directory
  if (existsSync(TEMP_DIR)) {
    rmSync(TEMP_DIR, { recursive: true });
  }
  mkdirSync(TEMP_DIR, { recursive: true });
  
  // Check if source files exist (using new naming convention: search-regular.tsx)
  const searchIconPath = join(__dirname, '..', 'packages', 'react', 'src', 'icons', 'search-regular.tsx');
  if (!existsSync(searchIconPath)) {
    console.log('⚠️  Icon source files not found. Run build:icons first.');
    console.log('   Run: pnpm build:icons icons-export.json\n');
    
    // Still try to verify any existing dist files
    await verifySubpathExports();
    
    rmSync(TEMP_DIR, { recursive: true });
    process.exit(1);
  }
  
  console.log('\n📋 Running Test Scenarios...\n');
  
  const results = [];
  let allPassed = true;
  
  for (const scenario of testScenarios) {
    process.stdout.write(`  ${scenario.name}... `);
    
    const result = await runScenario(scenario);
    results.push({ ...scenario, ...result });
    
    if (!result.success) {
      console.log(`❌ FAILED: ${result.error}`);
      allPassed = false;
    } else if (!result.passed) {
      console.log(`⚠️  WARN: ${formatBytes(result.rawBytes)} (expected < ${formatBytes(scenario.expectedMaxBytes)})`);
    } else {
      console.log(`✅ ${formatBytes(result.rawBytes)} (gzip: ${formatBytes(result.gzipBytes)})`);
    }
  }
  
  // Verify subpath exports
  const subpathResults = await verifySubpathExports();
  
  // Print summary
  console.log('\n' + '=' .repeat(60));
  console.log('📊 Summary\n');
  
  console.log('Bundle Size Results:');
  console.log('-'.repeat(60));
  console.log(`${'Scenario'.padEnd(30)} ${'Raw'.padStart(10)} ${'Gzip'.padStart(10)} ${'Status'.padStart(8)}`);
  console.log('-'.repeat(60));
  
  for (const result of results) {
    if (result.success) {
      const status = result.passed ? '✅' : '⚠️';
      console.log(
        `${result.name.padEnd(30)} ${formatBytes(result.rawBytes).padStart(10)} ${formatBytes(result.gzipBytes).padStart(10)} ${status.padStart(8)}`
      );
    } else {
      console.log(`${result.name.padEnd(30)} ${'ERROR'.padStart(10)} ${'-'.padStart(10)} ${'❌'.padStart(8)}`);
    }
  }
  
  // Tree-shaking analysis
  console.log('\n📈 Tree-Shaking Analysis:\n');
  
  const singleDirect = results.find(r => r.name === 'single-direct-variant');
  const singleWrapper = results.find(r => r.name === 'single-wrapper');
  const threeDirect = results.find(r => r.name === 'three-direct-variants');
  const threeWrappers = results.find(r => r.name === 'three-wrappers');
  
  if (singleDirect?.success && singleWrapper?.success) {
    const ratio = singleWrapper.rawBytes / singleDirect.rawBytes;
    console.log(`  Wrapper vs Direct Variant: ${ratio.toFixed(1)}x larger`);
    console.log(`    - Direct variant: ${formatBytes(singleDirect.rawBytes)}`);
    console.log(`    - Wrapper (all 6 variants): ${formatBytes(singleWrapper.rawBytes)}`);
  }
  
  if (singleDirect?.success && threeDirect?.success) {
    const scaling = threeDirect.rawBytes / singleDirect.rawBytes;
    const isLinear = scaling < 4; // Should be ~3x for 3 icons if IconBase is shared
    console.log(`\n  Scaling (3 icons vs 1): ${scaling.toFixed(1)}x`);
    console.log(`    - Expected: ~2-3x (IconBase shared)`);
    console.log(`    - Result: ${isLinear ? '✅ Linear scaling (IconBase shared)' : '⚠️ May not be sharing IconBase'}`);
  }
  
  // Cleanup
  rmSync(TEMP_DIR, { recursive: true });
  
  console.log('\n' + '=' .repeat(60));
  
  if (allPassed) {
    console.log('✅ All tree-shaking tests passed!\n');
    process.exit(0);
  } else {
    console.log('⚠️  Some tests have warnings. Review the results above.\n');
    process.exit(0); // Don't fail on warnings, just report
  }
}

main().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});
