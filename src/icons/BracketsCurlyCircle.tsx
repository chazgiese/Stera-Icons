import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BracketsCurlyCircleRegular } from './BracketsCurlyCircleRegular.js';
import { BracketsCurlyCircleRegularDuotone } from './BracketsCurlyCircleRegularDuotone.js';
import { BracketsCurlyCircleBold } from './BracketsCurlyCircleBold.js';
import { BracketsCurlyCircleBoldDuotone } from './BracketsCurlyCircleBoldDuotone.js';
import { BracketsCurlyCircleFill } from './BracketsCurlyCircleFill.js';
import { BracketsCurlyCircleFillDuotone } from './BracketsCurlyCircleFillDuotone.js';

export interface BracketsCurlyCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsCurlyCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsCurlyCircleRegular } from 'stera-icons/icons/BracketsCurlyCircleRegular';
 */
const BracketsCurlyCircle = memo(forwardRef<SVGSVGElement, BracketsCurlyCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsCurlyCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BracketsCurlyCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BracketsCurlyCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BracketsCurlyCircleFill ref={ref} {...rest} />;
  if (duotone) return <BracketsCurlyCircleRegularDuotone ref={ref} {...rest} />;
  return <BracketsCurlyCircleRegular ref={ref} {...rest} />;
}));

BracketsCurlyCircle.displayName = 'BracketsCurlyCircle';

// Triple export pattern (lucide-react style)
export { BracketsCurlyCircle, BracketsCurlyCircle as BracketsCurlyCircleIcon, BracketsCurlyCircle as SiBracketsCurlyCircle };
export default BracketsCurlyCircle;
