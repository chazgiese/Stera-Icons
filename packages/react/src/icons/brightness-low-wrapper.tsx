import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessLowIcon as RegularBrightnessLowIcon } from './brightness-low';
import { BrightnessLowIconDuotone as BrightnessLowIconDuotone } from './brightness-low-duotone';
import { BrightnessLowIconBold as BrightnessLowIconBold } from './brightness-low-bold';
import { BrightnessLowIconBoldDuotone as BrightnessLowIconBoldDuotone } from './brightness-low-bold-duotone';
import { BrightnessLowIconFill as BrightnessLowIconFill } from './brightness-low-fill';
import { BrightnessLowIconFillDuotone as BrightnessLowIconFillDuotone } from './brightness-low-fill-duotone';

export interface BrightnessLowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrightnessLowIcon = memo(forwardRef<SVGSVGElement, BrightnessLowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrightnessLowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrightnessLowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrightnessLowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrightnessLowIconFill ref={ref} {...props} />;
  if (duotone) return <BrightnessLowIconDuotone ref={ref} {...props} />;
  return <RegularBrightnessLowIcon ref={ref} {...props} />;
}));

BrightnessLowIcon.displayName = 'BrightnessLowIcon';

export { BrightnessLowIcon };
