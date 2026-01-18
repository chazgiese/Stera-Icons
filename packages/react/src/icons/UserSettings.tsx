import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UserSettingsRegular } from './UserSettingsRegular';
import { UserSettingsRegularDuotone } from './UserSettingsRegularDuotone';
import { UserSettingsBold } from './UserSettingsBold';
import { UserSettingsBoldDuotone } from './UserSettingsBoldDuotone';
import { UserSettingsFill } from './UserSettingsFill';
import { UserSettingsFillDuotone } from './UserSettingsFillDuotone';

export interface UserSettingsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserSettings with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { UserSettingsRegular } from 'stera-icons/UserSettingsRegular';
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

export { UserSettings };
