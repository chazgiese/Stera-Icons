import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpLeftRegular } from './ArrowCircleUpLeftRegular';
import { ArrowCircleUpLeftRegularDuotone } from './ArrowCircleUpLeftRegularDuotone';
import { ArrowCircleUpLeftBold } from './ArrowCircleUpLeftBold';
import { ArrowCircleUpLeftBoldDuotone } from './ArrowCircleUpLeftBoldDuotone';
import { ArrowCircleUpLeftFill } from './ArrowCircleUpLeftFill';
import { ArrowCircleUpLeftFillDuotone } from './ArrowCircleUpLeftFillDuotone';

export interface ArrowCircleUpLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleUpLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleUpLeftRegular } from 'stera-icons/icons/ArrowCircleUpLeftRegular';
 */
const ArrowCircleUpLeft = memo(forwardRef<SVGSVGElement, ArrowCircleUpLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleUpLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleUpLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleUpLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleUpLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleUpLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleUpLeftRegular ref={ref} {...rest} />;
}));

ArrowCircleUpLeft.displayName = 'ArrowCircleUpLeft';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeft, ArrowCircleUpLeft as ArrowCircleUpLeftIcon, ArrowCircleUpLeft as SiArrowCircleUpLeft };
