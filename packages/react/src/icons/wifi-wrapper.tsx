import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WifiIcon as RegularWifiIcon } from './wifi';
import { WifiIconDuotone as WifiIconDuotone } from './wifi-duotone';
import { WifiIconBold as WifiIconBold } from './wifi-bold';
import { WifiIconBoldDuotone as WifiIconBoldDuotone } from './wifi-bold-duotone';
import { WifiIconFill as WifiIconFill } from './wifi-fill';
import { WifiIconFillDuotone as WifiIconFillDuotone } from './wifi-fill-duotone';

export interface WifiIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WifiIcon = memo(forwardRef<SVGSVGElement, WifiIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WifiIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WifiIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WifiIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WifiIconFill ref={ref} {...props} />;
  if (duotone) return <WifiIconDuotone ref={ref} {...props} />;
  return <RegularWifiIcon ref={ref} {...props} />;
}));

WifiIcon.displayName = 'WifiIcon';

export { WifiIcon };
