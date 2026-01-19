import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleDownLeftRegular } from './ArrowCircleDownLeftRegular';
import { ArrowCircleDownLeftRegularDuotone } from './ArrowCircleDownLeftRegularDuotone';
import { ArrowCircleDownLeftBold } from './ArrowCircleDownLeftBold';
import { ArrowCircleDownLeftBoldDuotone } from './ArrowCircleDownLeftBoldDuotone';
import { ArrowCircleDownLeftFill } from './ArrowCircleDownLeftFill';
import { ArrowCircleDownLeftFillDuotone } from './ArrowCircleDownLeftFillDuotone';

export interface ArrowCircleDownLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleDownLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleDownLeftRegular } from 'stera-icons/icons/ArrowCircleDownLeftRegular';
 */
const ArrowCircleDownLeft = memo(forwardRef<SVGSVGElement, ArrowCircleDownLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleDownLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleDownLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleDownLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleDownLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleDownLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleDownLeftRegular ref={ref} {...rest} />;
}));

ArrowCircleDownLeft.displayName = 'ArrowCircleDownLeft';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeft, ArrowCircleDownLeft as ArrowCircleDownLeftIcon, ArrowCircleDownLeft as SiArrowCircleDownLeft };
export default ArrowCircleDownLeft;
