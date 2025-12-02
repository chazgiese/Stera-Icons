import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoonStarIcon as RegularMoonStarIcon } from './moon-star';
import { MoonStarIconBold } from './moon-star-bold';
import { MoonStarIconFilled } from './moon-star-filled';
import { MoonStarIconFilltone } from './moon-star-filltone';
import { MoonStarIconLinetone } from './moon-star-linetone';

export interface MoonStarIconProps extends IconProps {
  variant?: IconVariant;
}

const MoonStarIcon = memo(forwardRef<SVGSVGElement, MoonStarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoonStarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoonStarIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MoonStarIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoonStarIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMoonStarIcon ref={ref} {...props} />;
  }
}));

MoonStarIcon.displayName = 'MoonStarIcon';

export { MoonStarIcon };
