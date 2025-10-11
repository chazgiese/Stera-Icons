import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldCheckIcon as ShieldCheckIconRegular } from './shield-check';
import { ShieldCheckIconBold } from './shield-check-bold';
import { ShieldCheckIconFilled } from './shield-check-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ShieldCheckIconProps extends IconProps {
  variant?: IconVariant;
}

const ShieldCheckIcon = memo(forwardRef<SVGSVGElement, ShieldCheckIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShieldCheckIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShieldCheckIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ShieldCheckIconRegular ref={ref} {...props} />;
  }
}));

ShieldCheckIcon.displayName = 'ShieldCheckIcon';

export { ShieldCheckIcon };
