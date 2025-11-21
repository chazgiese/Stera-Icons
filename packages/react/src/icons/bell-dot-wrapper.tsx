import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BellDotIcon as RegularBellDotIcon } from './bell-dot';
import { BellDotIconBold } from './bell-dot-bold';
import { BellDotIconFilled } from './bell-dot-filled';
import { BellDotIconFilltone } from './bell-dot-filltone';
import { BellDotIconLinetone } from './bell-dot-linetone';

export interface BellDotIconProps extends IconProps {
  variant?: IconVariant;
}

const BellDotIcon = memo(forwardRef<SVGSVGElement, BellDotIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BellDotIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BellDotIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BellDotIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BellDotIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBellDotIcon ref={ref} {...props} />;
  }
}));

BellDotIcon.displayName = 'BellDotIcon';

export { BellDotIcon };
