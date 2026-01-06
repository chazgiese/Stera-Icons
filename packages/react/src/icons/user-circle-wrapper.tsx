import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserCircleIcon as RegularUserCircleIcon } from './user-circle';
import { UserCircleIconDuotone as UserCircleIconDuotone } from './user-circle-duotone';
import { UserCircleIconBold as UserCircleIconBold } from './user-circle-bold';
import { UserCircleIconBoldDuotone as UserCircleIconBoldDuotone } from './user-circle-bold-duotone';
import { UserCircleIconFill as UserCircleIconFill } from './user-circle-fill';
import { UserCircleIconFillDuotone as UserCircleIconFillDuotone } from './user-circle-fill-duotone';

export interface UserCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UserCircleIcon = memo(forwardRef<SVGSVGElement, UserCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UserCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UserCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UserCircleIconFill ref={ref} {...props} />;
  if (duotone) return <UserCircleIconDuotone ref={ref} {...props} />;
  return <RegularUserCircleIcon ref={ref} {...props} />;
}));

UserCircleIcon.displayName = 'UserCircleIcon';

export { UserCircleIcon };
