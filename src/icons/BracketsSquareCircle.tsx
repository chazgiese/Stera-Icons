import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BracketsSquareCircleRegular } from './BracketsSquareCircleRegular.js';
import { BracketsSquareCircleRegularDuotone } from './BracketsSquareCircleRegularDuotone.js';
import { BracketsSquareCircleBold } from './BracketsSquareCircleBold.js';
import { BracketsSquareCircleBoldDuotone } from './BracketsSquareCircleBoldDuotone.js';
import { BracketsSquareCircleFill } from './BracketsSquareCircleFill.js';
import { BracketsSquareCircleFillDuotone } from './BracketsSquareCircleFillDuotone.js';

export interface BracketsSquareCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsSquareCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsSquareCircleRegular } from 'stera-icons/icons/BracketsSquareCircleRegular';
 */
const BracketsSquareCircle = memo(forwardRef<SVGSVGElement, BracketsSquareCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsSquareCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BracketsSquareCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BracketsSquareCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BracketsSquareCircleFill ref={ref} {...rest} />;
  if (duotone) return <BracketsSquareCircleRegularDuotone ref={ref} {...rest} />;
  return <BracketsSquareCircleRegular ref={ref} {...rest} />;
}));

BracketsSquareCircle.displayName = 'BracketsSquareCircle';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircle, BracketsSquareCircle as BracketsSquareCircleIcon, BracketsSquareCircle as SiBracketsSquareCircle };
export default BracketsSquareCircle;
