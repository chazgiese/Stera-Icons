import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpRightRegular } from './ArrowSquareUpRightRegular';
import { ArrowSquareUpRightRegularDuotone } from './ArrowSquareUpRightRegularDuotone';
import { ArrowSquareUpRightBold } from './ArrowSquareUpRightBold';
import { ArrowSquareUpRightBoldDuotone } from './ArrowSquareUpRightBoldDuotone';
import { ArrowSquareUpRightFill } from './ArrowSquareUpRightFill';
import { ArrowSquareUpRightFillDuotone } from './ArrowSquareUpRightFillDuotone';

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
