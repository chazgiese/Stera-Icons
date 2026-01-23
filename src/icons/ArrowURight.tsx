import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowURightRegular } from './ArrowURightRegular.js';
import { ArrowURightRegularDuotone } from './ArrowURightRegularDuotone.js';
import { ArrowURightBold } from './ArrowURightBold.js';
import { ArrowURightBoldDuotone } from './ArrowURightBoldDuotone.js';
import { ArrowURightFill } from './ArrowURightFill.js';
import { ArrowURightFillDuotone } from './ArrowURightFillDuotone.js';

export interface ArrowURightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowURight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowURightRegular } from 'stera-icons/icons/ArrowURightRegular';
 */
const ArrowURight = memo(forwardRef<SVGSVGElement, ArrowURightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowURightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowURightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowURightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowURightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowURightRegularDuotone ref={ref} {...rest} />;
  return <ArrowURightRegular ref={ref} {...rest} />;
}));

ArrowURight.displayName = 'ArrowURight';

// Triple export pattern (lucide-react style)
export { ArrowURight, ArrowURight as ArrowURightIcon, ArrowURight as SiArrowURight };
export default ArrowURight;
