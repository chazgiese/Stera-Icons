import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullLeftRegular } from './ChevronFullLeftRegular';
import { ChevronFullLeftRegularDuotone } from './ChevronFullLeftRegularDuotone';
import { ChevronFullLeftBold } from './ChevronFullLeftBold';
import { ChevronFullLeftBoldDuotone } from './ChevronFullLeftBoldDuotone';
import { ChevronFullLeftFill } from './ChevronFullLeftFill';
import { ChevronFullLeftFillDuotone } from './ChevronFullLeftFillDuotone';

export interface ChevronFullLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullLeftRegular } from 'stera-icons/icons/ChevronFullLeftRegular';
 */
const ChevronFullLeft = memo(forwardRef<SVGSVGElement, ChevronFullLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullLeftRegular ref={ref} {...rest} />;
}));

ChevronFullLeft.displayName = 'ChevronFullLeft';

// Triple export pattern (lucide-react style)
export { ChevronFullLeft, ChevronFullLeft as ChevronFullLeftIcon, ChevronFullLeft as SiChevronFullLeft };
export default ChevronFullLeft;
