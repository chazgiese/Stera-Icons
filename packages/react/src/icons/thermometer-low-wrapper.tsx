import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThermometerLowIcon as RegularThermometerLowIcon } from './thermometer-low';
import { ThermometerLowIconDuotone as ThermometerLowIconDuotone } from './thermometer-low-duotone';
import { ThermometerLowIconBold as ThermometerLowIconBold } from './thermometer-low-bold';
import { ThermometerLowIconBoldDuotone as ThermometerLowIconBoldDuotone } from './thermometer-low-bold-duotone';
import { ThermometerLowIconFill as ThermometerLowIconFill } from './thermometer-low-fill';
import { ThermometerLowIconFillDuotone as ThermometerLowIconFillDuotone } from './thermometer-low-fill-duotone';

export interface ThermometerLowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ThermometerLowIcon = memo(forwardRef<SVGSVGElement, ThermometerLowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThermometerLowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ThermometerLowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ThermometerLowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ThermometerLowIconFill ref={ref} {...props} />;
  if (duotone) return <ThermometerLowIconDuotone ref={ref} {...props} />;
  return <RegularThermometerLowIcon ref={ref} {...props} />;
}));

ThermometerLowIcon.displayName = 'ThermometerLowIcon';

export { ThermometerLowIcon };
