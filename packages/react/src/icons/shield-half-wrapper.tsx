import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldHalfIcon as RegularShieldHalfIcon } from './shield-half';
import { ShieldHalfIconDuotone as ShieldHalfIconDuotone } from './shield-half-duotone';
import { ShieldHalfIconBold as ShieldHalfIconBold } from './shield-half-bold';
import { ShieldHalfIconBoldDuotone as ShieldHalfIconBoldDuotone } from './shield-half-bold-duotone';
import { ShieldHalfIconFill as ShieldHalfIconFill } from './shield-half-fill';
import { ShieldHalfIconFillDuotone as ShieldHalfIconFillDuotone } from './shield-half-fill-duotone';

export interface ShieldHalfIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShieldHalfIcon = memo(forwardRef<SVGSVGElement, ShieldHalfIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldHalfIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShieldHalfIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShieldHalfIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShieldHalfIconFill ref={ref} {...props} />;
  if (duotone) return <ShieldHalfIconDuotone ref={ref} {...props} />;
  return <RegularShieldHalfIcon ref={ref} {...props} />;
}));

ShieldHalfIcon.displayName = 'ShieldHalfIcon';

export { ShieldHalfIcon };
