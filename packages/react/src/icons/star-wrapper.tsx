import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { StarIcon as StarIconRegular } from './star';
import { StarIconBold } from './star-bold';
import { StarIconFilled } from './star-filled';
import { StarIconFilltone } from './star-filltone';
import { StarIconLinetone } from './star-linetone';

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
    case 'filltone':
      return <StarIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <StarIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <StarIconRegular ref={ref} {...props} />;
  }
}));

StarIcon.displayName = 'StarIcon';

export { StarIcon };
