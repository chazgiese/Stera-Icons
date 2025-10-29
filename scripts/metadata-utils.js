#!/usr/bin/env node

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Utility functions for working with icon metadata
 */
class IconMetadataUtils {
  constructor(metadataPath) {
    this.metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
  }

  /**
   * Get all icons added in a specific version
   */
  getIconsByVersion(version) {
    return this.metadata.filter(icon => icon.versionAdded === version);
  }

  /**
   * Get all icons added on a specific date
   */
  getIconsByDate(date) {
    const targetDate = new Date(date).toISOString().split('T')[0];
    return this.metadata.filter(icon => 
      icon.dateAdded.startsWith(targetDate)
    );
  }

  /**
   * Get all icons modified in a specific version
   */
  getModifiedIconsByVersion(version) {
    return this.metadata.filter(icon => icon.versionLastModified === version);
  }

  /**
   * Get all icons last modified in a specific version
   */
  getIconsLastModifiedInVersion(version) {
    return this.metadata.filter(icon => icon.versionLastModified === version);
  }

  /**
   * Get icons added between two dates
   */
  getIconsAddedBetween(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return this.metadata.filter(icon => {
      const addedDate = new Date(icon.dateAdded);
      return addedDate >= start && addedDate <= end;
    });
  }

  /**
   * Get version statistics
   */
  getVersionStats() {
    const stats = {};
    
    this.metadata.forEach(icon => {
      const version = icon.versionAdded;
      if (!stats[version]) {
        stats[version] = {
          iconsAdded: 0,
          iconsModified: 0,
          dateRange: { start: null, end: null }
        };
      }
      
      stats[version].iconsAdded++;
      
      // Check if this icon was modified in this version (using versionLastModified)
      if (icon.versionLastModified === version) {
        stats[version].iconsModified++;
      }
      
      // Track date range
      const addedDate = new Date(icon.dateAdded);
      if (!stats[version].dateRange.start || addedDate < new Date(stats[version].dateRange.start)) {
        stats[version].dateRange.start = icon.dateAdded;
      }
      if (!stats[version].dateRange.end || addedDate > new Date(stats[version].dateRange.end)) {
        stats[version].dateRange.end = icon.dateAdded;
      }
    });
    
    return stats;
  }

  /**
   * Get modification statistics by version
   */
  getModificationStats() {
    const stats = {};
    
    this.metadata.forEach(icon => {
      const version = icon.versionLastModified;
      if (!stats[version]) {
        stats[version] = {
          iconsLastModified: 0,
          iconsAdded: 0,
          iconsModified: 0
        };
      }
      
      stats[version].iconsLastModified++;
      
      // Count icons that were added in this version
      if (icon.versionAdded === version) {
        stats[version].iconsAdded++;
      } else {
        // This icon was modified in this version but added earlier
        stats[version].iconsModified++;
      }
    });
    
    return stats;
  }

  /**
   * Search icons by name or tags
   */
  searchIcons(query) {
    const lowercaseQuery = query.toLowerCase();
    
    return this.metadata.filter(icon => 
      icon.name.toLowerCase().includes(lowercaseQuery) ||
      icon.componentName.toLowerCase().includes(lowercaseQuery) ||
      icon.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  /**
   * Get recent icons (added in last N days)
   */
  getRecentIcons(days = 7) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return this.metadata.filter(icon => 
      new Date(icon.dateAdded) >= cutoffDate
    );
  }

  /**
   * Print a summary report
   */
  printSummary() {
    const stats = this.getVersionStats();
    const totalIcons = this.metadata.length;
    const uniqueIcons = new Set(this.metadata.map(i => i.name)).size;
    
    console.log('📊 Icon Metadata Summary');
    console.log('========================');
    console.log(`Total icon variants: ${totalIcons}`);
    console.log(`Unique icons: ${uniqueIcons}`);
    console.log(`Versions tracked: ${Object.keys(stats).length}`);
    console.log('');
    
    console.log('📈 Version Breakdown:');
    Object.entries(stats)
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .forEach(([version, data]) => {
        console.log(`  v${version}: ${data.iconsAdded} icons added, ${data.iconsModified} modified`);
        console.log(`    Date range: ${data.dateRange.start.split('T')[0]} to ${data.dateRange.end.split('T')[0]}`);
      });
  }
}

// CLI interface
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  const metadataPath = join(__dirname, '..', 'packages', 'react', 'dist', 'icons.meta.json');
  const utils = new IconMetadataUtils(metadataPath);
  
  switch (command) {
    case 'summary':
      utils.printSummary();
      break;
      
    case 'version':
      const version = args[1];
      if (!version) {
        console.error('Please provide a version number (e.g., 3.1.0)');
        process.exit(1);
      }
      const versionIcons = utils.getIconsByVersion(version);
      console.log(`Icons added in version ${version}: ${versionIcons.length}`);
      versionIcons.forEach(icon => {
        console.log(`  - ${icon.componentName} (${icon.name})`);
      });
      break;

    case 'modified':
      const modifiedVersion = args[1];
      if (!modifiedVersion) {
        console.error('Please provide a version number (e.g., 3.1.0)');
        process.exit(1);
      }
      const modifiedIcons = utils.getModifiedIconsByVersion(modifiedVersion);
      console.log(`Icons last modified in version ${modifiedVersion}: ${modifiedIcons.length}`);
      modifiedIcons.forEach(icon => {
        const addedIn = icon.versionAdded === modifiedVersion ? ' (added)' : ` (added in v${icon.versionAdded})`;
        console.log(`  - ${icon.componentName} (${icon.name})${addedIn}`);
      });
      break;
      
    case 'search':
      const query = args[1];
      if (!query) {
        console.error('Please provide a search query');
        process.exit(1);
      }
      const results = utils.searchIcons(query);
      console.log(`Found ${results.length} icons matching "${query}":`);
      results.forEach(icon => {
        console.log(`  - ${icon.componentName} (v${icon.versionAdded})`);
      });
      break;
      
    case 'recent':
      const days = parseInt(args[1]) || 7;
      const recentIcons = utils.getRecentIcons(days);
      console.log(`Icons added in the last ${days} days: ${recentIcons.length}`);
      recentIcons.forEach(icon => {
        console.log(`  - ${icon.componentName} (${icon.dateAdded.split('T')[0]})`);
      });
      break;
      
    case 'stats':
      const stats = utils.getVersionStats();
      console.log(JSON.stringify(stats, null, 2));
      break;

    case 'modifications':
      const modStats = utils.getModificationStats();
      console.log('📊 Modification Statistics by Version');
      console.log('====================================');
      Object.entries(modStats)
        .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
        .forEach(([version, data]) => {
          console.log(`v${version}: ${data.iconsLastModified} total, ${data.iconsAdded} added, ${data.iconsModified} modified`);
        });
      break;
      
    default:
      console.log('Icon Metadata Utilities');
      console.log('======================');
      console.log('');
      console.log('Usage: node metadata-utils.js <command> [args]');
      console.log('');
      console.log('Commands:');
      console.log('  summary                    - Show overall summary');
      console.log('  version <version>          - Show icons added in version');
      console.log('  modified <version>         - Show icons last modified in version');
      console.log('  search <query>             - Search icons by name or tags');
      console.log('  recent [days]              - Show recently added icons');
      console.log('  stats                      - Show detailed statistics');
      console.log('  modifications              - Show modification statistics by version');
      console.log('');
      console.log('Examples:');
      console.log('  node metadata-utils.js summary');
      console.log('  node metadata-utils.js version 3.1.0');
      console.log('  node metadata-utils.js modified 3.1.0');
      console.log('  node metadata-utils.js search "chart"');
      console.log('  node metadata-utils.js recent 30');
      console.log('  node metadata-utils.js modifications');
      break;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { IconMetadataUtils };
