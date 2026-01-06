import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertTriangleIcon as RegularAlertTriangleIcon } from './alert-triangle';
import { AlertTriangleIconDuotone as AlertTriangleIconDuotone } from './alert-triangle-duotone';
import { AlertTriangleIconBold as AlertTriangleIconBold } from './alert-triangle-bold';
import { AlertTriangleIconBoldDuotone as AlertTriangleIconBoldDuotone } from './alert-triangle-bold-duotone';
import { AlertTriangleIconFill as AlertTriangleIconFill } from './alert-triangle-fill';
import { AlertTriangleIconFillDuotone as AlertTriangleIconFillDuotone } from './alert-triangle-fill-duotone';

export interface AlertTriangleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlertTriangleIcon = memo(forwardRef<SVGSVGElement, AlertTriangleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertTriangleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlertTriangleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlertTriangleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlertTriangleIconFill ref={ref} {...props} />;
  if (duotone) return <AlertTriangleIconDuotone ref={ref} {...props} />;
  return <RegularAlertTriangleIcon ref={ref} {...props} />;
}));

AlertTriangleIcon.displayName = 'AlertTriangleIcon';

export { AlertTriangleIcon };
