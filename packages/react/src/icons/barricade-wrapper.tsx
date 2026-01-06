import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarricadeIcon as RegularBarricadeIcon } from './barricade';
import { BarricadeIconDuotone as BarricadeIconDuotone } from './barricade-duotone';
import { BarricadeIconBold as BarricadeIconBold } from './barricade-bold';
import { BarricadeIconBoldDuotone as BarricadeIconBoldDuotone } from './barricade-bold-duotone';
import { BarricadeIconFill as BarricadeIconFill } from './barricade-fill';
import { BarricadeIconFillDuotone as BarricadeIconFillDuotone } from './barricade-fill-duotone';

export interface BarricadeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BarricadeIcon = memo(forwardRef<SVGSVGElement, BarricadeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BarricadeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BarricadeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BarricadeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BarricadeIconFill ref={ref} {...props} />;
  if (duotone) return <BarricadeIconDuotone ref={ref} {...props} />;
  return <RegularBarricadeIcon ref={ref} {...props} />;
}));

BarricadeIcon.displayName = 'BarricadeIcon';

export { BarricadeIcon };
