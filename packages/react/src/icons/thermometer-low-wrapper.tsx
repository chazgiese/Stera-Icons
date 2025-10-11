import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThermometerLowIcon as ThermometerLowIconRegular } from './thermometer-low';
import { ThermometerLowIconBold } from './thermometer-low-bold';
import { ThermometerLowIconFilled } from './thermometer-low-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ThermometerLowIconRegular ref={ref} {...props} />;
  }
}));

ThermometerLowIcon.displayName = 'ThermometerLowIcon';

export { ThermometerLowIcon };
