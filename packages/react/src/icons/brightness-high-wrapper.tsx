import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessHighIcon as RegularBrightnessHighIcon } from './brightness-high';
import { BrightnessHighIconDuotone as BrightnessHighIconDuotone } from './brightness-high-duotone';
import { BrightnessHighIconBold as BrightnessHighIconBold } from './brightness-high-bold';
import { BrightnessHighIconBoldDuotone as BrightnessHighIconBoldDuotone } from './brightness-high-bold-duotone';
import { BrightnessHighIconFill as BrightnessHighIconFill } from './brightness-high-fill';
import { BrightnessHighIconFillDuotone as BrightnessHighIconFillDuotone } from './brightness-high-fill-duotone';

export interface BrightnessHighIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrightnessHighIcon = memo(forwardRef<SVGSVGElement, BrightnessHighIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrightnessHighIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrightnessHighIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrightnessHighIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrightnessHighIconFill ref={ref} {...props} />;
  if (duotone) return <BrightnessHighIconDuotone ref={ref} {...props} />;
  return <RegularBrightnessHighIcon ref={ref} {...props} />;
}));

BrightnessHighIcon.displayName = 'BrightnessHighIcon';

export { BrightnessHighIcon };
