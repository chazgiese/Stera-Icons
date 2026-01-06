import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UsersThreeIcon as RegularUsersThreeIcon } from './users-three';
import { UsersThreeIconDuotone as UsersThreeIconDuotone } from './users-three-duotone';
import { UsersThreeIconBold as UsersThreeIconBold } from './users-three-bold';
import { UsersThreeIconBoldDuotone as UsersThreeIconBoldDuotone } from './users-three-bold-duotone';
import { UsersThreeIconFill as UsersThreeIconFill } from './users-three-fill';
import { UsersThreeIconFillDuotone as UsersThreeIconFillDuotone } from './users-three-fill-duotone';

export interface UsersThreeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UsersThreeIcon = memo(forwardRef<SVGSVGElement, UsersThreeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UsersThreeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UsersThreeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UsersThreeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UsersThreeIconFill ref={ref} {...props} />;
  if (duotone) return <UsersThreeIconDuotone ref={ref} {...props} />;
  return <RegularUsersThreeIcon ref={ref} {...props} />;
}));

UsersThreeIcon.displayName = 'UsersThreeIcon';

export { UsersThreeIcon };
