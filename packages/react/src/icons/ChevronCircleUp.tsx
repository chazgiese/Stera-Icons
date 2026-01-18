import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleUpRegular } from './ChevronCircleUpRegular';
import { ChevronCircleUpRegularDuotone } from './ChevronCircleUpRegularDuotone';
import { ChevronCircleUpBold } from './ChevronCircleUpBold';
import { ChevronCircleUpBoldDuotone } from './ChevronCircleUpBoldDuotone';
import { ChevronCircleUpFill } from './ChevronCircleUpFill';
import { ChevronCircleUpFillDuotone } from './ChevronCircleUpFillDuotone';

export interface ChevronCircleUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronCircleUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronCircleUpRegular } from 'stera-icons/ChevronCircleUpRegular';
 */
const ChevronCircleUp = memo(forwardRef<SVGSVGElement, ChevronCircleUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronCircleUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronCircleUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronCircleUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronCircleUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronCircleUpRegular ref={ref} {...rest} />;
}));

ChevronCircleUp.displayName = 'ChevronCircleUp';

// Triple export pattern (lucide-react style)
export { ChevronCircleUp, ChevronCircleUp as ChevronCircleUpIcon, ChevronCircleUp as SiChevronCircleUp };
