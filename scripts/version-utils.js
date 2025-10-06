#!/usr/bin/env node

import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Utility functions for determining version numbers
 */
export class VersionUtils {
  constructor(projectRoot) {
    this.projectRoot = projectRoot || join(__dirname, '..');
  }

  /**
   * Get the current version from package.json
   */
  getCurrentVersion() {
    const packageJsonPath = join(this.projectRoot, 'packages', 'react', 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version;
  }

  /**
   * Parse changeset files to determine the next version
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
    // Look for "---" followed by version bump indicators
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
        // Look for version bump indicators
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
    
    // Default to patch if no specific bump is found
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
   * Get the appropriate version for new icons
   */
  getVersionForNewIcons() {
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
}

// CLI interface for testing
function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'info';
  
  const utils = new VersionUtils();
  
  switch (command) {
    case 'info':
      const info = utils.getVersionInfo();
      console.log('📋 Version Information');
      console.log('=====================');
      console.log(`Current version: ${info.current}`);
      console.log(`Has pending changesets: ${info.hasPendingChangesets}`);
      if (info.next) {
        console.log(`Next version (from changesets): ${info.next}`);
      }
      console.log(`Recommended for new icons: ${info.recommendedForNewIcons}`);
      break;
      
    case 'next':
      const next = utils.getNextVersionFromChangesets();
      console.log(next || 'No pending changesets found');
      break;
      
    case 'current':
      console.log(utils.getCurrentVersion());
      break;
      
    default:
      console.log('Version Utils');
      console.log('=============');
      console.log('');
      console.log('Usage: node version-utils.js <command>');
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
