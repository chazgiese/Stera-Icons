import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpRegular } from './ArrowUpRegular.js';
import { ArrowUpRegularDuotone } from './ArrowUpRegularDuotone.js';
import { ArrowUpBold } from './ArrowUpBold.js';
import { ArrowUpBoldDuotone } from './ArrowUpBoldDuotone.js';
import { ArrowUpFill } from './ArrowUpFill.js';
import { ArrowUpFillDuotone } from './ArrowUpFillDuotone.js';

export interface ArrowUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpRegular } from 'stera-icons/icons/ArrowUpRegular';
 */
const ArrowUp = memo(forwardRef<SVGSVGElement, ArrowUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpRegular ref={ref} {...rest} />;
}));

ArrowUp.displayName = 'ArrowUp';

// Triple export pattern (lucide-react style)
export { ArrowUp, ArrowUp as ArrowUpIcon, ArrowUp as SiArrowUp };
export default ArrowUp;
