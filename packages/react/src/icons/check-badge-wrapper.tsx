import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckBadgeIcon as RegularCheckBadgeIcon } from './check-badge';
import { CheckBadgeIconDuotone as CheckBadgeIconDuotone } from './check-badge-duotone';
import { CheckBadgeIconBold as CheckBadgeIconBold } from './check-badge-bold';
import { CheckBadgeIconBoldDuotone as CheckBadgeIconBoldDuotone } from './check-badge-bold-duotone';
import { CheckBadgeIconFill as CheckBadgeIconFill } from './check-badge-fill';
import { CheckBadgeIconFillDuotone as CheckBadgeIconFillDuotone } from './check-badge-fill-duotone';

export interface CheckBadgeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CheckBadgeIcon = memo(forwardRef<SVGSVGElement, CheckBadgeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckBadgeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CheckBadgeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CheckBadgeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CheckBadgeIconFill ref={ref} {...props} />;
  if (duotone) return <CheckBadgeIconDuotone ref={ref} {...props} />;
  return <RegularCheckBadgeIcon ref={ref} {...props} />;
}));

CheckBadgeIcon.displayName = 'CheckBadgeIcon';

export { CheckBadgeIcon };
