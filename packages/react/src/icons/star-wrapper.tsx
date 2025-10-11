import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StarIcon as StarIconRegular } from './star';
import { StarIconBold } from './star-bold';
import { StarIconFilled } from './star-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface StarIconProps extends IconProps {
  variant?: IconVariant;
}

const StarIcon = memo(forwardRef<SVGSVGElement, StarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <StarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <StarIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <StarIconRegular ref={ref} {...props} />;
  }
}));

StarIcon.displayName = 'StarIcon';

export { StarIcon };
