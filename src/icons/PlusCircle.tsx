import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PlusCircleRegular } from './PlusCircleRegular.js';
import { PlusCircleRegularDuotone } from './PlusCircleRegularDuotone.js';
import { PlusCircleBold } from './PlusCircleBold.js';
import { PlusCircleBoldDuotone } from './PlusCircleBoldDuotone.js';
import { PlusCircleFill } from './PlusCircleFill.js';
import { PlusCircleFillDuotone } from './PlusCircleFillDuotone.js';

export interface PlusCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PlusCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PlusCircleRegular } from 'stera-icons/icons/PlusCircleRegular';
 */
const PlusCircle = memo(forwardRef<SVGSVGElement, PlusCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlusCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlusCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlusCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlusCircleFill ref={ref} {...rest} />;
  if (duotone) return <PlusCircleRegularDuotone ref={ref} {...rest} />;
  return <PlusCircleRegular ref={ref} {...rest} />;
}));

PlusCircle.displayName = 'PlusCircle';

// Triple export pattern (lucide-react style)
export { PlusCircle, PlusCircle as PlusCircleIcon, PlusCircle as SiPlusCircle };
export default PlusCircle;
