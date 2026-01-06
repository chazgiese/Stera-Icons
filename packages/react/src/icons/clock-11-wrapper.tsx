import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock11Icon as RegularClock11Icon } from './clock-11';
import { Clock11IconDuotone as Clock11IconDuotone } from './clock-11-duotone';
import { Clock11IconBold as Clock11IconBold } from './clock-11-bold';
import { Clock11IconBoldDuotone as Clock11IconBoldDuotone } from './clock-11-bold-duotone';
import { Clock11IconFill as Clock11IconFill } from './clock-11-fill';
import { Clock11IconFillDuotone as Clock11IconFillDuotone } from './clock-11-fill-duotone';

export interface Clock11IconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Clock11Icon = memo(forwardRef<SVGSVGElement, Clock11IconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock11IconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Clock11IconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Clock11IconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Clock11IconFill ref={ref} {...props} />;
  if (duotone) return <Clock11IconDuotone ref={ref} {...props} />;
  return <RegularClock11Icon ref={ref} {...props} />;
}));

Clock11Icon.displayName = 'Clock11Icon';

export { Clock11Icon };
