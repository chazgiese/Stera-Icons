import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FootballIcon as FootballIconRegular } from './football';
import { FootballIconBold } from './football-bold';
import { FootballIconFilled } from './football-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FootballIconRegular ref={ref} {...props} />;
  }
}));

FootballIcon.displayName = 'FootballIcon';

export { FootballIcon };
