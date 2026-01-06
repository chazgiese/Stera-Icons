import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldIcon as RegularShieldIcon } from './shield';
import { ShieldIconDuotone as ShieldIconDuotone } from './shield-duotone';
import { ShieldIconBold as ShieldIconBold } from './shield-bold';
import { ShieldIconBoldDuotone as ShieldIconBoldDuotone } from './shield-bold-duotone';
import { ShieldIconFill as ShieldIconFill } from './shield-fill';
import { ShieldIconFillDuotone as ShieldIconFillDuotone } from './shield-fill-duotone';

export interface ShieldIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShieldIcon = memo(forwardRef<SVGSVGElement, ShieldIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShieldIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShieldIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShieldIconFill ref={ref} {...props} />;
  if (duotone) return <ShieldIconDuotone ref={ref} {...props} />;
  return <RegularShieldIcon ref={ref} {...props} />;
}));

ShieldIcon.displayName = 'ShieldIcon';

export { ShieldIcon };
