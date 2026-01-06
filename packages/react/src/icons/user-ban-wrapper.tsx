import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserBanIcon as RegularUserBanIcon } from './user-ban';
import { UserBanIconDuotone as UserBanIconDuotone } from './user-ban-duotone';
import { UserBanIconBold as UserBanIconBold } from './user-ban-bold';
import { UserBanIconBoldDuotone as UserBanIconBoldDuotone } from './user-ban-bold-duotone';
import { UserBanIconFill as UserBanIconFill } from './user-ban-fill';
import { UserBanIconFillDuotone as UserBanIconFillDuotone } from './user-ban-fill-duotone';

export interface UserBanIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UserBanIcon = memo(forwardRef<SVGSVGElement, UserBanIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserBanIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UserBanIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UserBanIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UserBanIconFill ref={ref} {...props} />;
  if (duotone) return <UserBanIconDuotone ref={ref} {...props} />;
  return <RegularUserBanIcon ref={ref} {...props} />;
}));

UserBanIcon.displayName = 'UserBanIcon';

export { UserBanIcon };
