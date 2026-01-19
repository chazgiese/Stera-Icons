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
    metadata.forEach((icon: { name: string; weight: string; duotone: boolean; tags: string[]; componentName: string; fileName: string }) => {
      expect(icon).toHaveProperty('name');
      expect(icon).toHaveProperty('weight');
      expect(icon).toHaveProperty('duotone');
      expect(icon).toHaveProperty('tags');
      expect(icon).toHaveProperty('componentName');
      expect(icon).toHaveProperty('fileName');
      
      expect(['regular', 'bold', 'fill']).toContain(icon.weight);
      expect(typeof icon.duotone).toBe('boolean');
      expect(Array.isArray(icon.tags)).toBe(true);
      expect(typeof icon.name).toBe('string');
      expect(typeof icon.componentName).toBe('string');
      expect(typeof icon.fileName).toBe('string');
    });
  });

});
