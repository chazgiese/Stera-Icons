import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserCircleIcon as UserCircleIconRegular } from './user-circle';
import { UserCircleIconBold } from './user-circle-bold';
import { UserCircleIconFilled } from './user-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <UserCircleIconRegular ref={ref} {...props} />;
  }
}));

UserCircleIcon.displayName = 'UserCircleIcon';

export { UserCircleIcon };
