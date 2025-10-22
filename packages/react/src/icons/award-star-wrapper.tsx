import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AwardStarIcon as RegularAwardStarIcon } from './award-star';
import { AwardStarIconBold } from './award-star-bold';
import { AwardStarIconFilled } from './award-star-filled';
import { AwardStarIconFilltone } from './award-star-filltone';
import { AwardStarIconLinetone } from './award-star-linetone';

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
    case 'filltone':
      return <AwardStarIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AwardStarIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAwardStarIcon ref={ref} {...props} />;
  }
}));

AwardStarIcon.displayName = 'AwardStarIcon';

export { AwardStarIcon };
