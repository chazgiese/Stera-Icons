import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullSquareLeftRegular } from './ChevronFullSquareLeftRegular.js';
import { ChevronFullSquareLeftRegularDuotone } from './ChevronFullSquareLeftRegularDuotone.js';
import { ChevronFullSquareLeftBold } from './ChevronFullSquareLeftBold.js';
import { ChevronFullSquareLeftBoldDuotone } from './ChevronFullSquareLeftBoldDuotone.js';
import { ChevronFullSquareLeftFill } from './ChevronFullSquareLeftFill.js';
import { ChevronFullSquareLeftFillDuotone } from './ChevronFullSquareLeftFillDuotone.js';

export interface ChevronFullSquareLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullSquareLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullSquareLeftRegular } from 'stera-icons/icons/ChevronFullSquareLeftRegular';
 */
const ChevronFullSquareLeft = memo(forwardRef<SVGSVGElement, ChevronFullSquareLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullSquareLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullSquareLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullSquareLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullSquareLeftRegular ref={ref} {...rest} />;
}));

ChevronFullSquareLeft.displayName = 'ChevronFullSquareLeft';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareLeft, ChevronFullSquareLeft as ChevronFullSquareLeftIcon, ChevronFullSquareLeft as SiChevronFullSquareLeft };
export default ChevronFullSquareLeft;
