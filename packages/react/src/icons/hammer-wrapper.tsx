import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HammerIcon as RegularHammerIcon } from './hammer';
import { HammerIconBold } from './hammer-bold';
import { HammerIconFilled } from './hammer-filled';
import { HammerIconFilltone } from './hammer-filltone';
import { HammerIconLinetone } from './hammer-linetone';

export interface HammerIconProps extends IconProps {
  variant?: IconVariant;
}

const HammerIcon = memo(forwardRef<SVGSVGElement, HammerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HammerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HammerIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HammerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HammerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHammerIcon ref={ref} {...props} />;
  }
}));

HammerIcon.displayName = 'HammerIcon';

export { HammerIcon };
