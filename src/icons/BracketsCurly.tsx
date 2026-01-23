import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BracketsCurlyRegular } from './BracketsCurlyRegular.js';
import { BracketsCurlyRegularDuotone } from './BracketsCurlyRegularDuotone.js';
import { BracketsCurlyBold } from './BracketsCurlyBold.js';
import { BracketsCurlyBoldDuotone } from './BracketsCurlyBoldDuotone.js';
import { BracketsCurlyFill } from './BracketsCurlyFill.js';
import { BracketsCurlyFillDuotone } from './BracketsCurlyFillDuotone.js';

export interface BracketsCurlyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsCurly - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsCurlyRegular } from 'stera-icons/icons/BracketsCurlyRegular';
 */
const BracketsCurly = memo(forwardRef<SVGSVGElement, BracketsCurlyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsCurlyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BracketsCurlyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BracketsCurlyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BracketsCurlyFill ref={ref} {...rest} />;
  if (duotone) return <BracketsCurlyRegularDuotone ref={ref} {...rest} />;
  return <BracketsCurlyRegular ref={ref} {...rest} />;
}));

BracketsCurly.displayName = 'BracketsCurly';

// Triple export pattern (lucide-react style)
export { BracketsCurly, BracketsCurly as BracketsCurlyIcon, BracketsCurly as SiBracketsCurly };
export default BracketsCurly;
