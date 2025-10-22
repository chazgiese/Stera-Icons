import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UserIcon as RegularUserIcon } from './user';
import { UserIconBold } from './user-bold';
import { UserIconFilled } from './user-filled';
import { UserIconFilltone } from './user-filltone';
import { UserIconLinetone } from './user-linetone';

export interface UserIconProps extends IconProps {
  variant?: IconVariant;
}

const UserIcon = memo(forwardRef<SVGSVGElement, UserIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UserIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UserIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UserIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UserIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUserIcon ref={ref} {...props} />;
  }
}));

UserIcon.displayName = 'UserIcon';

export { UserIcon };
