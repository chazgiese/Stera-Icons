import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertCircleIcon as RegularAlertCircleIcon } from './alert-circle';
import { AlertCircleIconDuotone as AlertCircleIconDuotone } from './alert-circle-duotone';
import { AlertCircleIconBold as AlertCircleIconBold } from './alert-circle-bold';
import { AlertCircleIconBoldDuotone as AlertCircleIconBoldDuotone } from './alert-circle-bold-duotone';
import { AlertCircleIconFill as AlertCircleIconFill } from './alert-circle-fill';
import { AlertCircleIconFillDuotone as AlertCircleIconFillDuotone } from './alert-circle-fill-duotone';

export interface AlertCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlertCircleIcon = memo(forwardRef<SVGSVGElement, AlertCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlertCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlertCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlertCircleIconFill ref={ref} {...props} />;
  if (duotone) return <AlertCircleIconDuotone ref={ref} {...props} />;
  return <RegularAlertCircleIcon ref={ref} {...props} />;
}));

AlertCircleIcon.displayName = 'AlertCircleIcon';

export { AlertCircleIcon };
