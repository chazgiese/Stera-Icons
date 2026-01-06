import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SettingsIcon as RegularSettingsIcon } from './settings';
import { SettingsIconDuotone as SettingsIconDuotone } from './settings-duotone';
import { SettingsIconBold as SettingsIconBold } from './settings-bold';
import { SettingsIconBoldDuotone as SettingsIconBoldDuotone } from './settings-bold-duotone';
import { SettingsIconFill as SettingsIconFill } from './settings-fill';
import { SettingsIconFillDuotone as SettingsIconFillDuotone } from './settings-fill-duotone';

export interface SettingsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SettingsIcon = memo(forwardRef<SVGSVGElement, SettingsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SettingsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SettingsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SettingsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SettingsIconFill ref={ref} {...props} />;
  if (duotone) return <SettingsIconDuotone ref={ref} {...props} />;
  return <RegularSettingsIcon ref={ref} {...props} />;
}));

SettingsIcon.displayName = 'SettingsIcon';

export { SettingsIcon };
