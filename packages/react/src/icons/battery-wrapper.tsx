import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryIcon as BatteryIconRegular } from './battery';
import { BatteryIconBold } from './battery-bold';
import { BatteryIconFilled } from './battery-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BatteryIconProps extends IconProps {
  variant?: IconVariant;
}

const BatteryIcon = memo(forwardRef<SVGSVGElement, BatteryIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BatteryIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BatteryIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BatteryIconRegular ref={ref} {...props} />;
  }
}));

BatteryIcon.displayName = 'BatteryIcon';

export { BatteryIcon };
