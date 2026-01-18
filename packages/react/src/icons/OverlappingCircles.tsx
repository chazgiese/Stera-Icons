import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OverlappingCirclesRegular } from './OverlappingCirclesRegular';
import { OverlappingCirclesRegularDuotone } from './OverlappingCirclesRegularDuotone';
import { OverlappingCirclesBold } from './OverlappingCirclesBold';
import { OverlappingCirclesBoldDuotone } from './OverlappingCirclesBoldDuotone';
import { OverlappingCirclesFill } from './OverlappingCirclesFill';
import { OverlappingCirclesFillDuotone } from './OverlappingCirclesFillDuotone';

export interface OverlappingCirclesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * OverlappingCircles with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { OverlappingCirclesRegular } from 'stera-icons/OverlappingCirclesRegular';
 */
const OverlappingCircles = memo(forwardRef<SVGSVGElement, OverlappingCirclesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <OverlappingCirclesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <OverlappingCirclesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <OverlappingCirclesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <OverlappingCirclesFill ref={ref} {...rest} />;
  if (duotone) return <OverlappingCirclesRegularDuotone ref={ref} {...rest} />;
  return <OverlappingCirclesRegular ref={ref} {...rest} />;
}));

OverlappingCircles.displayName = 'OverlappingCircles';

export { OverlappingCircles };
