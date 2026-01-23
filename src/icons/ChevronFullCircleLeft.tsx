import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullCircleLeftRegular } from './ChevronFullCircleLeftRegular.js';
import { ChevronFullCircleLeftRegularDuotone } from './ChevronFullCircleLeftRegularDuotone.js';
import { ChevronFullCircleLeftBold } from './ChevronFullCircleLeftBold.js';
import { ChevronFullCircleLeftBoldDuotone } from './ChevronFullCircleLeftBoldDuotone.js';
import { ChevronFullCircleLeftFill } from './ChevronFullCircleLeftFill.js';
import { ChevronFullCircleLeftFillDuotone } from './ChevronFullCircleLeftFillDuotone.js';

export interface ChevronFullCircleLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullCircleLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullCircleLeftRegular } from 'stera-icons/icons/ChevronFullCircleLeftRegular';
 */
const ChevronFullCircleLeft = memo(forwardRef<SVGSVGElement, ChevronFullCircleLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullCircleLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullCircleLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullCircleLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullCircleLeftRegular ref={ref} {...rest} />;
}));

ChevronFullCircleLeft.displayName = 'ChevronFullCircleLeft';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeft, ChevronFullCircleLeft as ChevronFullCircleLeftIcon, ChevronFullCircleLeft as SiChevronFullCircleLeft };
export default ChevronFullCircleLeft;
