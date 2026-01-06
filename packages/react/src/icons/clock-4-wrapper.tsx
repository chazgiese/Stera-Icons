import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock4Icon as RegularClock4Icon } from './clock-4';
import { Clock4IconDuotone as Clock4IconDuotone } from './clock-4-duotone';
import { Clock4IconBold as Clock4IconBold } from './clock-4-bold';
import { Clock4IconBoldDuotone as Clock4IconBoldDuotone } from './clock-4-bold-duotone';
import { Clock4IconFill as Clock4IconFill } from './clock-4-fill';
import { Clock4IconFillDuotone as Clock4IconFillDuotone } from './clock-4-fill-duotone';

export interface Clock4IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock4Icon = memo(forwardRef<SVGSVGElement, Clock4IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock4IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock4IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock4IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock4IconFill ref={ref} {...props} />;
  if (duotone) return <Clock4IconDuotone ref={ref} {...props} />;
  return <RegularClock4Icon ref={ref} {...props} />;
}));

Clock4Icon.displayName = 'Clock4Icon';

export { Clock4Icon };
