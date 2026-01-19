import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleLeftRegular } from './ArrowCircleLeftRegular';
import { ArrowCircleLeftRegularDuotone } from './ArrowCircleLeftRegularDuotone';
import { ArrowCircleLeftBold } from './ArrowCircleLeftBold';
import { ArrowCircleLeftBoldDuotone } from './ArrowCircleLeftBoldDuotone';
import { ArrowCircleLeftFill } from './ArrowCircleLeftFill';
import { ArrowCircleLeftFillDuotone } from './ArrowCircleLeftFillDuotone';

export interface ArrowCircleLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleLeftRegular } from 'stera-icons/icons/ArrowCircleLeftRegular';
 */
const ArrowCircleLeft = memo(forwardRef<SVGSVGElement, ArrowCircleLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleLeftRegular ref={ref} {...rest} />;
}));

ArrowCircleLeft.displayName = 'ArrowCircleLeft';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeft, ArrowCircleLeft as ArrowCircleLeftIcon, ArrowCircleLeft as SiArrowCircleLeft };
