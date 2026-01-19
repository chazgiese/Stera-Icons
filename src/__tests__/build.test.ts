import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Build Process', () => {
  it('should have generated icon components', () => {
    const iconsDir = join(__dirname, '../icons');
    expect(existsSync(iconsDir)).toBe(true);
  });

  it('should have generated index file', () => {
    const indexPath = join(__dirname, '../index.ts');
    expect(existsSync(indexPath)).toBe(true);
    
    const indexContent = readFileSync(indexPath, 'utf8');
    expect(indexContent).toContain('export');
  });

  it('should have types file', () => {
    const typesPath = join(__dirname, '../types.ts');
    expect(existsSync(typesPath)).toBe(true);
    
    const typesContent = readFileSync(typesPath, 'utf8');
    expect(typesContent).toContain('IconProps');
  });
});
