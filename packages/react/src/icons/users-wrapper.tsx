import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UsersIcon as UsersIconRegular } from './users';
import { UsersIconBold } from './users-bold';
import { UsersIconFilled } from './users-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <UsersIconRegular ref={ref} {...props} />;
  }
}));

UsersIcon.displayName = 'UsersIcon';

export { UsersIcon };
