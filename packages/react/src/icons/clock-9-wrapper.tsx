import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock9Icon as RegularClock9Icon } from './clock-9';
import { Clock9IconDuotone as Clock9IconDuotone } from './clock-9-duotone';
import { Clock9IconBold as Clock9IconBold } from './clock-9-bold';
import { Clock9IconBoldDuotone as Clock9IconBoldDuotone } from './clock-9-bold-duotone';
import { Clock9IconFill as Clock9IconFill } from './clock-9-fill';
import { Clock9IconFillDuotone as Clock9IconFillDuotone } from './clock-9-fill-duotone';

export interface Clock9IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock9Icon = memo(forwardRef<SVGSVGElement, Clock9IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock9IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock9IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock9IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock9IconFill ref={ref} {...props} />;
  if (duotone) return <Clock9IconDuotone ref={ref} {...props} />;
  return <RegularClock9Icon ref={ref} {...props} />;
}));

Clock9Icon.displayName = 'Clock9Icon';

export { Clock9Icon };
