import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownRightRegular } from './ArrowDownRightRegular.js';
import { ArrowDownRightRegularDuotone } from './ArrowDownRightRegularDuotone.js';
import { ArrowDownRightBold } from './ArrowDownRightBold.js';
import { ArrowDownRightBoldDuotone } from './ArrowDownRightBoldDuotone.js';
import { ArrowDownRightFill } from './ArrowDownRightFill.js';
import { ArrowDownRightFillDuotone } from './ArrowDownRightFillDuotone.js';

export interface ArrowDownRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownRightRegular } from 'stera-icons/icons/ArrowDownRightRegular';
 */
const ArrowDownRight = memo(forwardRef<SVGSVGElement, ArrowDownRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownRightRegular ref={ref} {...rest} />;
}));

ArrowDownRight.displayName = 'ArrowDownRight';

// Triple export pattern (lucide-react style)
export { ArrowDownRight, ArrowDownRight as ArrowDownRightIcon, ArrowDownRight as SiArrowDownRight };
export default ArrowDownRight;
