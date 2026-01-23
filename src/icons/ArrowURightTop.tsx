import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowURightTopRegular } from './ArrowURightTopRegular.js';
import { ArrowURightTopRegularDuotone } from './ArrowURightTopRegularDuotone.js';
import { ArrowURightTopBold } from './ArrowURightTopBold.js';
import { ArrowURightTopBoldDuotone } from './ArrowURightTopBoldDuotone.js';
import { ArrowURightTopFill } from './ArrowURightTopFill.js';
import { ArrowURightTopFillDuotone } from './ArrowURightTopFillDuotone.js';

export interface ArrowURightTopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowURightTop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowURightTopRegular } from 'stera-icons/icons/ArrowURightTopRegular';
 */
const ArrowURightTop = memo(forwardRef<SVGSVGElement, ArrowURightTopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowURightTopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowURightTopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowURightTopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowURightTopFill ref={ref} {...rest} />;
  if (duotone) return <ArrowURightTopRegularDuotone ref={ref} {...rest} />;
  return <ArrowURightTopRegular ref={ref} {...rest} />;
}));

ArrowURightTop.displayName = 'ArrowURightTop';

// Triple export pattern (lucide-react style)
export { ArrowURightTop, ArrowURightTop as ArrowURightTopIcon, ArrowURightTop as SiArrowURightTop };
export default ArrowURightTop;
