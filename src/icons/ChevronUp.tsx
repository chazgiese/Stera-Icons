import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronUpRegular } from './ChevronUpRegular.js';
import { ChevronUpRegularDuotone } from './ChevronUpRegularDuotone.js';
import { ChevronUpBold } from './ChevronUpBold.js';
import { ChevronUpBoldDuotone } from './ChevronUpBoldDuotone.js';
import { ChevronUpFill } from './ChevronUpFill.js';
import { ChevronUpFillDuotone } from './ChevronUpFillDuotone.js';

export interface ChevronUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronUpRegular } from 'stera-icons/icons/ChevronUpRegular';
 */
const ChevronUp = memo(forwardRef<SVGSVGElement, ChevronUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronUpRegular ref={ref} {...rest} />;
}));

ChevronUp.displayName = 'ChevronUp';

// Triple export pattern (lucide-react style)
export { ChevronUp, ChevronUp as ChevronUpIcon, ChevronUp as SiChevronUp };
export default ChevronUp;
