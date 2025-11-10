import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrickWallIcon as RegularBrickWallIcon } from './brick-wall';
import { BrickWallIconBold } from './brick-wall-bold';
import { BrickWallIconFilled } from './brick-wall-filled';
import { BrickWallIconFilltone } from './brick-wall-filltone';
import { BrickWallIconLinetone } from './brick-wall-linetone';

export interface BrickWallIconProps extends IconProps {
  variant?: IconVariant;
}

const BrickWallIcon = memo(forwardRef<SVGSVGElement, BrickWallIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrickWallIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrickWallIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrickWallIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrickWallIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBrickWallIcon ref={ref} {...props} />;
  }
}));

BrickWallIcon.displayName = 'BrickWallIcon';

export { BrickWallIcon };
