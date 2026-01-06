import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WifiSlashIcon as RegularWifiSlashIcon } from './wifi-slash';
import { WifiSlashIconDuotone as WifiSlashIconDuotone } from './wifi-slash-duotone';
import { WifiSlashIconBold as WifiSlashIconBold } from './wifi-slash-bold';
import { WifiSlashIconBoldDuotone as WifiSlashIconBoldDuotone } from './wifi-slash-bold-duotone';
import { WifiSlashIconFill as WifiSlashIconFill } from './wifi-slash-fill';
import { WifiSlashIconFillDuotone as WifiSlashIconFillDuotone } from './wifi-slash-fill-duotone';

export interface WifiSlashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WifiSlashIcon = memo(forwardRef<SVGSVGElement, WifiSlashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WifiSlashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WifiSlashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WifiSlashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WifiSlashIconFill ref={ref} {...props} />;
  if (duotone) return <WifiSlashIconDuotone ref={ref} {...props} />;
  return <RegularWifiSlashIcon ref={ref} {...props} />;
}));

WifiSlashIcon.displayName = 'WifiSlashIcon';

export { WifiSlashIcon };
