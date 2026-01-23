import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpDownRegular } from './ArrowUpDownRegular.js';
import { ArrowUpDownRegularDuotone } from './ArrowUpDownRegularDuotone.js';
import { ArrowUpDownBold } from './ArrowUpDownBold.js';
import { ArrowUpDownBoldDuotone } from './ArrowUpDownBoldDuotone.js';
import { ArrowUpDownFill } from './ArrowUpDownFill.js';
import { ArrowUpDownFillDuotone } from './ArrowUpDownFillDuotone.js';

export interface ArrowUpDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpDownRegular } from 'stera-icons/icons/ArrowUpDownRegular';
 */
const ArrowUpDown = memo(forwardRef<SVGSVGElement, ArrowUpDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpDownFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpDownRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpDownRegular ref={ref} {...rest} />;
}));

ArrowUpDown.displayName = 'ArrowUpDown';

// Triple export pattern (lucide-react style)
export { ArrowUpDown, ArrowUpDown as ArrowUpDownIcon, ArrowUpDown as SiArrowUpDown };
export default ArrowUpDown;
