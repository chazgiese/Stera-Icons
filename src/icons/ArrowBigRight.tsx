import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowBigRightRegular } from './ArrowBigRightRegular.js';
import { ArrowBigRightRegularDuotone } from './ArrowBigRightRegularDuotone.js';
import { ArrowBigRightBold } from './ArrowBigRightBold.js';
import { ArrowBigRightBoldDuotone } from './ArrowBigRightBoldDuotone.js';
import { ArrowBigRightFill } from './ArrowBigRightFill.js';
import { ArrowBigRightFillDuotone } from './ArrowBigRightFillDuotone.js';

export interface ArrowBigRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowBigRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowBigRightRegular } from 'stera-icons/icons/ArrowBigRightRegular';
 */
const ArrowBigRight = memo(forwardRef<SVGSVGElement, ArrowBigRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowBigRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowBigRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowBigRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowBigRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowBigRightRegular ref={ref} {...rest} />;
}));

ArrowBigRight.displayName = 'ArrowBigRight';

// Triple export pattern (lucide-react style)
export { ArrowBigRight, ArrowBigRight as ArrowBigRightIcon, ArrowBigRight as SiArrowBigRight };
export default ArrowBigRight;
