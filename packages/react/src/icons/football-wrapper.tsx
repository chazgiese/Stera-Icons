import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FootballIcon as RegularFootballIcon } from './football';
import { FootballIconBold } from './football-bold';
import { FootballIconFilled } from './football-filled';
import { FootballIconFilltone } from './football-filltone';
import { FootballIconLinetone } from './football-linetone';

export interface FootballIconProps extends IconProps {
  variant?: IconVariant;
}

const FootballIcon = memo(forwardRef<SVGSVGElement, FootballIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FootballIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FootballIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FootballIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FootballIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFootballIcon ref={ref} {...props} />;
  }
}));

FootballIcon.displayName = 'FootballIcon';

export { FootballIcon };
