import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowSquareUpRegular } from './ArrowSquareUpRegular.js';
import { ArrowSquareUpRegularDuotone } from './ArrowSquareUpRegularDuotone.js';
import { ArrowSquareUpBold } from './ArrowSquareUpBold.js';
import { ArrowSquareUpBoldDuotone } from './ArrowSquareUpBoldDuotone.js';
import { ArrowSquareUpFill } from './ArrowSquareUpFill.js';
import { ArrowSquareUpFillDuotone } from './ArrowSquareUpFillDuotone.js';

export interface ArrowSquareUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareUpRegular } from 'stera-icons/icons/ArrowSquareUpRegular';
 */
const ArrowSquareUp = memo(forwardRef<SVGSVGElement, ArrowSquareUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareUpFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareUpRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareUpRegular ref={ref} {...rest} />;
}));

ArrowSquareUp.displayName = 'ArrowSquareUp';

// Triple export pattern (lucide-react style)
export { ArrowSquareUp, ArrowSquareUp as ArrowSquareUpIcon, ArrowSquareUp as SiArrowSquareUp };
export default ArrowSquareUp;
