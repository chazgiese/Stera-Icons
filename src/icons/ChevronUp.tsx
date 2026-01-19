import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronUpRegular } from './ChevronUpRegular';
import { ChevronUpRegularDuotone } from './ChevronUpRegularDuotone';
import { ChevronUpBold } from './ChevronUpBold';
import { ChevronUpBoldDuotone } from './ChevronUpBoldDuotone';
import { ChevronUpFill } from './ChevronUpFill';
import { ChevronUpFillDuotone } from './ChevronUpFillDuotone';

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
