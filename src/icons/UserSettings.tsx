import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserSettingsRegular } from './UserSettingsRegular.js';
import { UserSettingsRegularDuotone } from './UserSettingsRegularDuotone.js';
import { UserSettingsBold } from './UserSettingsBold.js';
import { UserSettingsBoldDuotone } from './UserSettingsBoldDuotone.js';
import { UserSettingsFill } from './UserSettingsFill.js';
import { UserSettingsFillDuotone } from './UserSettingsFillDuotone.js';

export interface UserSettingsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserSettings - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserSettingsRegular } from 'stera-icons/icons/UserSettingsRegular';
 */
const UserSettings = memo(forwardRef<SVGSVGElement, UserSettingsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserSettingsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserSettingsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserSettingsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserSettingsFill ref={ref} {...rest} />;
  if (duotone) return <UserSettingsRegularDuotone ref={ref} {...rest} />;
  return <UserSettingsRegular ref={ref} {...rest} />;
}));

UserSettings.displayName = 'UserSettings';

// Triple export pattern (lucide-react style)
export { UserSettings, UserSettings as UserSettingsIcon, UserSettings as SiUserSettings };
export default UserSettings;
