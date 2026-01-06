import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock12Icon as RegularClock12Icon } from './clock-12';
import { Clock12IconDuotone as Clock12IconDuotone } from './clock-12-duotone';
import { Clock12IconBold as Clock12IconBold } from './clock-12-bold';
import { Clock12IconBoldDuotone as Clock12IconBoldDuotone } from './clock-12-bold-duotone';
import { Clock12IconFill as Clock12IconFill } from './clock-12-fill';
import { Clock12IconFillDuotone as Clock12IconFillDuotone } from './clock-12-fill-duotone';

export interface Clock12IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock12Icon = memo(forwardRef<SVGSVGElement, Clock12IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock12IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock12IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock12IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock12IconFill ref={ref} {...props} />;
  if (duotone) return <Clock12IconDuotone ref={ref} {...props} />;
  return <RegularClock12Icon ref={ref} {...props} />;
}));

Clock12Icon.displayName = 'Clock12Icon';

export { Clock12Icon };
