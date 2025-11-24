import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UserPlusIcon as RegularUserPlusIcon } from './user-plus';
import { UserPlusIconBold } from './user-plus-bold';
import { UserPlusIconFilled } from './user-plus-filled';
import { UserPlusIconFilltone } from './user-plus-filltone';
import { UserPlusIconLinetone } from './user-plus-linetone';

export interface UserPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const UserPlusIcon = memo(forwardRef<SVGSVGElement, UserPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UserPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UserPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UserPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UserPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUserPlusIcon ref={ref} {...props} />;
  }
}));

UserPlusIcon.displayName = 'UserPlusIcon';

export { UserPlusIcon };
