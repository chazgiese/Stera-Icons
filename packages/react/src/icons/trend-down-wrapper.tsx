import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TrendDownIcon as TrendDownIconRegular } from './trend-down';
import { TrendDownIconBold } from './trend-down-bold';
import { TrendDownIconFilled } from './trend-down-filled';
import { TrendDownIconFilltone } from './trend-down-filltone';
import { TrendDownIconLinetone } from './trend-down-linetone';

export interface TrendDownIconProps extends IconProps {
  variant?: IconVariant;
}

const TrendDownIcon = memo(forwardRef<SVGSVGElement, TrendDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TrendDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TrendDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TrendDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TrendDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TrendDownIconRegular ref={ref} {...props} />;
  }
}));

TrendDownIcon.displayName = 'TrendDownIcon';

export { TrendDownIcon };
