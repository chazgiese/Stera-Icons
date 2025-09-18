import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Icon Validation', () => {
  it('should have valid metadata file', () => {
    const metadataPath = join(__dirname, '../../dist/icons.meta.json');
    expect(existsSync(metadataPath)).toBe(true);
    
    const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
    expect(Array.isArray(metadata)).toBe(true);
    
    // Validate metadata structure
    metadata.forEach((icon: { name: string; variant: string; tags: string[]; componentName: string; fileName: string }) => {
      expect(icon).toHaveProperty('name');
      expect(icon).toHaveProperty('variant');
      expect(icon).toHaveProperty('tags');
      expect(icon).toHaveProperty('componentName');
      expect(icon).toHaveProperty('fileName');
      
      expect(['bold', 'filled', 'regular']).toContain(icon.variant);
      expect(Array.isArray(icon.tags)).toBe(true);
      expect(typeof icon.name).toBe('string');
      expect(typeof icon.componentName).toBe('string');
      expect(typeof icon.fileName).toBe('string');
    });
  });

  it('should have valid name mapping file', () => {
    const mappingPath = join(__dirname, '../../dist/name_map.json');
    expect(existsSync(mappingPath)).toBe(true);
    
    const mapping = JSON.parse(readFileSync(mappingPath, 'utf8'));
    expect(typeof mapping).toBe('object');
    
    // Validate mapping structure
    Object.entries(mapping).forEach(([original, normalized]) => {
      expect(typeof original).toBe('string');
      expect(typeof normalized).toBe('string');
      expect(normalized).toMatch(/^[a-z0-9-]+$/); // Should be normalized slug
    });
  });
});
