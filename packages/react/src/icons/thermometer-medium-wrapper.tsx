import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ThermometerMediumIcon as ThermometerMediumIconRegular } from './thermometer-medium';
import { ThermometerMediumIconBold } from './thermometer-medium-bold';
import { ThermometerMediumIconFilled } from './thermometer-medium-filled';
import { ThermometerMediumIconFilltone } from './thermometer-medium-filltone';
import { ThermometerMediumIconLinetone } from './thermometer-medium-linetone';

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
    case 'filltone':
      return <ThermometerMediumIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ThermometerMediumIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ThermometerMediumIconRegular ref={ref} {...props} />;
  }
}));

ThermometerMediumIcon.displayName = 'ThermometerMediumIcon';

export { ThermometerMediumIcon };
