import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleRightRegular } from './ChevronCircleRightRegular';
import { ChevronCircleRightRegularDuotone } from './ChevronCircleRightRegularDuotone';
import { ChevronCircleRightBold } from './ChevronCircleRightBold';
import { ChevronCircleRightBoldDuotone } from './ChevronCircleRightBoldDuotone';
import { ChevronCircleRightFill } from './ChevronCircleRightFill';
import { ChevronCircleRightFillDuotone } from './ChevronCircleRightFillDuotone';

export interface ChevronCircleRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronCircleRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronCircleRightRegular } from 'stera-icons/icons/ChevronCircleRightRegular';
 */
const ChevronCircleRight = memo(forwardRef<SVGSVGElement, ChevronCircleRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronCircleRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronCircleRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronCircleRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronCircleRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronCircleRightRegular ref={ref} {...rest} />;
}));

ChevronCircleRight.displayName = 'ChevronCircleRight';

// Triple export pattern (lucide-react style)
export { ChevronCircleRight, ChevronCircleRight as ChevronCircleRightIcon, ChevronCircleRight as SiChevronCircleRight };
