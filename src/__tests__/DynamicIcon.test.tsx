import { describe, it, expect } from 'vitest';
import { DynamicIcon, iconNames } from '../dynamic';

describe('DynamicIcon', () => {
  it('exports DynamicIcon component', () => {
    expect(DynamicIcon).toBeDefined();
    expect(typeof DynamicIcon).toBe('object');
  });

  it('exports iconNames array', () => {
    expect(Array.isArray(iconNames)).toBe(true);
    expect(iconNames.length).toBeGreaterThan(0);
  });

  it('iconNames contains expected icon entries', () => {
    // Check for some common icons
    expect(iconNames.some(name => name.includes('search'))).toBe(true);
    expect(iconNames.some(name => name.includes('home'))).toBe(true);
  });
});
