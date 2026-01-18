import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShipBackIcon as RegularShipBackIcon } from './ship-back';
import { ShipBackIconDuotone as ShipBackIconDuotone } from './ship-back-duotone';
import { ShipBackIconBold as ShipBackIconBold } from './ship-back-bold';
import { ShipBackIconBoldDuotone as ShipBackIconBoldDuotone } from './ship-back-bold-duotone';
import { ShipBackIconFill as ShipBackIconFill } from './ship-back-fill';
import { ShipBackIconFillDuotone as ShipBackIconFillDuotone } from './ship-back-fill-duotone';

export interface ShipBackIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShipBackIcon = memo(forwardRef<SVGSVGElement, ShipBackIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShipBackIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShipBackIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShipBackIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShipBackIconFill ref={ref} {...props} />;
  if (duotone) return <ShipBackIconDuotone ref={ref} {...props} />;
  return <RegularShipBackIcon ref={ref} {...props} />;
}));

ShipBackIcon.displayName = 'ShipBackIcon';

export { ShipBackIcon };
