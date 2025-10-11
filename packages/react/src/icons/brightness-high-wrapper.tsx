import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessHighIcon as BrightnessHighIconRegular } from './brightness-high';
import { BrightnessHighIconBold } from './brightness-high-bold';
import { BrightnessHighIconFilled } from './brightness-high-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BrightnessHighIconRegular ref={ref} {...props} />;
  }
}));

BrightnessHighIcon.displayName = 'BrightnessHighIcon';

export { BrightnessHighIcon };
