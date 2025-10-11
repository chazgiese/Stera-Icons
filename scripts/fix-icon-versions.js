#!/usr/bin/env node

/**
 * Fix Icon Version Metadata
 * 
 * This script corrects the version history in icons.meta.json by analyzing
 * the CHANGELOG and setting appropriate versionAdded dates.
 * 
 * Background:
 * When the per-icon versioning feature was first introduced, all 1,665 icons
 * were incorrectly marked as "new" with version 4.0.0. This script restores
 * the correct version history based on CHANGELOG data.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Version history from CHANGELOG.md
const VERSION_TIMELINE = {
  '4.0.0': {
    date: '2024-10-11', // Icon suffix added - no new icons, just renamed
    newIconCount: 0,
    description: 'Breaking change: Added Icon suffix to component names'
  },
  '3.2.0': {
    date: '2024-09-18',
    newIconCount: 105,
    description: 'Added chart, alignment, and business icons',
    totalIcons: 1665,
    previousTotal: 1590
  },
  '3.1.0': {
    date: '2024-09-15',
    newIconCount: 0, // Just updates and renames
    description: 'Icon updates and naming improvements'
  },
  '3.0.3': {
    date: '2024-09-10',
    newIconCount: 532,
    description: 'Large icon addition',
    totalIcons: 1590 // estimated
  },
  '3.0.0': {
    date: '2024-08-01',
    newIconCount: 100,
    description: 'Major update with 100+ new icons'
  },
  '2.0.0': {
    date: '2024-07-01',
    newIconCount: 0,
    description: 'Added Bold variants for all existing icons'
  }
};

// Icons known to be added in specific versions from CHANGELOG
const KNOWN_ICONS_BY_VERSION = {
  '3.2.0': [
    // Chart & Data Visualization Icons
    'area-chart', 'bar-chart', 'bar-chart-asc', 'bar-chart-desc', 'bar-chart-row',
    'bar-chart-row-asc', 'bar-chart-row-desc', 'bar-chart-x-y', 'line-chart',
    'line-chart-desc', 'line-chart-x-y', 'line-chart-x-y-desc', 'candle-chart',
    'scatter-chart', 'waterfall-chart', 'waterfall-chart-x', 'waterfall-chart-x-y',
    'trend-up', 'trend-down', 'cubic-graph',
    // Alignment & Layout Icons
    'align-horizontal-left', 'align-horizontal-center', 'align-horizontal-right',
    'align-vertical-top', 'align-vertical-center', 'align-vertical-bottom',
    'grid-shapes',
    // Business & Commerce Icons
    'briefcase', 'store', 'gift', 'gift-box', 'card-holder',
    // Label & Container Icons
    'can-label', 'bottle-label', 'wine-bottle-label'
  ],
  '2.1.0': [
    'wifi-slash', 'wine-bottle', 'wine-glass'
  ]
};

function getIconBaseName(componentName) {
  // Remove Icon suffix and variant suffix (Bold/Filled)
  let name = componentName.replace(/Icon$/, '');
  name = name.replace(/Bold$/, '');
  name = name.replace(/Filled$/, '');
  
  // Convert from PascalCase to kebab-case
  return name
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

function determineIconVersion(componentName, iconName) {
  // Check if icon is in known version lists
  for (const [version, icons] of Object.entries(KNOWN_ICONS_BY_VERSION)) {
    if (icons.includes(iconName)) {
      return version;
    }
  }
  
  // Default: assume older icons are from 3.0.0 or earlier
  // Icons added in 3.2.0 should be explicitly listed above
  return '3.0.0';
}

function fixIconVersions() {
  console.log('🔧 Fixing Icon Version Metadata...\n');
  
  const metadataPath = join(__dirname, '..', 'packages', 'react', 'dist', 'icons.meta.json');
  const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
  
  console.log(`📋 Loaded ${metadata.length} icon variants\n`);
  
  const versionCounts = {};
  const updatedMetadata = metadata.map(icon => {
    const iconBaseName = getIconBaseName(icon.componentName);
    const correctVersion = determineIconVersion(icon.componentName, iconBaseName);
    
    // Only update if version is wrong (currently all are 4.0.0)
    if (icon.versionAdded === '4.0.0' && correctVersion !== '4.0.0') {
      // Update version
      icon.versionAdded = correctVersion;
      
      // Update dateAdded to match version timeline
      const versionInfo = VERSION_TIMELINE[correctVersion];
      if (versionInfo && versionInfo.date) {
        icon.dateAdded = new Date(versionInfo.date).toISOString();
      }
      
      // Track stats
      versionCounts[correctVersion] = (versionCounts[correctVersion] || 0) + 1;
    }
    
    return icon;
  });
  
  // Write updated metadata
  writeFileSync(metadataPath, JSON.stringify(updatedMetadata, null, 2));
  
  console.log('✅ Metadata updated!\n');
  console.log('📊 Version distribution:');
  
  // Count current distribution
  const currentDistribution = {};
  updatedMetadata.forEach(icon => {
    currentDistribution[icon.versionAdded] = (currentDistribution[icon.versionAdded] || 0) + 1;
  });
  
  Object.entries(currentDistribution)
    .sort(([a], [b]) => b.localeCompare(a)) // Sort by version descending
    .forEach(([version, count]) => {
      const info = VERSION_TIMELINE[version];
      console.log(`  v${version}: ${count} icon variants${info ? ` - ${info.description}` : ''}`);
    });
  
  console.log('\n📝 Note: This is a best-effort restoration based on CHANGELOG data.');
  console.log('   Some icons may not have perfectly accurate version history.');
  console.log('   Going forward, the version history will be accurately tracked.');
}

// Run the fix
fixIconVersions();

