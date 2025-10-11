import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrendUpIcon as TrendUpIconRegular } from './trend-up';
import { TrendUpIconBold } from './trend-up-bold';
import { TrendUpIconFilled } from './trend-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TrendUpIconProps extends IconProps {
  variant?: IconVariant;
}

const TrendUpIcon = memo(forwardRef<SVGSVGElement, TrendUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TrendUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TrendUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TrendUpIconRegular ref={ref} {...props} />;
  }
}));

TrendUpIcon.displayName = 'TrendUpIcon';

export { TrendUpIcon };
