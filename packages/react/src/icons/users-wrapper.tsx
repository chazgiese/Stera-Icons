import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UsersIcon as RegularUsersIcon } from './users';
import { UsersIconDuotone as UsersIconDuotone } from './users-duotone';
import { UsersIconBold as UsersIconBold } from './users-bold';
import { UsersIconBoldDuotone as UsersIconBoldDuotone } from './users-bold-duotone';
import { UsersIconFill as UsersIconFill } from './users-fill';
import { UsersIconFillDuotone as UsersIconFillDuotone } from './users-fill-duotone';

export interface UsersIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UsersIcon = memo(forwardRef<SVGSVGElement, UsersIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UsersIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UsersIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UsersIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UsersIconFill ref={ref} {...props} />;
  if (duotone) return <UsersIconDuotone ref={ref} {...props} />;
  return <RegularUsersIcon ref={ref} {...props} />;
}));

UsersIcon.displayName = 'UsersIcon';

export { UsersIcon };
