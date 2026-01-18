import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerUpLeftRegular } from './ArrowCornerUpLeftRegular';
import { ArrowCornerUpLeftRegularDuotone } from './ArrowCornerUpLeftRegularDuotone';
import { ArrowCornerUpLeftBold } from './ArrowCornerUpLeftBold';
import { ArrowCornerUpLeftBoldDuotone } from './ArrowCornerUpLeftBoldDuotone';
import { ArrowCornerUpLeftFill } from './ArrowCornerUpLeftFill';
import { ArrowCornerUpLeftFillDuotone } from './ArrowCornerUpLeftFillDuotone';

export interface ArrowCornerUpLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCornerUpLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCornerUpLeftRegular } from 'stera-icons/ArrowCornerUpLeftRegular';
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
