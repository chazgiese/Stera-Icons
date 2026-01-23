import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronCircleUpRegular } from './ChevronCircleUpRegular.js';
import { ChevronCircleUpRegularDuotone } from './ChevronCircleUpRegularDuotone.js';
import { ChevronCircleUpBold } from './ChevronCircleUpBold.js';
import { ChevronCircleUpBoldDuotone } from './ChevronCircleUpBoldDuotone.js';
import { ChevronCircleUpFill } from './ChevronCircleUpFill.js';
import { ChevronCircleUpFillDuotone } from './ChevronCircleUpFillDuotone.js';

export interface ChevronCircleUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronCircleUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronCircleUpRegular } from 'stera-icons/icons/ChevronCircleUpRegular';
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
export default ChevronCircleUp;
