import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowSquareUpRightRegular } from './ArrowSquareUpRightRegular.js';
import { ArrowSquareUpRightRegularDuotone } from './ArrowSquareUpRightRegularDuotone.js';
import { ArrowSquareUpRightBold } from './ArrowSquareUpRightBold.js';
import { ArrowSquareUpRightBoldDuotone } from './ArrowSquareUpRightBoldDuotone.js';
import { ArrowSquareUpRightFill } from './ArrowSquareUpRightFill.js';
import { ArrowSquareUpRightFillDuotone } from './ArrowSquareUpRightFillDuotone.js';

export interface ArrowSquareUpRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareUpRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareUpRightRegular } from 'stera-icons/icons/ArrowSquareUpRightRegular';
 */
const ArrowSquareUpRight = memo(forwardRef<SVGSVGElement, ArrowSquareUpRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareUpRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareUpRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareUpRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareUpRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareUpRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareUpRightRegular ref={ref} {...rest} />;
}));

ArrowSquareUpRight.displayName = 'ArrowSquareUpRight';

// Triple export pattern (lucide-react style)
export { ArrowSquareUpRight, ArrowSquareUpRight as ArrowSquareUpRightIcon, ArrowSquareUpRight as SiArrowSquareUpRight };
export default ArrowSquareUpRight;
