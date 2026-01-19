import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleDownRegular } from './ArrowCircleDownRegular';
import { ArrowCircleDownRegularDuotone } from './ArrowCircleDownRegularDuotone';
import { ArrowCircleDownBold } from './ArrowCircleDownBold';
import { ArrowCircleDownBoldDuotone } from './ArrowCircleDownBoldDuotone';
import { ArrowCircleDownFill } from './ArrowCircleDownFill';
import { ArrowCircleDownFillDuotone } from './ArrowCircleDownFillDuotone';

export interface ArrowCircleDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleDownRegular } from 'stera-icons/icons/ArrowCircleDownRegular';
 */
const ArrowCircleDown = memo(forwardRef<SVGSVGElement, ArrowCircleDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleDownFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleDownRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleDownRegular ref={ref} {...rest} />;
}));

ArrowCircleDown.displayName = 'ArrowCircleDown';

// Triple export pattern (lucide-react style)
export { ArrowCircleDown, ArrowCircleDown as ArrowCircleDownIcon, ArrowCircleDown as SiArrowCircleDown };
