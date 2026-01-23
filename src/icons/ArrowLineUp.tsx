import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowLineUpRegular } from './ArrowLineUpRegular.js';
import { ArrowLineUpRegularDuotone } from './ArrowLineUpRegularDuotone.js';
import { ArrowLineUpBold } from './ArrowLineUpBold.js';
import { ArrowLineUpBoldDuotone } from './ArrowLineUpBoldDuotone.js';
import { ArrowLineUpFill } from './ArrowLineUpFill.js';
import { ArrowLineUpFillDuotone } from './ArrowLineUpFillDuotone.js';

export interface ArrowLineUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLineUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLineUpRegular } from 'stera-icons/icons/ArrowLineUpRegular';
 */
const ArrowLineUp = memo(forwardRef<SVGSVGElement, ArrowLineUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLineUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLineUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLineUpFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLineUpRegularDuotone ref={ref} {...rest} />;
  return <ArrowLineUpRegular ref={ref} {...rest} />;
}));

ArrowLineUp.displayName = 'ArrowLineUp';

// Triple export pattern (lucide-react style)
export { ArrowLineUp, ArrowLineUp as ArrowLineUpIcon, ArrowLineUp as SiArrowLineUp };
export default ArrowLineUp;
