import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UsersIcon as RegularUsersIcon } from './users';
import { UsersIconBold } from './users-bold';
import { UsersIconFilled } from './users-filled';
import { UsersIconFilltone } from './users-filltone';
import { UsersIconLinetone } from './users-linetone';

export interface UsersIconProps extends IconProps {
  variant?: IconVariant;
}

const UsersIcon = memo(forwardRef<SVGSVGElement, UsersIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UsersIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UsersIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UsersIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UsersIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUsersIcon ref={ref} {...props} />;
  }
}));

UsersIcon.displayName = 'UsersIcon';

export { UsersIcon };
