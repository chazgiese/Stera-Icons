import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MedalStarIcon as RegularMedalStarIcon } from './medal-star';
import { MedalStarIconBold } from './medal-star-bold';
import { MedalStarIconFilled } from './medal-star-filled';
import { MedalStarIconFilltone } from './medal-star-filltone';
import { MedalStarIconLinetone } from './medal-star-linetone';

export interface MedalStarIconProps extends IconProps {
  variant?: IconVariant;
}

const MedalStarIcon = memo(forwardRef<SVGSVGElement, MedalStarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MedalStarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MedalStarIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MedalStarIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MedalStarIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMedalStarIcon ref={ref} {...props} />;
  }
}));

MedalStarIcon.displayName = 'MedalStarIcon';

export { MedalStarIcon };
