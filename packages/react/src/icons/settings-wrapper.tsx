import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SettingsIcon as SettingsIconRegular } from './settings';
import { SettingsIconBold } from './settings-bold';
import { SettingsIconFilled } from './settings-filled';
import { SettingsIconFilltone } from './settings-filltone';
import { SettingsIconLinetone } from './settings-linetone';

export interface SettingsIconProps extends IconProps {
  variant?: IconVariant;
}

const SettingsIcon = memo(forwardRef<SVGSVGElement, SettingsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SettingsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SettingsIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SettingsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SettingsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SettingsIconRegular ref={ref} {...props} />;
  }
}));

SettingsIcon.displayName = 'SettingsIcon';

export { SettingsIcon };
