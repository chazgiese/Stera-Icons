import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentCircleRegular } from './PercentCircleRegular';
import { PercentCircleRegularDuotone } from './PercentCircleRegularDuotone';
import { PercentCircleBold } from './PercentCircleBold';
import { PercentCircleBoldDuotone } from './PercentCircleBoldDuotone';
import { PercentCircleFill } from './PercentCircleFill';
import { PercentCircleFillDuotone } from './PercentCircleFillDuotone';

export interface PercentCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PercentCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PercentCircleRegular } from 'stera-icons/PercentCircleRegular';
 */
const PercentCircle = memo(forwardRef<SVGSVGElement, PercentCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PercentCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PercentCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PercentCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PercentCircleFill ref={ref} {...rest} />;
  if (duotone) return <PercentCircleRegularDuotone ref={ref} {...rest} />;
  return <PercentCircleRegular ref={ref} {...rest} />;
}));

PercentCircle.displayName = 'PercentCircle';

// Triple export pattern (lucide-react style)
export { PercentCircle, PercentCircle as PercentCircleIcon, PercentCircle as SiPercentCircle };
