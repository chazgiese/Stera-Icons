import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DropletIcon as RegularDropletIcon } from './droplet';
import { DropletIconDuotone as DropletIconDuotone } from './droplet-duotone';
import { DropletIconBold as DropletIconBold } from './droplet-bold';
import { DropletIconBoldDuotone as DropletIconBoldDuotone } from './droplet-bold-duotone';
import { DropletIconFill as DropletIconFill } from './droplet-fill';
import { DropletIconFillDuotone as DropletIconFillDuotone } from './droplet-fill-duotone';

export interface DropletIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DropletIcon = memo(forwardRef<SVGSVGElement, DropletIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DropletIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DropletIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DropletIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DropletIconFill ref={ref} {...props} />;
  if (duotone) return <DropletIconDuotone ref={ref} {...props} />;
  return <RegularDropletIcon ref={ref} {...props} />;
}));

DropletIcon.displayName = 'DropletIcon';

export { DropletIcon };
