import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock8Icon as RegularClock8Icon } from './clock-8';
import { Clock8IconDuotone as Clock8IconDuotone } from './clock-8-duotone';
import { Clock8IconBold as Clock8IconBold } from './clock-8-bold';
import { Clock8IconBoldDuotone as Clock8IconBoldDuotone } from './clock-8-bold-duotone';
import { Clock8IconFill as Clock8IconFill } from './clock-8-fill';
import { Clock8IconFillDuotone as Clock8IconFillDuotone } from './clock-8-fill-duotone';

export interface Clock8IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock8Icon = memo(forwardRef<SVGSVGElement, Clock8IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock8IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock8IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock8IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock8IconFill ref={ref} {...props} />;
  if (duotone) return <Clock8IconDuotone ref={ref} {...props} />;
  return <RegularClock8Icon ref={ref} {...props} />;
}));

Clock8Icon.displayName = 'Clock8Icon';

export { Clock8Icon };
