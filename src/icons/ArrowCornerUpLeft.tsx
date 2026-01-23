import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowCornerUpLeftRegular } from './ArrowCornerUpLeftRegular.js';
import { ArrowCornerUpLeftRegularDuotone } from './ArrowCornerUpLeftRegularDuotone.js';
import { ArrowCornerUpLeftBold } from './ArrowCornerUpLeftBold.js';
import { ArrowCornerUpLeftBoldDuotone } from './ArrowCornerUpLeftBoldDuotone.js';
import { ArrowCornerUpLeftFill } from './ArrowCornerUpLeftFill.js';
import { ArrowCornerUpLeftFillDuotone } from './ArrowCornerUpLeftFillDuotone.js';

export interface ArrowCornerUpLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCornerUpLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCornerUpLeftRegular } from 'stera-icons/icons/ArrowCornerUpLeftRegular';
 */
const ArrowCornerUpLeft = memo(forwardRef<SVGSVGElement, ArrowCornerUpLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerUpLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCornerUpLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCornerUpLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCornerUpLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCornerUpLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowCornerUpLeftRegular ref={ref} {...rest} />;
}));

ArrowCornerUpLeft.displayName = 'ArrowCornerUpLeft';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeft, ArrowCornerUpLeft as ArrowCornerUpLeftIcon, ArrowCornerUpLeft as SiArrowCornerUpLeft };
export default ArrowCornerUpLeft;
