import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserSettingsIcon as RegularUserSettingsIcon } from './user-settings';
import { UserSettingsIconDuotone as UserSettingsIconDuotone } from './user-settings-duotone';
import { UserSettingsIconBold as UserSettingsIconBold } from './user-settings-bold';
import { UserSettingsIconBoldDuotone as UserSettingsIconBoldDuotone } from './user-settings-bold-duotone';
import { UserSettingsIconFill as UserSettingsIconFill } from './user-settings-fill';
import { UserSettingsIconFillDuotone as UserSettingsIconFillDuotone } from './user-settings-fill-duotone';

export interface UserSettingsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UserSettingsIcon = memo(forwardRef<SVGSVGElement, UserSettingsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserSettingsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UserSettingsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UserSettingsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UserSettingsIconFill ref={ref} {...props} />;
  if (duotone) return <UserSettingsIconDuotone ref={ref} {...props} />;
  return <RegularUserSettingsIcon ref={ref} {...props} />;
}));

UserSettingsIcon.displayName = 'UserSettingsIcon';

export { UserSettingsIcon };
