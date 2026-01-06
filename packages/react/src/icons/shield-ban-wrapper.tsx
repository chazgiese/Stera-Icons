import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldBanIcon as RegularShieldBanIcon } from './shield-ban';
import { ShieldBanIconDuotone as ShieldBanIconDuotone } from './shield-ban-duotone';
import { ShieldBanIconBold as ShieldBanIconBold } from './shield-ban-bold';
import { ShieldBanIconBoldDuotone as ShieldBanIconBoldDuotone } from './shield-ban-bold-duotone';
import { ShieldBanIconFill as ShieldBanIconFill } from './shield-ban-fill';
import { ShieldBanIconFillDuotone as ShieldBanIconFillDuotone } from './shield-ban-fill-duotone';

export interface ShieldBanIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShieldBanIcon = memo(forwardRef<SVGSVGElement, ShieldBanIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldBanIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShieldBanIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShieldBanIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShieldBanIconFill ref={ref} {...props} />;
  if (duotone) return <ShieldBanIconDuotone ref={ref} {...props} />;
  return <RegularShieldBanIcon ref={ref} {...props} />;
}));

ShieldBanIcon.displayName = 'ShieldBanIcon';

export { ShieldBanIcon };
