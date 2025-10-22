import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrightnessHighIcon as RegularBrightnessHighIcon } from './brightness-high';
import { BrightnessHighIconBold } from './brightness-high-bold';
import { BrightnessHighIconFilled } from './brightness-high-filled';
import { BrightnessHighIconFilltone } from './brightness-high-filltone';
import { BrightnessHighIconLinetone } from './brightness-high-linetone';

export interface BrightnessHighIconProps extends IconProps {
  variant?: IconVariant;
}

const BrightnessHighIcon = memo(forwardRef<SVGSVGElement, BrightnessHighIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrightnessHighIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrightnessHighIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrightnessHighIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrightnessHighIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBrightnessHighIcon ref={ref} {...props} />;
  }
}));

BrightnessHighIcon.displayName = 'BrightnessHighIcon';

export { BrightnessHighIcon };
