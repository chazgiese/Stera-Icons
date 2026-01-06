import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertSquareIcon as RegularAlertSquareIcon } from './alert-square';
import { AlertSquareIconDuotone as AlertSquareIconDuotone } from './alert-square-duotone';
import { AlertSquareIconBold as AlertSquareIconBold } from './alert-square-bold';
import { AlertSquareIconBoldDuotone as AlertSquareIconBoldDuotone } from './alert-square-bold-duotone';
import { AlertSquareIconFill as AlertSquareIconFill } from './alert-square-fill';
import { AlertSquareIconFillDuotone as AlertSquareIconFillDuotone } from './alert-square-fill-duotone';

export interface AlertSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlertSquareIcon = memo(forwardRef<SVGSVGElement, AlertSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlertSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlertSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlertSquareIconFill ref={ref} {...props} />;
  if (duotone) return <AlertSquareIconDuotone ref={ref} {...props} />;
  return <RegularAlertSquareIcon ref={ref} {...props} />;
}));

AlertSquareIcon.displayName = 'AlertSquareIcon';

export { AlertSquareIcon };
