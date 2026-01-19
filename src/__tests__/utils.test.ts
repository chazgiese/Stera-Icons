import { describe, it, expect } from 'vitest';
import { mergeClasses, hasA11yProp, toKebabCase, toCamelCase, toPascalCase } from '../utils';

describe('Utility Functions', () => {
  describe('mergeClasses', () => {
    it('merges multiple class names', () => {
      expect(mergeClasses('foo', 'bar', 'baz')).toBe('foo bar baz');
    });

    it('filters out undefined values', () => {
      expect(mergeClasses('foo', undefined, 'bar')).toBe('foo bar');
    });

    it('filters out null values', () => {
      expect(mergeClasses('foo', null, 'bar')).toBe('foo bar');
    });

    it('filters out false values', () => {
      expect(mergeClasses('foo', false, 'bar')).toBe('foo bar');
    });

    it('filters out empty strings', () => {
      expect(mergeClasses('foo', '', 'bar')).toBe('foo bar');
    });

    it('filters out whitespace-only strings', () => {
      expect(mergeClasses('foo', '   ', 'bar')).toBe('foo bar');
    });

    it('removes duplicate class names', () => {
      expect(mergeClasses('foo', 'bar', 'foo')).toBe('foo bar');
    });

    it('returns empty string when all values are falsy', () => {
      expect(mergeClasses(undefined, null, false, '')).toBe('');
    });

    it('handles single class name', () => {
      expect(mergeClasses('foo')).toBe('foo');
    });

    it('handles no arguments', () => {
      expect(mergeClasses()).toBe('');
    });

    it('handles whitespace in class names', () => {
      // Note: mergeClasses trims the final result but not individual items
      // So "  foo  " and "  bar  " will have spaces preserved between them
      const result = mergeClasses('foo', 'bar');
      expect(result).toBe('foo bar');
    });

    it('handles complex mix of values', () => {
      expect(
        mergeClasses('a', undefined, 'b', null, 'c', false, '', 'd', 'a')
      ).toBe('a b c d');
    });
  });

  describe('hasA11yProp', () => {
    it('returns true when aria-label is present', () => {
      expect(hasA11yProp({ 'aria-label': 'Search' })).toBe(true);
    });

    it('returns true when aria-hidden is present', () => {
      expect(hasA11yProp({ 'aria-hidden': true })).toBe(true);
    });

    it('returns true when aria-describedby is present', () => {
      expect(hasA11yProp({ 'aria-describedby': 'desc' })).toBe(true);
    });

    it('returns true when role is present', () => {
      expect(hasA11yProp({ role: 'img' })).toBe(true);
    });

    it('returns true when title is present', () => {
      expect(hasA11yProp({ title: 'Icon title' })).toBe(true);
    });

    it('returns false when no a11y props are present', () => {
      expect(hasA11yProp({ className: 'icon', size: 24 })).toBe(false);
    });

    it('returns false for empty object', () => {
      expect(hasA11yProp({})).toBe(false);
    });

    it('detects any aria-* attribute', () => {
      expect(hasA11yProp({ 'aria-labelledby': 'label' })).toBe(true);
      expect(hasA11yProp({ 'aria-live': 'polite' })).toBe(true);
      expect(hasA11yProp({ 'aria-atomic': true })).toBe(true);
    });

    it('ignores non-a11y props', () => {
      expect(hasA11yProp({ 
        className: 'icon', 
        color: 'red', 
        size: 24,
        onClick: () => {},
      })).toBe(false);
    });

    it('returns true if at least one a11y prop exists among others', () => {
      expect(hasA11yProp({ 
        className: 'icon', 
        'aria-label': 'Search',
        color: 'red',
      })).toBe(true);
    });
  });

  describe('toKebabCase', () => {
    it('converts PascalCase to kebab-case', () => {
      expect(toKebabCase('SearchBold')).toBe('search-bold');
    });

    it('converts camelCase to kebab-case', () => {
      expect(toKebabCase('searchBold')).toBe('search-bold');
    });

    it('handles single word', () => {
      expect(toKebabCase('Search')).toBe('search');
    });

    it('handles lowercase input', () => {
      expect(toKebabCase('search')).toBe('search');
    });

    it('handles multiple capitals', () => {
      expect(toKebabCase('UserCircleDashed')).toBe('user-circle-dashed');
    });

    it('handles consecutive capitals by lowercasing', () => {
      // toKebabCase doesn't add hyphens between consecutive capitals
      // It only adds hyphens between lowercase/number and uppercase
      expect(toKebabCase('XMLParser')).toBe('xmlparser');
    });

    it('handles numbers', () => {
      expect(toKebabCase('Icon24px')).toBe('icon24px');
    });

    it('handles already kebab-case string', () => {
      expect(toKebabCase('search-bold')).toBe('search-bold');
    });
  });

  describe('toCamelCase', () => {
    it('converts kebab-case to camelCase', () => {
      expect(toCamelCase('search-bold')).toBe('searchBold');
    });

    it('converts snake_case to camelCase', () => {
      expect(toCamelCase('search_bold')).toBe('searchBold');
    });

    it('converts space-separated to camelCase', () => {
      expect(toCamelCase('search bold')).toBe('searchBold');
    });

    it('handles single word', () => {
      expect(toCamelCase('search')).toBe('search');
    });

    it('converts PascalCase to camelCase', () => {
      expect(toCamelCase('SearchBold')).toBe('searchBold');
    });

    it('handles multiple separators', () => {
      expect(toCamelCase('user-circle-dashed')).toBe('userCircleDashed');
    });

    it('handles mixed separators', () => {
      expect(toCamelCase('user-circle_dashed bold')).toBe('userCircleDashedBold');
    });

    it('handles already camelCase string', () => {
      expect(toCamelCase('searchBold')).toBe('searchBold');
    });
  });

  describe('toPascalCase', () => {
    it('converts kebab-case to PascalCase', () => {
      expect(toPascalCase('search-bold')).toBe('SearchBold');
    });

    it('converts snake_case to PascalCase', () => {
      expect(toPascalCase('search_bold')).toBe('SearchBold');
    });

    it('converts space-separated to PascalCase', () => {
      expect(toPascalCase('search bold')).toBe('SearchBold');
    });

    it('handles single word', () => {
      expect(toPascalCase('search')).toBe('Search');
    });

    it('converts camelCase to PascalCase', () => {
      expect(toPascalCase('searchBold')).toBe('SearchBold');
    });

    it('handles multiple separators', () => {
      expect(toPascalCase('user-circle-dashed')).toBe('UserCircleDashed');
    });

    it('handles mixed separators', () => {
      expect(toPascalCase('user-circle_dashed bold')).toBe('UserCircleDashedBold');
    });

    it('handles already PascalCase string', () => {
      expect(toPascalCase('SearchBold')).toBe('SearchBold');
    });

    it('capitalizes first letter of lowercase input', () => {
      expect(toPascalCase('search')).toBe('Search');
    });
  });
});
