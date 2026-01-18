import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShipForwardIcon as RegularShipForwardIcon } from './ship-forward';
import { ShipForwardIconDuotone as ShipForwardIconDuotone } from './ship-forward-duotone';
import { ShipForwardIconBold as ShipForwardIconBold } from './ship-forward-bold';
import { ShipForwardIconBoldDuotone as ShipForwardIconBoldDuotone } from './ship-forward-bold-duotone';
import { ShipForwardIconFill as ShipForwardIconFill } from './ship-forward-fill';
import { ShipForwardIconFillDuotone as ShipForwardIconFillDuotone } from './ship-forward-fill-duotone';

export interface ShipForwardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShipForwardIcon = memo(forwardRef<SVGSVGElement, ShipForwardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShipForwardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShipForwardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShipForwardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShipForwardIconFill ref={ref} {...props} />;
  if (duotone) return <ShipForwardIconDuotone ref={ref} {...props} />;
  return <RegularShipForwardIcon ref={ref} {...props} />;
}));

ShipForwardIcon.displayName = 'ShipForwardIcon';

export { ShipForwardIcon };
