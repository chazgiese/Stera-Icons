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
    metadata.forEach((icon: { id: string; name: string; weight: string; duotone: boolean; tags: string[]; componentName: string; fileName: string }) => {
      expect(icon).toHaveProperty('id');
      expect(icon.id).toMatch(/^[0-9a-f]{40}$/);
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

  it('should give every icon one id and every id one icon', () => {
    const metadata: { id: string; name: string }[] = JSON.parse(readFileSync(join(__dirname, '../../dist/icons.meta.json'), 'utf8'));
    const names = new Set(metadata.map(icon => icon.name));
    const ids = new Set(metadata.map(icon => icon.id));
    const pairs = new Set(metadata.map(icon => `${icon.id}|${icon.name}`));
    expect(ids.size).toBe(names.size);
    expect(pairs.size).toBe(names.size);
  });

});
