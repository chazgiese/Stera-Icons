import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareLeftRegular } from './ChevronSquareLeftRegular';
import { ChevronSquareLeftRegularDuotone } from './ChevronSquareLeftRegularDuotone';
import { ChevronSquareLeftBold } from './ChevronSquareLeftBold';
import { ChevronSquareLeftBoldDuotone } from './ChevronSquareLeftBoldDuotone';
import { ChevronSquareLeftFill } from './ChevronSquareLeftFill';
import { ChevronSquareLeftFillDuotone } from './ChevronSquareLeftFillDuotone';

export interface ChevronSquareLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronSquareLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronSquareLeftRegular } from 'stera-icons/icons/ChevronSquareLeftRegular';
 */
const ChevronSquareLeft = memo(forwardRef<SVGSVGElement, ChevronSquareLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronSquareLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronSquareLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronSquareLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronSquareLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronSquareLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronSquareLeftRegular ref={ref} {...rest} />;
}));

ChevronSquareLeft.displayName = 'ChevronSquareLeft';

// Triple export pattern (lucide-react style)
export { ChevronSquareLeft, ChevronSquareLeft as ChevronSquareLeftIcon, ChevronSquareLeft as SiChevronSquareLeft };
export default ChevronSquareLeft;
