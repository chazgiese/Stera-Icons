import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock1Icon as RegularClock1Icon } from './clock-1';
import { Clock1IconDuotone as Clock1IconDuotone } from './clock-1-duotone';
import { Clock1IconBold as Clock1IconBold } from './clock-1-bold';
import { Clock1IconBoldDuotone as Clock1IconBoldDuotone } from './clock-1-bold-duotone';
import { Clock1IconFill as Clock1IconFill } from './clock-1-fill';
import { Clock1IconFillDuotone as Clock1IconFillDuotone } from './clock-1-fill-duotone';

export interface Clock1IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock1Icon = memo(forwardRef<SVGSVGElement, Clock1IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock1IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock1IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock1IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock1IconFill ref={ref} {...props} />;
  if (duotone) return <Clock1IconDuotone ref={ref} {...props} />;
  return <RegularClock1Icon ref={ref} {...props} />;
}));

Clock1Icon.displayName = 'Clock1Icon';

export { Clock1Icon };
