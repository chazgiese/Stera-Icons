import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CheckBadgeIcon as CheckBadgeIconRegular } from './check-badge';
import { CheckBadgeIconBold } from './check-badge-bold';
import { CheckBadgeIconFilled } from './check-badge-filled';
import { CheckBadgeIconFilltone } from './check-badge-filltone';
import { CheckBadgeIconLinetone } from './check-badge-linetone';

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
    case 'filltone':
      return <CheckBadgeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CheckBadgeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CheckBadgeIconRegular ref={ref} {...props} />;
  }
}));

CheckBadgeIcon.displayName = 'CheckBadgeIcon';

export { CheckBadgeIcon };
