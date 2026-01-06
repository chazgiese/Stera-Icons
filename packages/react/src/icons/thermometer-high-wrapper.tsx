import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThermometerHighIcon as RegularThermometerHighIcon } from './thermometer-high';
import { ThermometerHighIconDuotone as ThermometerHighIconDuotone } from './thermometer-high-duotone';
import { ThermometerHighIconBold as ThermometerHighIconBold } from './thermometer-high-bold';
import { ThermometerHighIconBoldDuotone as ThermometerHighIconBoldDuotone } from './thermometer-high-bold-duotone';
import { ThermometerHighIconFill as ThermometerHighIconFill } from './thermometer-high-fill';
import { ThermometerHighIconFillDuotone as ThermometerHighIconFillDuotone } from './thermometer-high-fill-duotone';

export interface ThermometerHighIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ThermometerHighIcon = memo(forwardRef<SVGSVGElement, ThermometerHighIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThermometerHighIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ThermometerHighIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ThermometerHighIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ThermometerHighIconFill ref={ref} {...props} />;
  if (duotone) return <ThermometerHighIconDuotone ref={ref} {...props} />;
  return <RegularThermometerHighIcon ref={ref} {...props} />;
}));

ThermometerHighIcon.displayName = 'ThermometerHighIcon';

export { ThermometerHighIcon };
