import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserIcon as UserIconRegular } from './user';
import { UserIconBold } from './user-bold';
import { UserIconFilled } from './user-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <UserIconRegular ref={ref} {...props} />;
  }
}));

UserIcon.displayName = 'UserIcon';

export { UserIcon };
