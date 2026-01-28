#!/usr/bin/env node

/**
 * Restore Version History Script
 * 
 * This script restores the version history (versionAdded, dateAdded, lastModified)
 * from a previous git commit where the metadata was correct.
 * 
 * The version history was lost during the monorepo migration when the metadata
 * path changed and the build script couldn't find the existing metadata.
 * 
 * Usage: node scripts/restore-version-history.js [--dry-run]
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const OLD_COMMIT = 'b137c98a';
const OLD_METADATA_PATH = 'dist/icons.meta.json';
const CURRENT_METADATA_PATH = join(__dirname, '..', 'dist', 'icons.meta.json');

/**
 * Load metadata from a specific git commit
 */
function loadOldMetadataFromGit(commit, path) {
  try {
    const output = execSync(`git show ${commit}:${path}`, {
      cwd: join(__dirname, '..'),
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024 // 50MB buffer for large JSON
    });
    return JSON.parse(output);
  } catch (error) {
    console.error(`❌ Failed to load metadata from git commit ${commit}:${path}`);
    console.error(error.message);
    process.exit(1);
  }
}

/**
 * Load current metadata from file
 */
function loadCurrentMetadata(path) {
  if (!existsSync(path)) {
    console.error(`❌ Current metadata file not found: ${path}`);
    process.exit(1);
  }
  
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    console.error(`❌ Failed to parse current metadata: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Create a lookup map from metadata array
 * Key: variantComponentName (unique identifier for each icon variant)
 */
function createLookupMap(metadata) {
  const map = new Map();
  for (const item of metadata) {
    map.set(item.variantComponentName, item);
  }
  return map;
}

/**
 * Merge version history from old metadata into current metadata
 */
function mergeVersionHistory(currentMetadata, oldMetadataMap) {
  const stats = {
    restored: 0,
    notFound: 0,
    alreadyCorrect: 0
  };
  
  const notFoundIcons = [];
  
  for (const currentItem of currentMetadata) {
    const oldItem = oldMetadataMap.get(currentItem.variantComponentName);
    
    if (!oldItem) {
      // Icon exists in current but not in old - it's genuinely new
      stats.notFound++;
      notFoundIcons.push(currentItem.variantComponentName);
      continue;
    }
    
    // Check if the hash matches (same SVG content)
    const hashMatches = currentItem.svgHash === oldItem.svgHash;
    
    // Restore version history from old metadata
    if (currentItem.versionAdded !== oldItem.versionAdded || 
        currentItem.dateAdded !== oldItem.dateAdded) {
      currentItem.versionAdded = oldItem.versionAdded;
      currentItem.dateAdded = oldItem.dateAdded;
      
      // If hash matches, also restore lastModified (icon hasn't changed)
      if (hashMatches) {
        currentItem.lastModified = oldItem.lastModified;
        currentItem.versionLastModified = oldItem.versionLastModified || oldItem.versionAdded;
      }
      // If hash differs, keep current lastModified (icon was modified)
      
      stats.restored++;
    } else {
      stats.alreadyCorrect++;
    }
  }
  
  return { stats, notFoundIcons };
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  
  console.log('🔄 Restore Version History Script');
  console.log('==================================');
  console.log(`📅 Source commit: ${OLD_COMMIT}`);
  console.log(`📁 Current metadata: ${CURRENT_METADATA_PATH}`);
  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No changes will be written');
  }
  console.log('');
  
  // Load old metadata from git
  console.log('📥 Loading old metadata from git...');
  const oldMetadata = loadOldMetadataFromGit(OLD_COMMIT, OLD_METADATA_PATH);
  console.log(`   Found ${oldMetadata.length} icon variants in old metadata`);
  
  // Load current metadata
  console.log('📥 Loading current metadata...');
  const currentMetadata = loadCurrentMetadata(CURRENT_METADATA_PATH);
  console.log(`   Found ${currentMetadata.length} icon variants in current metadata`);
  
  // Create lookup map from old metadata
  console.log('🗺️  Creating lookup map...');
  const oldMetadataMap = createLookupMap(oldMetadata);
  
  // Merge version history
  console.log('🔀 Merging version history...');
  const { stats, notFoundIcons } = mergeVersionHistory(currentMetadata, oldMetadataMap);
  
  // Report results
  console.log('');
  console.log('📊 Results:');
  console.log(`   ✅ Restored: ${stats.restored} icons`);
  console.log(`   ⏭️  Already correct: ${stats.alreadyCorrect} icons`);
  console.log(`   🆕 New icons (not in old metadata): ${stats.notFound} icons`);
  
  if (notFoundIcons.length > 0 && notFoundIcons.length <= 20) {
    console.log('');
    console.log('🆕 Icons not found in old metadata (genuinely new):');
    for (const name of notFoundIcons) {
      console.log(`   - ${name}`);
    }
  } else if (notFoundIcons.length > 20) {
    console.log('');
    console.log(`🆕 ${notFoundIcons.length} icons not found in old metadata (showing first 20):`);
    for (const name of notFoundIcons.slice(0, 20)) {
      console.log(`   - ${name}`);
    }
    console.log(`   ... and ${notFoundIcons.length - 20} more`);
  }
  
  // Write merged metadata
  if (!dryRun && stats.restored > 0) {
    console.log('');
    console.log('💾 Writing merged metadata...');
    writeFileSync(CURRENT_METADATA_PATH, JSON.stringify(currentMetadata, null, 2));
    console.log('   ✅ Metadata updated successfully!');
  } else if (dryRun) {
    console.log('');
    console.log('🔍 Dry run complete - no changes written');
  } else {
    console.log('');
    console.log('ℹ️  No changes needed');
  }
  
  // Show sample of restored data
  if (stats.restored > 0) {
    console.log('');
    console.log('📋 Sample of restored metadata (first icon):');
    const sample = currentMetadata[0];
    console.log(`   Name: ${sample.variantComponentName}`);
    console.log(`   Version Added: ${sample.versionAdded}`);
    console.log(`   Date Added: ${sample.dateAdded}`);
    console.log(`   Last Modified: ${sample.lastModified}`);
  }
}

main();
