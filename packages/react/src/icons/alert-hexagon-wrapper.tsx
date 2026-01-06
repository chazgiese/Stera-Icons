import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertHexagonIcon as RegularAlertHexagonIcon } from './alert-hexagon';
import { AlertHexagonIconDuotone as AlertHexagonIconDuotone } from './alert-hexagon-duotone';
import { AlertHexagonIconBold as AlertHexagonIconBold } from './alert-hexagon-bold';
import { AlertHexagonIconBoldDuotone as AlertHexagonIconBoldDuotone } from './alert-hexagon-bold-duotone';
import { AlertHexagonIconFill as AlertHexagonIconFill } from './alert-hexagon-fill';
import { AlertHexagonIconFillDuotone as AlertHexagonIconFillDuotone } from './alert-hexagon-fill-duotone';

export interface AlertHexagonIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlertHexagonIcon = memo(forwardRef<SVGSVGElement, AlertHexagonIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertHexagonIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlertHexagonIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlertHexagonIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlertHexagonIconFill ref={ref} {...props} />;
  if (duotone) return <AlertHexagonIconDuotone ref={ref} {...props} />;
  return <RegularAlertHexagonIcon ref={ref} {...props} />;
}));

AlertHexagonIcon.displayName = 'AlertHexagonIcon';

export { AlertHexagonIcon };
