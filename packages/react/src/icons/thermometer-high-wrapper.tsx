import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThermometerHighIcon as ThermometerHighIconRegular } from './thermometer-high';
import { ThermometerHighIconBold } from './thermometer-high-bold';
import { ThermometerHighIconFilled } from './thermometer-high-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ThermometerHighIconRegular ref={ref} {...props} />;
  }
}));

ThermometerHighIcon.displayName = 'ThermometerHighIcon';

export { ThermometerHighIcon };
