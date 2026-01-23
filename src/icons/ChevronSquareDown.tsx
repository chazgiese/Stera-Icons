import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronSquareDownRegular } from './ChevronSquareDownRegular.js';
import { ChevronSquareDownRegularDuotone } from './ChevronSquareDownRegularDuotone.js';
import { ChevronSquareDownBold } from './ChevronSquareDownBold.js';
import { ChevronSquareDownBoldDuotone } from './ChevronSquareDownBoldDuotone.js';
import { ChevronSquareDownFill } from './ChevronSquareDownFill.js';
import { ChevronSquareDownFillDuotone } from './ChevronSquareDownFillDuotone.js';

export interface ChevronSquareDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronSquareDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronSquareDownRegular } from 'stera-icons/icons/ChevronSquareDownRegular';
 */
const ChevronSquareDown = memo(forwardRef<SVGSVGElement, ChevronSquareDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronSquareDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronSquareDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronSquareDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronSquareDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronSquareDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronSquareDownRegular ref={ref} {...rest} />;
}));

ChevronSquareDown.displayName = 'ChevronSquareDown';

// Triple export pattern (lucide-react style)
export { ChevronSquareDown, ChevronSquareDown as ChevronSquareDownIcon, ChevronSquareDown as SiChevronSquareDown };
export default ChevronSquareDown;
