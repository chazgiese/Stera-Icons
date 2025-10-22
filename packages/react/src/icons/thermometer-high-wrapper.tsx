import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ThermometerHighIcon as ThermometerHighIconRegular } from './thermometer-high';
import { ThermometerHighIconBold } from './thermometer-high-bold';
import { ThermometerHighIconFilled } from './thermometer-high-filled';
import { ThermometerHighIconFilltone } from './thermometer-high-filltone';
import { ThermometerHighIconLinetone } from './thermometer-high-linetone';

export interface ThermometerHighIconProps extends IconProps {
  variant?: IconVariant;
}

const ThermometerHighIcon = memo(forwardRef<SVGSVGElement, ThermometerHighIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ThermometerHighIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ThermometerHighIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ThermometerHighIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ThermometerHighIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ThermometerHighIconRegular ref={ref} {...props} />;
  }
}));

ThermometerHighIcon.displayName = 'ThermometerHighIcon';

export { ThermometerHighIcon };
