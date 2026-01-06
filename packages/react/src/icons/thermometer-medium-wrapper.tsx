import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThermometerMediumIcon as RegularThermometerMediumIcon } from './thermometer-medium';
import { ThermometerMediumIconDuotone as ThermometerMediumIconDuotone } from './thermometer-medium-duotone';
import { ThermometerMediumIconBold as ThermometerMediumIconBold } from './thermometer-medium-bold';
import { ThermometerMediumIconBoldDuotone as ThermometerMediumIconBoldDuotone } from './thermometer-medium-bold-duotone';
import { ThermometerMediumIconFill as ThermometerMediumIconFill } from './thermometer-medium-fill';
import { ThermometerMediumIconFillDuotone as ThermometerMediumIconFillDuotone } from './thermometer-medium-fill-duotone';

export interface ThermometerMediumIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ThermometerMediumIcon = memo(forwardRef<SVGSVGElement, ThermometerMediumIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThermometerMediumIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ThermometerMediumIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ThermometerMediumIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ThermometerMediumIconFill ref={ref} {...props} />;
  if (duotone) return <ThermometerMediumIconDuotone ref={ref} {...props} />;
  return <RegularThermometerMediumIcon ref={ref} {...props} />;
}));

ThermometerMediumIcon.displayName = 'ThermometerMediumIcon';

export { ThermometerMediumIcon };
