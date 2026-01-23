import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullDownRegular } from './ChevronFullDownRegular.js';
import { ChevronFullDownRegularDuotone } from './ChevronFullDownRegularDuotone.js';
import { ChevronFullDownBold } from './ChevronFullDownBold.js';
import { ChevronFullDownBoldDuotone } from './ChevronFullDownBoldDuotone.js';
import { ChevronFullDownFill } from './ChevronFullDownFill.js';
import { ChevronFullDownFillDuotone } from './ChevronFullDownFillDuotone.js';

export interface ChevronFullDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullDownRegular } from 'stera-icons/icons/ChevronFullDownRegular';
 */
const ChevronFullDown = memo(forwardRef<SVGSVGElement, ChevronFullDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullDownRegular ref={ref} {...rest} />;
}));

ChevronFullDown.displayName = 'ChevronFullDown';

// Triple export pattern (lucide-react style)
export { ChevronFullDown, ChevronFullDown as ChevronFullDownIcon, ChevronFullDown as SiChevronFullDown };
export default ChevronFullDown;
