import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock2Icon as RegularClock2Icon } from './clock-2';
import { Clock2IconDuotone as Clock2IconDuotone } from './clock-2-duotone';
import { Clock2IconBold as Clock2IconBold } from './clock-2-bold';
import { Clock2IconBoldDuotone as Clock2IconBoldDuotone } from './clock-2-bold-duotone';
import { Clock2IconFill as Clock2IconFill } from './clock-2-fill';
import { Clock2IconFillDuotone as Clock2IconFillDuotone } from './clock-2-fill-duotone';

export interface Clock2IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock2Icon = memo(forwardRef<SVGSVGElement, Clock2IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock2IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock2IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock2IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock2IconFill ref={ref} {...props} />;
  if (duotone) return <Clock2IconDuotone ref={ref} {...props} />;
  return <RegularClock2Icon ref={ref} {...props} />;
}));

Clock2Icon.displayName = 'Clock2Icon';

export { Clock2Icon };
