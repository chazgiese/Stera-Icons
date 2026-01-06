import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldAlertIcon as RegularShieldAlertIcon } from './shield-alert';
import { ShieldAlertIconDuotone as ShieldAlertIconDuotone } from './shield-alert-duotone';
import { ShieldAlertIconBold as ShieldAlertIconBold } from './shield-alert-bold';
import { ShieldAlertIconBoldDuotone as ShieldAlertIconBoldDuotone } from './shield-alert-bold-duotone';
import { ShieldAlertIconFill as ShieldAlertIconFill } from './shield-alert-fill';
import { ShieldAlertIconFillDuotone as ShieldAlertIconFillDuotone } from './shield-alert-fill-duotone';

export interface ShieldAlertIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShieldAlertIcon = memo(forwardRef<SVGSVGElement, ShieldAlertIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldAlertIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShieldAlertIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShieldAlertIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShieldAlertIconFill ref={ref} {...props} />;
  if (duotone) return <ShieldAlertIconDuotone ref={ref} {...props} />;
  return <RegularShieldAlertIcon ref={ref} {...props} />;
}));

ShieldAlertIcon.displayName = 'ShieldAlertIcon';

export { ShieldAlertIcon };
