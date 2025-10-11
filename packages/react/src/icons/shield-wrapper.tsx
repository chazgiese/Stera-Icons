import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldIcon as ShieldIconRegular } from './shield';
import { ShieldIconBold } from './shield-bold';
import { ShieldIconFilled } from './shield-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ShieldIconProps extends IconProps {
  variant?: IconVariant;
}

const ShieldIcon = memo(forwardRef<SVGSVGElement, ShieldIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShieldIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShieldIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ShieldIconRegular ref={ref} {...props} />;
  }
}));

ShieldIcon.displayName = 'ShieldIcon';

export { ShieldIcon };
