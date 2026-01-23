import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PauseCircleRegular } from './PauseCircleRegular.js';
import { PauseCircleRegularDuotone } from './PauseCircleRegularDuotone.js';
import { PauseCircleBold } from './PauseCircleBold.js';
import { PauseCircleBoldDuotone } from './PauseCircleBoldDuotone.js';
import { PauseCircleFill } from './PauseCircleFill.js';
import { PauseCircleFillDuotone } from './PauseCircleFillDuotone.js';

export interface PauseCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PauseCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PauseCircleRegular } from 'stera-icons/icons/PauseCircleRegular';
 */
const PauseCircle = memo(forwardRef<SVGSVGElement, PauseCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PauseCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PauseCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PauseCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PauseCircleFill ref={ref} {...rest} />;
  if (duotone) return <PauseCircleRegularDuotone ref={ref} {...rest} />;
  return <PauseCircleRegular ref={ref} {...rest} />;
}));

PauseCircle.displayName = 'PauseCircle';

// Triple export pattern (lucide-react style)
export { PauseCircle, PauseCircle as PauseCircleIcon, PauseCircle as SiPauseCircle };
export default PauseCircle;
