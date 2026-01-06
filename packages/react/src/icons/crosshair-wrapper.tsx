import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CrosshairIcon as RegularCrosshairIcon } from './crosshair';
import { CrosshairIconDuotone as CrosshairIconDuotone } from './crosshair-duotone';
import { CrosshairIconBold as CrosshairIconBold } from './crosshair-bold';
import { CrosshairIconBoldDuotone as CrosshairIconBoldDuotone } from './crosshair-bold-duotone';
import { CrosshairIconFill as CrosshairIconFill } from './crosshair-fill';
import { CrosshairIconFillDuotone as CrosshairIconFillDuotone } from './crosshair-fill-duotone';

export interface CrosshairIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CrosshairIcon = memo(forwardRef<SVGSVGElement, CrosshairIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CrosshairIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CrosshairIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CrosshairIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CrosshairIconFill ref={ref} {...props} />;
  if (duotone) return <CrosshairIconDuotone ref={ref} {...props} />;
  return <RegularCrosshairIcon ref={ref} {...props} />;
}));

CrosshairIcon.displayName = 'CrosshairIcon';

export { CrosshairIcon };
