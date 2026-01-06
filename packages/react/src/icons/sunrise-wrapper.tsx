import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SunriseIcon as RegularSunriseIcon } from './sunrise';
import { SunriseIconDuotone as SunriseIconDuotone } from './sunrise-duotone';
import { SunriseIconBold as SunriseIconBold } from './sunrise-bold';
import { SunriseIconBoldDuotone as SunriseIconBoldDuotone } from './sunrise-bold-duotone';
import { SunriseIconFill as SunriseIconFill } from './sunrise-fill';
import { SunriseIconFillDuotone as SunriseIconFillDuotone } from './sunrise-fill-duotone';

export interface SunriseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SunriseIcon = memo(forwardRef<SVGSVGElement, SunriseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SunriseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SunriseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SunriseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SunriseIconFill ref={ref} {...props} />;
  if (duotone) return <SunriseIconDuotone ref={ref} {...props} />;
  return <RegularSunriseIcon ref={ref} {...props} />;
}));

SunriseIcon.displayName = 'SunriseIcon';

export { SunriseIcon };
