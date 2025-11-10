import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BarricadeIcon as RegularBarricadeIcon } from './barricade';
import { BarricadeIconBold } from './barricade-bold';
import { BarricadeIconFilled } from './barricade-filled';
import { BarricadeIconFilltone } from './barricade-filltone';
import { BarricadeIconLinetone } from './barricade-linetone';

export interface BarricadeIconProps extends IconProps {
  variant?: IconVariant;
}

const BarricadeIcon = memo(forwardRef<SVGSVGElement, BarricadeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarricadeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarricadeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BarricadeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BarricadeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBarricadeIcon ref={ref} {...props} />;
  }
}));

BarricadeIcon.displayName = 'BarricadeIcon';

export { BarricadeIcon };
