import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowsUpDownRegular } from './ArrowsUpDownRegular.js';
import { ArrowsUpDownRegularDuotone } from './ArrowsUpDownRegularDuotone.js';
import { ArrowsUpDownBold } from './ArrowsUpDownBold.js';
import { ArrowsUpDownBoldDuotone } from './ArrowsUpDownBoldDuotone.js';
import { ArrowsUpDownFill } from './ArrowsUpDownFill.js';
import { ArrowsUpDownFillDuotone } from './ArrowsUpDownFillDuotone.js';

export interface ArrowsUpDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowsUpDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowsUpDownRegular } from 'stera-icons/icons/ArrowsUpDownRegular';
 */
const ArrowsUpDown = memo(forwardRef<SVGSVGElement, ArrowsUpDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowsUpDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowsUpDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowsUpDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowsUpDownFill ref={ref} {...rest} />;
  if (duotone) return <ArrowsUpDownRegularDuotone ref={ref} {...rest} />;
  return <ArrowsUpDownRegular ref={ref} {...rest} />;
}));

ArrowsUpDown.displayName = 'ArrowsUpDown';

// Triple export pattern (lucide-react style)
export { ArrowsUpDown, ArrowsUpDown as ArrowsUpDownIcon, ArrowsUpDown as SiArrowsUpDown };
export default ArrowsUpDown;
