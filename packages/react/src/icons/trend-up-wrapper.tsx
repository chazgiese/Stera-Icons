import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TrendUpIcon as TrendUpIconRegular } from './trend-up';
import { TrendUpIconBold } from './trend-up-bold';
import { TrendUpIconFilled } from './trend-up-filled';
import { TrendUpIconFilltone } from './trend-up-filltone';
import { TrendUpIconLinetone } from './trend-up-linetone';

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
    case 'filltone':
      return <TrendUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TrendUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TrendUpIconRegular ref={ref} {...props} />;
  }
}));

TrendUpIcon.displayName = 'TrendUpIcon';

export { TrendUpIcon };
