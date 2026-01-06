import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldSlashIcon as RegularShieldSlashIcon } from './shield-slash';
import { ShieldSlashIconDuotone as ShieldSlashIconDuotone } from './shield-slash-duotone';
import { ShieldSlashIconBold as ShieldSlashIconBold } from './shield-slash-bold';
import { ShieldSlashIconBoldDuotone as ShieldSlashIconBoldDuotone } from './shield-slash-bold-duotone';
import { ShieldSlashIconFill as ShieldSlashIconFill } from './shield-slash-fill';
import { ShieldSlashIconFillDuotone as ShieldSlashIconFillDuotone } from './shield-slash-fill-duotone';

export interface ShieldSlashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShieldSlashIcon = memo(forwardRef<SVGSVGElement, ShieldSlashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldSlashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShieldSlashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShieldSlashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShieldSlashIconFill ref={ref} {...props} />;
  if (duotone) return <ShieldSlashIconDuotone ref={ref} {...props} />;
  return <RegularShieldSlashIcon ref={ref} {...props} />;
}));

ShieldSlashIcon.displayName = 'ShieldSlashIcon';

export { ShieldSlashIcon };
