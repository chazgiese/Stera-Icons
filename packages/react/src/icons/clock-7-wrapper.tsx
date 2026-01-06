import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock7Icon as RegularClock7Icon } from './clock-7';
import { Clock7IconDuotone as Clock7IconDuotone } from './clock-7-duotone';
import { Clock7IconBold as Clock7IconBold } from './clock-7-bold';
import { Clock7IconBoldDuotone as Clock7IconBoldDuotone } from './clock-7-bold-duotone';
import { Clock7IconFill as Clock7IconFill } from './clock-7-fill';
import { Clock7IconFillDuotone as Clock7IconFillDuotone } from './clock-7-fill-duotone';

export interface Clock7IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock7Icon = memo(forwardRef<SVGSVGElement, Clock7IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock7IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock7IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock7IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock7IconFill ref={ref} {...props} />;
  if (duotone) return <Clock7IconDuotone ref={ref} {...props} />;
  return <RegularClock7Icon ref={ref} {...props} />;
}));

Clock7Icon.displayName = 'Clock7Icon';

export { Clock7Icon };
