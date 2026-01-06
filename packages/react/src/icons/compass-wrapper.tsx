import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CompassIcon as RegularCompassIcon } from './compass';
import { CompassIconDuotone as CompassIconDuotone } from './compass-duotone';
import { CompassIconBold as CompassIconBold } from './compass-bold';
import { CompassIconBoldDuotone as CompassIconBoldDuotone } from './compass-bold-duotone';
import { CompassIconFill as CompassIconFill } from './compass-fill';
import { CompassIconFillDuotone as CompassIconFillDuotone } from './compass-fill-duotone';

export interface CompassIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CompassIcon = memo(forwardRef<SVGSVGElement, CompassIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CompassIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CompassIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CompassIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CompassIconFill ref={ref} {...props} />;
  if (duotone) return <CompassIconDuotone ref={ref} {...props} />;
  return <RegularCompassIcon ref={ref} {...props} />;
}));

CompassIcon.displayName = 'CompassIcon';

export { CompassIcon };
