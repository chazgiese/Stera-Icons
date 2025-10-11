import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckBadgeIcon as CheckBadgeIconRegular } from './check-badge';
import { CheckBadgeIconBold } from './check-badge-bold';
import { CheckBadgeIconFilled } from './check-badge-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CheckBadgeIconProps extends IconProps {
  variant?: IconVariant;
}

const CheckBadgeIcon = memo(forwardRef<SVGSVGElement, CheckBadgeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CheckBadgeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CheckBadgeIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CheckBadgeIconRegular ref={ref} {...props} />;
  }
}));

CheckBadgeIcon.displayName = 'CheckBadgeIcon';

export { CheckBadgeIcon };
