import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StarHalfIcon as StarHalfIconRegular } from './star-half';
import { StarHalfIconBold } from './star-half-bold';
import { StarHalfIconFilled } from './star-half-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface StarHalfIconProps extends IconProps {
  variant?: IconVariant;
}

const StarHalfIcon = memo(forwardRef<SVGSVGElement, StarHalfIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <StarHalfIconFilled ref={ref} {...props} />;
    case 'bold':
      return <StarHalfIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <StarHalfIconRegular ref={ref} {...props} />;
  }
}));

StarHalfIcon.displayName = 'StarHalfIcon';

export { StarHalfIcon };
