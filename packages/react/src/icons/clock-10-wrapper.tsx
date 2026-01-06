import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock10Icon as RegularClock10Icon } from './clock-10';
import { Clock10IconDuotone as Clock10IconDuotone } from './clock-10-duotone';
import { Clock10IconBold as Clock10IconBold } from './clock-10-bold';
import { Clock10IconBoldDuotone as Clock10IconBoldDuotone } from './clock-10-bold-duotone';
import { Clock10IconFill as Clock10IconFill } from './clock-10-fill';
import { Clock10IconFillDuotone as Clock10IconFillDuotone } from './clock-10-fill-duotone';

export interface Clock10IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock10Icon = memo(forwardRef<SVGSVGElement, Clock10IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock10IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock10IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock10IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock10IconFill ref={ref} {...props} />;
  if (duotone) return <Clock10IconDuotone ref={ref} {...props} />;
  return <RegularClock10Icon ref={ref} {...props} />;
}));

Clock10Icon.displayName = 'Clock10Icon';

export { Clock10Icon };
