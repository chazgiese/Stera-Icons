import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleDownRegular } from './ChevronCircleDownRegular';
import { ChevronCircleDownRegularDuotone } from './ChevronCircleDownRegularDuotone';
import { ChevronCircleDownBold } from './ChevronCircleDownBold';
import { ChevronCircleDownBoldDuotone } from './ChevronCircleDownBoldDuotone';
import { ChevronCircleDownFill } from './ChevronCircleDownFill';
import { ChevronCircleDownFillDuotone } from './ChevronCircleDownFillDuotone';

export interface ChevronCircleDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronCircleDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronCircleDownRegular } from 'stera-icons/ChevronCircleDownRegular';
 */
const ChevronCircleDown = memo(forwardRef<SVGSVGElement, ChevronCircleDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronCircleDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronCircleDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronCircleDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronCircleDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronCircleDownRegular ref={ref} {...rest} />;
}));

ChevronCircleDown.displayName = 'ChevronCircleDown';

// Triple export pattern (lucide-react style)
export { ChevronCircleDown, ChevronCircleDown as ChevronCircleDownIcon, ChevronCircleDown as SiChevronCircleDown };
