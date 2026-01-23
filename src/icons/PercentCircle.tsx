import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PercentCircleRegular } from './PercentCircleRegular.js';
import { PercentCircleRegularDuotone } from './PercentCircleRegularDuotone.js';
import { PercentCircleBold } from './PercentCircleBold.js';
import { PercentCircleBoldDuotone } from './PercentCircleBoldDuotone.js';
import { PercentCircleFill } from './PercentCircleFill.js';
import { PercentCircleFillDuotone } from './PercentCircleFillDuotone.js';

export interface PercentCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PercentCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PercentCircleRegular } from 'stera-icons/icons/PercentCircleRegular';
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
export default PercentCircle;
