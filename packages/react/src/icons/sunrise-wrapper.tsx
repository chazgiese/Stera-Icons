import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SunriseIcon as RegularSunriseIcon } from './sunrise';
import { SunriseIconBold } from './sunrise-bold';
import { SunriseIconFilled } from './sunrise-filled';
import { SunriseIconFilltone } from './sunrise-filltone';
import { SunriseIconLinetone } from './sunrise-linetone';

export interface SunriseIconProps extends IconProps {
  variant?: IconVariant;
}

const SunriseIcon = memo(forwardRef<SVGSVGElement, SunriseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SunriseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SunriseIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SunriseIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SunriseIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSunriseIcon ref={ref} {...props} />;
  }
}));

SunriseIcon.displayName = 'SunriseIcon';

export { SunriseIcon };
