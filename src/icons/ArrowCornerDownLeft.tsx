import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowCornerDownLeftRegular } from './ArrowCornerDownLeftRegular.js';
import { ArrowCornerDownLeftRegularDuotone } from './ArrowCornerDownLeftRegularDuotone.js';
import { ArrowCornerDownLeftBold } from './ArrowCornerDownLeftBold.js';
import { ArrowCornerDownLeftBoldDuotone } from './ArrowCornerDownLeftBoldDuotone.js';
import { ArrowCornerDownLeftFill } from './ArrowCornerDownLeftFill.js';
import { ArrowCornerDownLeftFillDuotone } from './ArrowCornerDownLeftFillDuotone.js';

export interface ArrowCornerDownLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCornerDownLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCornerDownLeftRegular } from 'stera-icons/icons/ArrowCornerDownLeftRegular';
 */
const ArrowCornerDownLeft = memo(forwardRef<SVGSVGElement, ArrowCornerDownLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerDownLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCornerDownLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCornerDownLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCornerDownLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCornerDownLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowCornerDownLeftRegular ref={ref} {...rest} />;
}));

ArrowCornerDownLeft.displayName = 'ArrowCornerDownLeft';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeft, ArrowCornerDownLeft as ArrowCornerDownLeftIcon, ArrowCornerDownLeft as SiArrowCornerDownLeft };
export default ArrowCornerDownLeft;
