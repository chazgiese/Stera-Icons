import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownRegular } from './ArrowDownRegular.js';
import { ArrowDownRegularDuotone } from './ArrowDownRegularDuotone.js';
import { ArrowDownBold } from './ArrowDownBold.js';
import { ArrowDownBoldDuotone } from './ArrowDownBoldDuotone.js';
import { ArrowDownFill } from './ArrowDownFill.js';
import { ArrowDownFillDuotone } from './ArrowDownFillDuotone.js';

export interface ArrowDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownRegular } from 'stera-icons/icons/ArrowDownRegular';
 */
const ArrowDown = memo(forwardRef<SVGSVGElement, ArrowDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownRegular ref={ref} {...rest} />;
}));

ArrowDown.displayName = 'ArrowDown';

// Triple export pattern (lucide-react style)
export { ArrowDown, ArrowDown as ArrowDownIcon, ArrowDown as SiArrowDown };
export default ArrowDown;
