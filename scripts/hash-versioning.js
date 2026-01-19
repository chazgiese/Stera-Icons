#!/usr/bin/env node

/**
 * Hash-based Icon Versioning System
 * 
 * This simplified versioning system uses SHA-256 hashes from the icon export
 * to track changes and determine version information. This eliminates the need
 * for complex version history tracking and makes the system more reliable.
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Simplified versioning utility that uses SHA-256 hashes for change detection
 */
export class HashVersioning {
  constructor(projectRoot) {
    this.projectRoot = projectRoot || join(__dirname, '..');
  }

  /**
   * Get the current version from package.json
   */
  getCurrentVersion() {
    const packageJsonPath = join(this.projectRoot, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version;
  }

  /**
   * Get the next version from pending changesets
   */
  getNextVersionFromChangesets() {
    const changesetDir = join(this.projectRoot, '.changeset');
    
    if (!existsSync(changesetDir)) {
      return null;
    }

    const changesetFiles = readdirSync(changesetDir).filter(f => f.endsWith('.md'));
    
    if (changesetFiles.length === 0) {
      return null;
    }

    let maxBump = 'patch'; // patch, minor, major
    
    // Parse each changeset file to determine the bump type
    for (const file of changesetFiles) {
      const content = readFileSync(join(changesetDir, file), 'utf8');
      const bumpType = this.parseChangesetBump(content);
      
      if (bumpType === 'major') {
        maxBump = 'major';
      } else if (bumpType === 'minor' && maxBump !== 'major') {
        maxBump = 'minor';
      }
    }

    const currentVersion = this.getCurrentVersion();
    return this.bumpVersion(currentVersion, maxBump);
  }

  /**
   * Parse a changeset file to determine the bump type
   */
  parseChangesetBump(content) {
    const lines = content.split('\n');
    let inMetadata = false;
    
    for (const line of lines) {
      if (line.startsWith('---')) {
        inMetadata = true;
        continue;
      }
      
      if (inMetadata && line.startsWith('---')) {
        break;
      }
      
      if (inMetadata) {
        if (line.includes('major') || line.includes('"major"')) {
          return 'major';
        }
        if (line.includes('minor') || line.includes('"minor"')) {
          return 'minor';
        }
        if (line.includes('patch') || line.includes('"patch"')) {
          return 'patch';
        }
      }
    }
    
    return 'patch';
  }

  /**
   * Bump a version string by the specified type
   */
  bumpVersion(version, bumpType) {
    const [major, minor, patch] = version.split('.').map(Number);
    
    switch (bumpType) {
      case 'major':
        return `${major + 1}.0.0`;
      case 'minor':
        return `${major}.${minor + 1}.0`;
      case 'patch':
        return `${major}.${minor}.${patch + 1}`;
      default:
        return version;
    }
  }

  /**
   * Get version information for new or modified icons
   */
  getVersionForIcons() {
    // First, try to get version from pending changesets
    const nextVersion = this.getNextVersionFromChangesets();
    if (nextVersion) {
      return {
        version: nextVersion,
        source: 'pending changeset',
        isEstimated: true
      };
    }

    // Fall back to current version
    const currentVersion = this.getCurrentVersion();
    return {
      version: currentVersion,
      source: 'package.json',
      isEstimated: false
    };
  }

  /**
   * Determine if an icon is new, modified, or unchanged based on hash comparison
   */
  analyzeIconChange(iconName, variant, currentHash, existingMetadata) {
    const existingItem = existingMetadata.find(item => 
      item.name === iconName && item.variant === variant
    );

    const currentVersion = this.getVersionForIcons().version;

    if (!existingItem) {
      return {
        status: 'new',
        versionAdded: currentVersion,
        dateAdded: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        versionLastModified: currentVersion
      };
    }

    const isModified = existingItem.svgHash !== currentHash;
    
    if (isModified) {
      return {
        status: 'modified',
        versionAdded: existingItem.versionAdded,
        dateAdded: existingItem.dateAdded,
        lastModified: new Date().toISOString(),
        versionLastModified: currentVersion
      };
    }

    return {
      status: 'unchanged',
      versionAdded: existingItem.versionAdded,
      dateAdded: existingItem.dateAdded,
      lastModified: existingItem.lastModified,
      versionLastModified: existingItem.versionLastModified || existingItem.versionAdded
    };
  }

  /**
   * Get version information with context
   */
  getVersionInfo() {
    const currentVersion = this.getCurrentVersion();
    const hasChangesets = this.hasPendingChangesets();
    const nextVersion = this.getNextVersionFromChangesets();
    
    return {
      current: currentVersion,
      next: nextVersion,
      hasPendingChangesets: hasChangesets,
      recommendedForNewIcons: nextVersion || currentVersion
    };
  }

  /**
   * Check if there are pending changesets
   */
  hasPendingChangesets() {
    const changesetDir = join(this.projectRoot, '.changeset');
    if (!existsSync(changesetDir)) {
      return false;
    }
    
    const changesetFiles = readdirSync(changesetDir).filter(f => f.endsWith('.md'));
    return changesetFiles.length > 0;
  }
}

// CLI interface for testing
function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'info';
  
  const versioning = new HashVersioning();
  
  switch (command) {
    case 'info':
      const info = versioning.getVersionInfo();
      console.log('📋 Hash-based Version Information');
      console.log('==================================');
      console.log(`Current version: ${info.current}`);
      console.log(`Has pending changesets: ${info.hasPendingChangesets}`);
      if (info.next) {
        console.log(`Next version (from changesets): ${info.next}`);
      }
      console.log(`Recommended for new icons: ${info.recommendedForNewIcons}`);
      break;
      
    case 'next':
      const next = versioning.getNextVersionFromChangesets();
      console.log(next || 'No pending changesets found');
      break;
      
    case 'current':
      console.log(versioning.getCurrentVersion());
      break;
      
    default:
      console.log('Hash-based Versioning System');
      console.log('============================');
      console.log('');
      console.log('Usage: node hash-versioning.js <command>');
      console.log('');
      console.log('Commands:');
      console.log('  info     - Show version information');
      console.log('  next     - Show next version from changesets');
      console.log('  current  - Show current version');
      break;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
