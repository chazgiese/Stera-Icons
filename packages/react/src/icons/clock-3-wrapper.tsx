import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock3Icon as RegularClock3Icon } from './clock-3';
import { Clock3IconDuotone as Clock3IconDuotone } from './clock-3-duotone';
import { Clock3IconBold as Clock3IconBold } from './clock-3-bold';
import { Clock3IconBoldDuotone as Clock3IconBoldDuotone } from './clock-3-bold-duotone';
import { Clock3IconFill as Clock3IconFill } from './clock-3-fill';
import { Clock3IconFillDuotone as Clock3IconFillDuotone } from './clock-3-fill-duotone';

export interface Clock3IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock3Icon = memo(forwardRef<SVGSVGElement, Clock3IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock3IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock3IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock3IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock3IconFill ref={ref} {...props} />;
  if (duotone) return <Clock3IconDuotone ref={ref} {...props} />;
  return <RegularClock3Icon ref={ref} {...props} />;
}));

Clock3Icon.displayName = 'Clock3Icon';

export { Clock3Icon };
