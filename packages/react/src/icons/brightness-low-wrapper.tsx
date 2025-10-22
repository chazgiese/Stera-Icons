import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrightnessLowIcon as RegularBrightnessLowIcon } from './brightness-low';
import { BrightnessLowIconBold } from './brightness-low-bold';
import { BrightnessLowIconFilled } from './brightness-low-filled';
import { BrightnessLowIconFilltone } from './brightness-low-filltone';
import { BrightnessLowIconLinetone } from './brightness-low-linetone';

export interface BrightnessLowIconProps extends IconProps {
  variant?: IconVariant;
}

const BrightnessLowIcon = memo(forwardRef<SVGSVGElement, BrightnessLowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrightnessLowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrightnessLowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrightnessLowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrightnessLowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBrightnessLowIcon ref={ref} {...props} />;
  }
}));

BrightnessLowIcon.displayName = 'BrightnessLowIcon';

export { BrightnessLowIcon };
