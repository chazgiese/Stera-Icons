import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UserCircleIcon as RegularUserCircleIcon } from './user-circle';
import { UserCircleIconBold } from './user-circle-bold';
import { UserCircleIconFilled } from './user-circle-filled';
import { UserCircleIconFilltone } from './user-circle-filltone';
import { UserCircleIconLinetone } from './user-circle-linetone';

export interface UserCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const UserCircleIcon = memo(forwardRef<SVGSVGElement, UserCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UserCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UserCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UserCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UserCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUserCircleIcon ref={ref} {...props} />;
  }
}));

UserCircleIcon.displayName = 'UserCircleIcon';

export { UserCircleIcon };
