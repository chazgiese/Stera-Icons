import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowCornerDownRightRegular } from './ArrowCornerDownRightRegular.js';
import { ArrowCornerDownRightRegularDuotone } from './ArrowCornerDownRightRegularDuotone.js';
import { ArrowCornerDownRightBold } from './ArrowCornerDownRightBold.js';
import { ArrowCornerDownRightBoldDuotone } from './ArrowCornerDownRightBoldDuotone.js';
import { ArrowCornerDownRightFill } from './ArrowCornerDownRightFill.js';
import { ArrowCornerDownRightFillDuotone } from './ArrowCornerDownRightFillDuotone.js';

export interface ArrowCornerDownRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCornerDownRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCornerDownRightRegular } from 'stera-icons/icons/ArrowCornerDownRightRegular';
 */
const ArrowCornerDownRight = memo(forwardRef<SVGSVGElement, ArrowCornerDownRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerDownRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCornerDownRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCornerDownRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCornerDownRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCornerDownRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowCornerDownRightRegular ref={ref} {...rest} />;
}));

ArrowCornerDownRight.displayName = 'ArrowCornerDownRight';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRight, ArrowCornerDownRight as ArrowCornerDownRightIcon, ArrowCornerDownRight as SiArrowCornerDownRight };
export default ArrowCornerDownRight;
