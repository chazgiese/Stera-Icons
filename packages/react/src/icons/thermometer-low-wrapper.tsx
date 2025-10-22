import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ThermometerLowIcon as RegularThermometerLowIcon } from './thermometer-low';
import { ThermometerLowIconBold } from './thermometer-low-bold';
import { ThermometerLowIconFilled } from './thermometer-low-filled';
import { ThermometerLowIconFilltone } from './thermometer-low-filltone';
import { ThermometerLowIconLinetone } from './thermometer-low-linetone';

export interface ThermometerLowIconProps extends IconProps {
  variant?: IconVariant;
}

const ThermometerLowIcon = memo(forwardRef<SVGSVGElement, ThermometerLowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ThermometerLowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ThermometerLowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ThermometerLowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ThermometerLowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularThermometerLowIcon ref={ref} {...props} />;
  }
}));

ThermometerLowIcon.displayName = 'ThermometerLowIcon';

export { ThermometerLowIcon };
