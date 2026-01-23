import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullCircleDownRegular } from './ChevronFullCircleDownRegular.js';
import { ChevronFullCircleDownRegularDuotone } from './ChevronFullCircleDownRegularDuotone.js';
import { ChevronFullCircleDownBold } from './ChevronFullCircleDownBold.js';
import { ChevronFullCircleDownBoldDuotone } from './ChevronFullCircleDownBoldDuotone.js';
import { ChevronFullCircleDownFill } from './ChevronFullCircleDownFill.js';
import { ChevronFullCircleDownFillDuotone } from './ChevronFullCircleDownFillDuotone.js';

export interface ChevronFullCircleDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullCircleDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullCircleDownRegular } from 'stera-icons/icons/ChevronFullCircleDownRegular';
 */
const ChevronFullCircleDown = memo(forwardRef<SVGSVGElement, ChevronFullCircleDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullCircleDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullCircleDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullCircleDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullCircleDownRegular ref={ref} {...rest} />;
}));

ChevronFullCircleDown.displayName = 'ChevronFullCircleDown';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDown, ChevronFullCircleDown as ChevronFullCircleDownIcon, ChevronFullCircleDown as SiChevronFullCircleDown };
export default ChevronFullCircleDown;
