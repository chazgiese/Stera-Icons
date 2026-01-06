import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock6Icon as RegularClock6Icon } from './clock-6';
import { Clock6IconDuotone as Clock6IconDuotone } from './clock-6-duotone';
import { Clock6IconBold as Clock6IconBold } from './clock-6-bold';
import { Clock6IconBoldDuotone as Clock6IconBoldDuotone } from './clock-6-bold-duotone';
import { Clock6IconFill as Clock6IconFill } from './clock-6-fill';
import { Clock6IconFillDuotone as Clock6IconFillDuotone } from './clock-6-fill-duotone';

export interface Clock6IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock6Icon = memo(forwardRef<SVGSVGElement, Clock6IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock6IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock6IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock6IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock6IconFill ref={ref} {...props} />;
  if (duotone) return <Clock6IconDuotone ref={ref} {...props} />;
  return <RegularClock6Icon ref={ref} {...props} />;
}));

Clock6Icon.displayName = 'Clock6Icon';

export { Clock6Icon };
