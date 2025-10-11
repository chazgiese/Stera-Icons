import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AwardStarIcon as AwardStarIconRegular } from './award-star';
import { AwardStarIconBold } from './award-star-bold';
import { AwardStarIconFilled } from './award-star-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AwardStarIconProps extends IconProps {
  variant?: IconVariant;
}

const AwardStarIcon = memo(forwardRef<SVGSVGElement, AwardStarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AwardStarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AwardStarIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AwardStarIconRegular ref={ref} {...props} />;
  }
}));

AwardStarIcon.displayName = 'AwardStarIcon';

export { AwardStarIcon };
