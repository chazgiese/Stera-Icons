import { forwardRef, memo, ReactNode } from 'react';
import type { IconProps } from './types';
import { mergeClasses, hasA11yProp } from './utils';

export interface IconBaseProps extends Omit<IconProps, 'weight' | 'duotone'> {
  children: ReactNode;
  /**
   * Internal prop for icon identification.
   * Used to generate icon-specific CSS classes for easier styling and debugging.
   * @internal
   */
  iconName?: string;
}

/**
 * Shared base component for all icons.
 * Handles common SVG wrapper logic to reduce bundle size.
 * 
 * Features:
 * - Automatic className merging with 'stera' base class
 * - Auto aria-hidden="true" for decorative icons (when no a11y props present)
 * - Consistent sizing and color handling
 */
const IconBase = memo(
  forwardRef<SVGSVGElement, IconBaseProps>(
    (
      {
        size = 24,
        color = 'currentColor',
        className,
        'aria-label': ariaLabel,
        'aria-hidden': ariaHidden,
        children,
        iconName,
        ...props
      },
      ref
    ) => {
      // Automatically set aria-hidden="true" for decorative icons
      // (when no accessibility props are provided)
      const computedAriaHidden = ariaHidden !== undefined 
        ? ariaHidden 
        : !hasA11yProp({ 'aria-label': ariaLabel, ...props });

      // Build icon-specific class names for easier CSS targeting
      // e.g., "stera stera-search stera-search-bold"
      const iconClasses = iconName 
        ? mergeClasses('stera', `stera-${iconName}`, className)
        : mergeClasses('stera', className);

      return (
        <svg
          fill={color}
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={iconClasses}
          aria-label={ariaLabel}
          aria-hidden={computedAriaHidden}
          ref={ref}
          {...props}
        >
          {children}
        </svg>
      );
    }
  )
);

IconBase.displayName = 'IconBase';

export { IconBase };
