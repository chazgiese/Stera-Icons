import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UserSettingsIcon as RegularUserSettingsIcon } from './user-settings';
import { UserSettingsIconBold } from './user-settings-bold';
import { UserSettingsIconFilled } from './user-settings-filled';
import { UserSettingsIconFilltone } from './user-settings-filltone';
import { UserSettingsIconLinetone } from './user-settings-linetone';

export interface UserSettingsIconProps extends IconProps {
  variant?: IconVariant;
}

const UserSettingsIcon = memo(forwardRef<SVGSVGElement, UserSettingsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UserSettingsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UserSettingsIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UserSettingsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UserSettingsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUserSettingsIcon ref={ref} {...props} />;
  }
}));

UserSettingsIcon.displayName = 'UserSettingsIcon';

export { UserSettingsIcon };
