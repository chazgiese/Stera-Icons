import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AirplaneIcon as RegularAirplaneIcon } from './airplane';
import { AirplaneIconDuotone as AirplaneIconDuotone } from './airplane-duotone';
import { AirplaneIconBold as AirplaneIconBold } from './airplane-bold';
import { AirplaneIconBoldDuotone as AirplaneIconBoldDuotone } from './airplane-bold-duotone';
import { AirplaneIconFill as AirplaneIconFill } from './airplane-fill';
import { AirplaneIconFillDuotone as AirplaneIconFillDuotone } from './airplane-fill-duotone';

export interface AirplaneIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AirplaneIcon = memo(forwardRef<SVGSVGElement, AirplaneIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AirplaneIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AirplaneIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AirplaneIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AirplaneIconFill ref={ref} {...props} />;
  if (duotone) return <AirplaneIconDuotone ref={ref} {...props} />;
  return <RegularAirplaneIcon ref={ref} {...props} />;
}));

AirplaneIcon.displayName = 'AirplaneIcon';

export { AirplaneIcon };
