import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareDownRegular } from './ChevronSquareDownRegular';
import { ChevronSquareDownRegularDuotone } from './ChevronSquareDownRegularDuotone';
import { ChevronSquareDownBold } from './ChevronSquareDownBold';
import { ChevronSquareDownBoldDuotone } from './ChevronSquareDownBoldDuotone';
import { ChevronSquareDownFill } from './ChevronSquareDownFill';
import { ChevronSquareDownFillDuotone } from './ChevronSquareDownFillDuotone';

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
