import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DropletIcon as DropletIconRegular } from './droplet';
import { DropletIconBold } from './droplet-bold';
import { DropletIconFilled } from './droplet-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <DropletIconRegular ref={ref} {...props} />;
  }
}));

DropletIcon.displayName = 'DropletIcon';

export { DropletIcon };
