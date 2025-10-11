import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThermometerMediumIcon as ThermometerMediumIconRegular } from './thermometer-medium';
import { ThermometerMediumIconBold } from './thermometer-medium-bold';
import { ThermometerMediumIconFilled } from './thermometer-medium-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ThermometerMediumIconProps extends IconProps {
  variant?: IconVariant;
}

const ThermometerMediumIcon = memo(forwardRef<SVGSVGElement, ThermometerMediumIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ThermometerMediumIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ThermometerMediumIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ThermometerMediumIconRegular ref={ref} {...props} />;
  }
}));

ThermometerMediumIcon.displayName = 'ThermometerMediumIcon';

export { ThermometerMediumIcon };
