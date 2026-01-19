import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineDownRegular } from './ArrowLineDownRegular';
import { ArrowLineDownRegularDuotone } from './ArrowLineDownRegularDuotone';
import { ArrowLineDownBold } from './ArrowLineDownBold';
import { ArrowLineDownBoldDuotone } from './ArrowLineDownBoldDuotone';
import { ArrowLineDownFill } from './ArrowLineDownFill';
import { ArrowLineDownFillDuotone } from './ArrowLineDownFillDuotone';

export interface ArrowLineDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLineDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLineDownRegular } from 'stera-icons/icons/ArrowLineDownRegular';
 */
const ArrowLineDown = memo(forwardRef<SVGSVGElement, ArrowLineDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLineDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLineDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLineDownFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLineDownRegularDuotone ref={ref} {...rest} />;
  return <ArrowLineDownRegular ref={ref} {...rest} />;
}));

ArrowLineDown.displayName = 'ArrowLineDown';

// Triple export pattern (lucide-react style)
export { ArrowLineDown, ArrowLineDown as ArrowLineDownIcon, ArrowLineDown as SiArrowLineDown };
