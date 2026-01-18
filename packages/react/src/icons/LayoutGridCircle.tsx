import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutGridCircleRegular } from './LayoutGridCircleRegular';
import { LayoutGridCircleRegularDuotone } from './LayoutGridCircleRegularDuotone';
import { LayoutGridCircleBold } from './LayoutGridCircleBold';
import { LayoutGridCircleBoldDuotone } from './LayoutGridCircleBoldDuotone';
import { LayoutGridCircleFill } from './LayoutGridCircleFill';
import { LayoutGridCircleFillDuotone } from './LayoutGridCircleFillDuotone';

export interface LayoutGridCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutGridCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutGridCircleRegular } from 'stera-icons/LayoutGridCircleRegular';
 */
const LayoutGridCircle = memo(forwardRef<SVGSVGElement, LayoutGridCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutGridCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutGridCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutGridCircleFill ref={ref} {...rest} />;
  if (duotone) return <LayoutGridCircleRegularDuotone ref={ref} {...rest} />;
  return <LayoutGridCircleRegular ref={ref} {...rest} />;
}));

LayoutGridCircle.displayName = 'LayoutGridCircle';

// Triple export pattern (lucide-react style)
export { LayoutGridCircle, LayoutGridCircle as LayoutGridCircleIcon, LayoutGridCircle as SiLayoutGridCircle };
