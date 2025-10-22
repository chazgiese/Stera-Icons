import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DropletIcon as DropletIconRegular } from './droplet';
import { DropletIconBold } from './droplet-bold';
import { DropletIconFilled } from './droplet-filled';
import { DropletIconFilltone } from './droplet-filltone';
import { DropletIconLinetone } from './droplet-linetone';

export interface DropletIconProps extends IconProps {
  variant?: IconVariant;
}

const DropletIcon = memo(forwardRef<SVGSVGElement, DropletIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DropletIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DropletIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DropletIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DropletIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <DropletIconRegular ref={ref} {...props} />;
  }
}));

DropletIcon.displayName = 'DropletIcon';

export { DropletIcon };
