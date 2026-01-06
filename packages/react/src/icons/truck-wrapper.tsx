import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TruckIcon as RegularTruckIcon } from './truck';
import { TruckIconDuotone as TruckIconDuotone } from './truck-duotone';
import { TruckIconBold as TruckIconBold } from './truck-bold';
import { TruckIconBoldDuotone as TruckIconBoldDuotone } from './truck-bold-duotone';
import { TruckIconFill as TruckIconFill } from './truck-fill';
import { TruckIconFillDuotone as TruckIconFillDuotone } from './truck-fill-duotone';

export interface TruckIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TruckIcon = memo(forwardRef<SVGSVGElement, TruckIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TruckIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TruckIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TruckIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TruckIconFill ref={ref} {...props} />;
  if (duotone) return <TruckIconDuotone ref={ref} {...props} />;
  return <RegularTruckIcon ref={ref} {...props} />;
}));

TruckIcon.displayName = 'TruckIcon';

export { TruckIcon };
