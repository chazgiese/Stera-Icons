import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleUpRegular } from './ChevronFullCircleUpRegular';
import { ChevronFullCircleUpRegularDuotone } from './ChevronFullCircleUpRegularDuotone';
import { ChevronFullCircleUpBold } from './ChevronFullCircleUpBold';
import { ChevronFullCircleUpBoldDuotone } from './ChevronFullCircleUpBoldDuotone';
import { ChevronFullCircleUpFill } from './ChevronFullCircleUpFill';
import { ChevronFullCircleUpFillDuotone } from './ChevronFullCircleUpFillDuotone';

export interface ChevronFullCircleUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullCircleUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullCircleUpRegular } from 'stera-icons/ChevronFullCircleUpRegular';
 */
const ChevronFullCircleUp = memo(forwardRef<SVGSVGElement, ChevronFullCircleUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullCircleUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullCircleUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullCircleUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullCircleUpRegular ref={ref} {...rest} />;
}));

ChevronFullCircleUp.displayName = 'ChevronFullCircleUp';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUp, ChevronFullCircleUp as ChevronFullCircleUpIcon, ChevronFullCircleUp as SiChevronFullCircleUp };
