#!/usr/bin/env node

/**
 * Build Performance Benchmark Script
 * 
 * Measures and reports on icon build performance metrics.
 * 
 * Usage:
 *   node scripts/benchmark-build.js <icons-export.json>
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Parse build output to extract timing information
 * @param {string} output - Build script output
 * @returns {Object} - Parsed timing information
 */
function parseBuildOutput(output) {
  const timings = {};
  
  // Extract ESM compilation time
  const esmMatch = output.match(/ESM compilation complete \((\d+)ms\)/);
  if (esmMatch) {
    timings.esmCompilation = parseInt(esmMatch[1]);
  }
  
  // Extract CJS compilation time
  const cjsMatch = output.match(/CJS compilation complete \((\d+)ms\)/);
  if (cjsMatch) {
    timings.cjsCompilation = parseInt(cjsMatch[1]);
  }
  
  // Extract icon counts
  const iconCountMatch = output.match(/Processing (\d+) icons/);
  if (iconCountMatch) {
    timings.totalIcons = parseInt(iconCountMatch[1]);
  }
  
  const variantsMatch = output.match(/Generated (\d+) variant components/);
  if (variantsMatch) {
    timings.totalVariants = parseInt(variantsMatch[1]);
  }
  
  return timings;
}

/**
 * Format duration in human-readable format
 * @param {number} ms - Duration in milliseconds
 * @returns {string} - Formatted duration
 */
function formatDuration(ms) {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(2)}s`;
  return `${Math.floor(ms / 60000)}m ${((ms % 60000) / 1000).toFixed(0)}s`;
}

/**
 * Calculate per-icon metrics
 * @param {number} totalTime - Total build time in ms
 * @param {number} iconCount - Number of icons
 * @returns {Object} - Per-icon metrics
 */
function calculatePerIconMetrics(totalTime, iconCount) {
  if (!iconCount || iconCount === 0) return null;
  
  return {
    timePerIcon: (totalTime / iconCount).toFixed(2),
    iconsPerSecond: ((iconCount / totalTime) * 1000).toFixed(2)
  };
}

/**
 * Main benchmark function
 */
async function runBenchmark() {
  const iconsExportPath = process.argv[2];
  
  if (!iconsExportPath) {
    console.error('❌ Please provide path to icons-export.json');
    console.error('Usage: node scripts/benchmark-build.js <path-to-icons-export.json>');
    process.exit(1);
  }
  
  if (!existsSync(iconsExportPath)) {
    console.error(`❌ File not found: ${iconsExportPath}`);
    process.exit(1);
  }
  
  console.log('📊 Icon Build Performance Benchmark');
  console.log('=' .repeat(60));
  console.log();
  
  // Load icon export to get metrics
  const iconsExport = JSON.parse(readFileSync(iconsExportPath, 'utf8'));
  const iconCount = iconsExport.totalIcons || iconsExport.icons.length;
  
  console.log(`📦 Input: ${iconCount} icons`);
  console.log(`📅 Export date: ${iconsExport.exportedAt}`);
  console.log();
  
  // Run the build and measure time
  console.log('🏃 Running build...\n');
  
  const startTime = Date.now();
  
  try {
    // Import and run the build function
    const { default: buildModule } = await import('./build-icons.js');
    
    const totalTime = Date.now() - startTime;
    
    console.log();
    console.log('=' .repeat(60));
    console.log('📊 Benchmark Results');
    console.log('=' .repeat(60));
    console.log();
    console.log(`⏱️  Total Build Time: ${formatDuration(totalTime)}`);
    
    const metrics = calculatePerIconMetrics(totalTime, iconCount);
    if (metrics) {
      console.log(`📈 Time per Icon: ${metrics.timePerIcon}ms`);
      console.log(`🚀 Throughput: ${metrics.iconsPerSecond} icons/second`);
    }
    
    console.log();
    console.log('💡 Performance Tips:');
    console.log('  - Use incremental builds for faster rebuilds');
    console.log('  - Cache is enabled by default for SVGO optimization');
    console.log('  - Parallel compilation is enabled for esbuild');
    console.log();
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

runBenchmark().catch(error => {
  console.error('❌ Benchmark failed:', error);
  process.exit(1);
});
