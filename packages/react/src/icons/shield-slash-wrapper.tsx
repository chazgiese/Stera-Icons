import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ShieldSlashIcon as ShieldSlashIconRegular } from './shield-slash';
import { ShieldSlashIconBold } from './shield-slash-bold';
import { ShieldSlashIconFilled } from './shield-slash-filled';
import { ShieldSlashIconFilltone } from './shield-slash-filltone';
import { ShieldSlashIconLinetone } from './shield-slash-linetone';

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
    case 'filltone':
      return <ShieldSlashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ShieldSlashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ShieldSlashIconRegular ref={ref} {...props} />;
  }
}));

ShieldSlashIcon.displayName = 'ShieldSlashIcon';

export { ShieldSlashIcon };
