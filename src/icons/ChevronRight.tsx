import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronRightRegular } from './ChevronRightRegular.js';
import { ChevronRightRegularDuotone } from './ChevronRightRegularDuotone.js';
import { ChevronRightBold } from './ChevronRightBold.js';
import { ChevronRightBoldDuotone } from './ChevronRightBoldDuotone.js';
import { ChevronRightFill } from './ChevronRightFill.js';
import { ChevronRightFillDuotone } from './ChevronRightFillDuotone.js';

export interface ChevronRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronRightRegular } from 'stera-icons/icons/ChevronRightRegular';
 */
const ChevronRight = memo(forwardRef<SVGSVGElement, ChevronRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronRightRegular ref={ref} {...rest} />;
}));

ChevronRight.displayName = 'ChevronRight';

// Triple export pattern (lucide-react style)
export { ChevronRight, ChevronRight as ChevronRightIcon, ChevronRight as SiChevronRight };
export default ChevronRight;
