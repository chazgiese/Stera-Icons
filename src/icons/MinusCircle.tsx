import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MinusCircleRegular } from './MinusCircleRegular.js';
import { MinusCircleRegularDuotone } from './MinusCircleRegularDuotone.js';
import { MinusCircleBold } from './MinusCircleBold.js';
import { MinusCircleBoldDuotone } from './MinusCircleBoldDuotone.js';
import { MinusCircleFill } from './MinusCircleFill.js';
import { MinusCircleFillDuotone } from './MinusCircleFillDuotone.js';

export interface MinusCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MinusCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MinusCircleRegular } from 'stera-icons/icons/MinusCircleRegular';
 */
const MinusCircle = memo(forwardRef<SVGSVGElement, MinusCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MinusCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MinusCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MinusCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MinusCircleFill ref={ref} {...rest} />;
  if (duotone) return <MinusCircleRegularDuotone ref={ref} {...rest} />;
  return <MinusCircleRegular ref={ref} {...rest} />;
}));

MinusCircle.displayName = 'MinusCircle';

// Triple export pattern (lucide-react style)
export { MinusCircle, MinusCircle as MinusCircleIcon, MinusCircle as SiMinusCircle };
export default MinusCircle;
