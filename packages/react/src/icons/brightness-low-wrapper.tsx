import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessLowIcon as BrightnessLowIconRegular } from './brightness-low';
import { BrightnessLowIconBold } from './brightness-low-bold';
import { BrightnessLowIconFilled } from './brightness-low-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BrightnessLowIconRegular ref={ref} {...props} />;
  }
}));

BrightnessLowIcon.displayName = 'BrightnessLowIcon';

export { BrightnessLowIcon };
