import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OverlappingCirclesDashIcon as RegularOverlappingCirclesDashIcon } from './overlapping-circles-dash';
import { OverlappingCirclesDashIconDuotone as OverlappingCirclesDashIconDuotone } from './overlapping-circles-dash-duotone';
import { OverlappingCirclesDashIconBold as OverlappingCirclesDashIconBold } from './overlapping-circles-dash-bold';
import { OverlappingCirclesDashIconBoldDuotone as OverlappingCirclesDashIconBoldDuotone } from './overlapping-circles-dash-bold-duotone';
import { OverlappingCirclesDashIconFill as OverlappingCirclesDashIconFill } from './overlapping-circles-dash-fill';
import { OverlappingCirclesDashIconFillDuotone as OverlappingCirclesDashIconFillDuotone } from './overlapping-circles-dash-fill-duotone';

export interface OverlappingCirclesDashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const OverlappingCirclesDashIcon = memo(forwardRef<SVGSVGElement, OverlappingCirclesDashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <OverlappingCirclesDashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <OverlappingCirclesDashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <OverlappingCirclesDashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <OverlappingCirclesDashIconFill ref={ref} {...props} />;
  if (duotone) return <OverlappingCirclesDashIconDuotone ref={ref} {...props} />;
  return <RegularOverlappingCirclesDashIcon ref={ref} {...props} />;
}));

OverlappingCirclesDashIcon.displayName = 'OverlappingCirclesDashIcon';

export { OverlappingCirclesDashIcon };
