import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Simple Validation', () => {
  it('should have metadata files', () => {
    // Check if metadata files exist in the dist directory
    const distDir = join(__dirname, '../../dist');
    const metadataPath = join(distDir, 'icons.meta.json');
    const mappingPath = join(distDir, 'name_map.json');
    
    console.log('Checking metadata file at:', metadataPath);
    console.log('Metadata exists:', existsSync(metadataPath));
    
    console.log('Checking mapping file at:', mappingPath);
    console.log('Mapping exists:', existsSync(mappingPath));
    
    expect(existsSync(metadataPath)).toBe(true);
    expect(existsSync(mappingPath)).toBe(true);
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

  it('should have valid name mapping content', () => {
    const mappingPath = join(__dirname, '../../dist/name_map.json');
    const mapping = JSON.parse(readFileSync(mappingPath, 'utf8'));
    
    expect(typeof mapping).toBe('object');
    expect(Object.keys(mapping).length).toBeGreaterThan(0);
    
    // Check first mapping entry
    const [original, normalized] = Object.entries(mapping)[0];
    expect(typeof original).toBe('string');
    expect(typeof normalized).toBe('string');
    expect(normalized).toMatch(/^[a-z0-9-]+$/);
  });
});
