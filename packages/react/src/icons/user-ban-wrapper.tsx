import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UserBanIcon as RegularUserBanIcon } from './user-ban';
import { UserBanIconBold } from './user-ban-bold';
import { UserBanIconFilled } from './user-ban-filled';
import { UserBanIconFilltone } from './user-ban-filltone';
import { UserBanIconLinetone } from './user-ban-linetone';

export interface UserBanIconProps extends IconProps {
  variant?: IconVariant;
}

const UserBanIcon = memo(forwardRef<SVGSVGElement, UserBanIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UserBanIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UserBanIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UserBanIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UserBanIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUserBanIcon ref={ref} {...props} />;
  }
}));

UserBanIcon.displayName = 'UserBanIcon';

export { UserBanIcon };
