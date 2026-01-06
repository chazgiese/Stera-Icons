import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertDiamondIcon as RegularAlertDiamondIcon } from './alert-diamond';
import { AlertDiamondIconDuotone as AlertDiamondIconDuotone } from './alert-diamond-duotone';
import { AlertDiamondIconBold as AlertDiamondIconBold } from './alert-diamond-bold';
import { AlertDiamondIconBoldDuotone as AlertDiamondIconBoldDuotone } from './alert-diamond-bold-duotone';
import { AlertDiamondIconFill as AlertDiamondIconFill } from './alert-diamond-fill';
import { AlertDiamondIconFillDuotone as AlertDiamondIconFillDuotone } from './alert-diamond-fill-duotone';

export interface AlertDiamondIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlertDiamondIcon = memo(forwardRef<SVGSVGElement, AlertDiamondIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertDiamondIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlertDiamondIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlertDiamondIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlertDiamondIconFill ref={ref} {...props} />;
  if (duotone) return <AlertDiamondIconDuotone ref={ref} {...props} />;
  return <RegularAlertDiamondIcon ref={ref} {...props} />;
}));

AlertDiamondIcon.displayName = 'AlertDiamondIcon';

export { AlertDiamondIcon };
