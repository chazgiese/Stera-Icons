import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldCheckIcon as RegularShieldCheckIcon } from './shield-check';
import { ShieldCheckIconDuotone as ShieldCheckIconDuotone } from './shield-check-duotone';
import { ShieldCheckIconBold as ShieldCheckIconBold } from './shield-check-bold';
import { ShieldCheckIconBoldDuotone as ShieldCheckIconBoldDuotone } from './shield-check-bold-duotone';
import { ShieldCheckIconFill as ShieldCheckIconFill } from './shield-check-fill';
import { ShieldCheckIconFillDuotone as ShieldCheckIconFillDuotone } from './shield-check-fill-duotone';

export interface ShieldCheckIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShieldCheckIcon = memo(forwardRef<SVGSVGElement, ShieldCheckIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldCheckIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShieldCheckIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShieldCheckIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShieldCheckIconFill ref={ref} {...props} />;
  if (duotone) return <ShieldCheckIconDuotone ref={ref} {...props} />;
  return <RegularShieldCheckIcon ref={ref} {...props} />;
}));

ShieldCheckIcon.displayName = 'ShieldCheckIcon';

export { ShieldCheckIcon };
