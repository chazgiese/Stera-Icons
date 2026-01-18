import { forwardRef, memo, ReactNode } from 'react';
import type { IconProps } from './types';

export interface IconBaseProps extends Omit<IconProps, 'weight' | 'duotone'> {
  children: ReactNode;
}

/**
 * Shared base component for all icons.
 * Handles common SVG wrapper logic to reduce bundle size.
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
        ...props
      },
      ref
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        {children}
      </svg>
    )
  )
);

IconBase.displayName = 'IconBase';

export { IconBase };
