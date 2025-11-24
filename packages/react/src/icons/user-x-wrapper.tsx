import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UserXIcon as RegularUserXIcon } from './user-x';
import { UserXIconBold } from './user-x-bold';
import { UserXIconFilled } from './user-x-filled';
import { UserXIconFilltone } from './user-x-filltone';
import { UserXIconLinetone } from './user-x-linetone';

export interface UserXIconProps extends IconProps {
  variant?: IconVariant;
}

const UserXIcon = memo(forwardRef<SVGSVGElement, UserXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UserXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UserXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UserXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UserXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUserXIcon ref={ref} {...props} />;
  }
}));

UserXIcon.displayName = 'UserXIcon';

export { UserXIcon };
