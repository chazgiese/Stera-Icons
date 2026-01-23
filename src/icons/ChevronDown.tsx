import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronDownRegular } from './ChevronDownRegular.js';
import { ChevronDownRegularDuotone } from './ChevronDownRegularDuotone.js';
import { ChevronDownBold } from './ChevronDownBold.js';
import { ChevronDownBoldDuotone } from './ChevronDownBoldDuotone.js';
import { ChevronDownFill } from './ChevronDownFill.js';
import { ChevronDownFillDuotone } from './ChevronDownFillDuotone.js';

export interface ChevronDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronDownRegular } from 'stera-icons/icons/ChevronDownRegular';
 */
const ChevronDown = memo(forwardRef<SVGSVGElement, ChevronDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronDownRegular ref={ref} {...rest} />;
}));

ChevronDown.displayName = 'ChevronDown';

// Triple export pattern (lucide-react style)
export { ChevronDown, ChevronDown as ChevronDownIcon, ChevronDown as SiChevronDown };
export default ChevronDown;
