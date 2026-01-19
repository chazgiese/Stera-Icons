import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleLeftRegular } from './ChevronCircleLeftRegular';
import { ChevronCircleLeftRegularDuotone } from './ChevronCircleLeftRegularDuotone';
import { ChevronCircleLeftBold } from './ChevronCircleLeftBold';
import { ChevronCircleLeftBoldDuotone } from './ChevronCircleLeftBoldDuotone';
import { ChevronCircleLeftFill } from './ChevronCircleLeftFill';
import { ChevronCircleLeftFillDuotone } from './ChevronCircleLeftFillDuotone';

export interface ChevronCircleLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronCircleLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronCircleLeftRegular } from 'stera-icons/icons/ChevronCircleLeftRegular';
 */
const ChevronCircleLeft = memo(forwardRef<SVGSVGElement, ChevronCircleLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronCircleLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronCircleLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronCircleLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronCircleLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronCircleLeftRegular ref={ref} {...rest} />;
}));

ChevronCircleLeft.displayName = 'ChevronCircleLeft';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeft, ChevronCircleLeft as ChevronCircleLeftIcon, ChevronCircleLeft as SiChevronCircleLeft };
