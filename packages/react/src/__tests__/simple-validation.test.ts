import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Simple Validation', () => {
  it('should have metadata files', () => {
    // Check if metadata files exist in the dist directory
    const distDir = join(__dirname, '../../dist');
    const metadataPath = join(distDir, 'icons.meta.json');
    
    expect(existsSync(metadataPath)).toBe(true);
  });

  it('should have valid metadata content', () => {
    const metadataPath = join(__dirname, '../../dist/icons.meta.json');
    const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
    
    expect(Array.isArray(metadata)).toBe(true);
    expect(metadata.length).toBeGreaterThan(0);
    
    // Check first item structure
    const firstIcon = metadata[0];
    expect(firstIcon).toHaveProperty('name');
    expect(firstIcon).toHaveProperty('variant');
    expect(firstIcon).toHaveProperty('tags');
    expect(firstIcon).toHaveProperty('componentName');
    expect(firstIcon).toHaveProperty('fileName');
  });

});
