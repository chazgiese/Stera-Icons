import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrickWallIcon as RegularBrickWallIcon } from './brick-wall';
import { BrickWallIconDuotone as BrickWallIconDuotone } from './brick-wall-duotone';
import { BrickWallIconBold as BrickWallIconBold } from './brick-wall-bold';
import { BrickWallIconBoldDuotone as BrickWallIconBoldDuotone } from './brick-wall-bold-duotone';
import { BrickWallIconFill as BrickWallIconFill } from './brick-wall-fill';
import { BrickWallIconFillDuotone as BrickWallIconFillDuotone } from './brick-wall-fill-duotone';

export interface BrickWallIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrickWallIcon = memo(forwardRef<SVGSVGElement, BrickWallIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrickWallIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrickWallIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrickWallIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrickWallIconFill ref={ref} {...props} />;
  if (duotone) return <BrickWallIconDuotone ref={ref} {...props} />;
  return <RegularBrickWallIcon ref={ref} {...props} />;
}));

BrickWallIcon.displayName = 'BrickWallIcon';

export { BrickWallIcon };
