import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullCircleUpRegular } from './ChevronFullCircleUpRegular.js';
import { ChevronFullCircleUpRegularDuotone } from './ChevronFullCircleUpRegularDuotone.js';
import { ChevronFullCircleUpBold } from './ChevronFullCircleUpBold.js';
import { ChevronFullCircleUpBoldDuotone } from './ChevronFullCircleUpBoldDuotone.js';
import { ChevronFullCircleUpFill } from './ChevronFullCircleUpFill.js';
import { ChevronFullCircleUpFillDuotone } from './ChevronFullCircleUpFillDuotone.js';

export interface ChevronFullCircleUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullCircleUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullCircleUpRegular } from 'stera-icons/icons/ChevronFullCircleUpRegular';
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
export default ChevronFullCircleUp;
