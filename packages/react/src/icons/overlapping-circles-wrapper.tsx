import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OverlappingCirclesIcon as RegularOverlappingCirclesIcon } from './overlapping-circles';
import { OverlappingCirclesIconDuotone as OverlappingCirclesIconDuotone } from './overlapping-circles-duotone';
import { OverlappingCirclesIconBold as OverlappingCirclesIconBold } from './overlapping-circles-bold';
import { OverlappingCirclesIconBoldDuotone as OverlappingCirclesIconBoldDuotone } from './overlapping-circles-bold-duotone';
import { OverlappingCirclesIconFill as OverlappingCirclesIconFill } from './overlapping-circles-fill';
import { OverlappingCirclesIconFillDuotone as OverlappingCirclesIconFillDuotone } from './overlapping-circles-fill-duotone';

export interface OverlappingCirclesIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const OverlappingCirclesIcon = memo(forwardRef<SVGSVGElement, OverlappingCirclesIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <OverlappingCirclesIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <OverlappingCirclesIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <OverlappingCirclesIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <OverlappingCirclesIconFill ref={ref} {...props} />;
  if (duotone) return <OverlappingCirclesIconDuotone ref={ref} {...props} />;
  return <RegularOverlappingCirclesIcon ref={ref} {...props} />;
}));

OverlappingCirclesIcon.displayName = 'OverlappingCirclesIcon';

export { OverlappingCirclesIcon };
