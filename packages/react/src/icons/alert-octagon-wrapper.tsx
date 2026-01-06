import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertOctagonIcon as RegularAlertOctagonIcon } from './alert-octagon';
import { AlertOctagonIconDuotone as AlertOctagonIconDuotone } from './alert-octagon-duotone';
import { AlertOctagonIconBold as AlertOctagonIconBold } from './alert-octagon-bold';
import { AlertOctagonIconBoldDuotone as AlertOctagonIconBoldDuotone } from './alert-octagon-bold-duotone';
import { AlertOctagonIconFill as AlertOctagonIconFill } from './alert-octagon-fill';
import { AlertOctagonIconFillDuotone as AlertOctagonIconFillDuotone } from './alert-octagon-fill-duotone';

export interface AlertOctagonIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlertOctagonIcon = memo(forwardRef<SVGSVGElement, AlertOctagonIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertOctagonIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlertOctagonIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlertOctagonIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlertOctagonIconFill ref={ref} {...props} />;
  if (duotone) return <AlertOctagonIconDuotone ref={ref} {...props} />;
  return <RegularAlertOctagonIcon ref={ref} {...props} />;
}));

AlertOctagonIcon.displayName = 'AlertOctagonIcon';

export { AlertOctagonIcon };
