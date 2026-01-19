import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SettingsRegular } from './SettingsRegular';
import { SettingsRegularDuotone } from './SettingsRegularDuotone';
import { SettingsBold } from './SettingsBold';
import { SettingsBoldDuotone } from './SettingsBoldDuotone';
import { SettingsFill } from './SettingsFill';
import { SettingsFillDuotone } from './SettingsFillDuotone';

export interface SettingsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Settings - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SettingsRegular } from 'stera-icons/icons/SettingsRegular';
 */
const Settings = memo(forwardRef<SVGSVGElement, SettingsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SettingsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SettingsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SettingsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SettingsFill ref={ref} {...rest} />;
  if (duotone) return <SettingsRegularDuotone ref={ref} {...rest} />;
  return <SettingsRegular ref={ref} {...rest} />;
}));

Settings.displayName = 'Settings';

// Triple export pattern (lucide-react style)
export { Settings, Settings as SettingsIcon, Settings as SiSettings };
export default Settings;
