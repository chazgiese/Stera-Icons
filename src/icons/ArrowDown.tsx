import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowDownRegular } from './ArrowDownRegular';
import { ArrowDownRegularDuotone } from './ArrowDownRegularDuotone';
import { ArrowDownBold } from './ArrowDownBold';
import { ArrowDownBoldDuotone } from './ArrowDownBoldDuotone';
import { ArrowDownFill } from './ArrowDownFill';
import { ArrowDownFillDuotone } from './ArrowDownFillDuotone';

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
