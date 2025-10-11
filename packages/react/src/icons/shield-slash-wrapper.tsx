import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldSlashIcon as ShieldSlashIconRegular } from './shield-slash';
import { ShieldSlashIconBold } from './shield-slash-bold';
import { ShieldSlashIconFilled } from './shield-slash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ShieldSlashIconProps extends IconProps {
  variant?: IconVariant;
}

const ShieldSlashIcon = memo(forwardRef<SVGSVGElement, ShieldSlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShieldSlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShieldSlashIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ShieldSlashIconRegular ref={ref} {...props} />;
  }
}));

ShieldSlashIcon.displayName = 'ShieldSlashIcon';

export { ShieldSlashIcon };
