import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullRightSquareRegular } from './ChevronFullRightSquareRegular.js';
import { ChevronFullRightSquareRegularDuotone } from './ChevronFullRightSquareRegularDuotone.js';
import { ChevronFullRightSquareBold } from './ChevronFullRightSquareBold.js';
import { ChevronFullRightSquareBoldDuotone } from './ChevronFullRightSquareBoldDuotone.js';
import { ChevronFullRightSquareFill } from './ChevronFullRightSquareFill.js';
import { ChevronFullRightSquareFillDuotone } from './ChevronFullRightSquareFillDuotone.js';

export interface ChevronFullRightSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullRightSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullRightSquareRegular } from 'stera-icons/icons/ChevronFullRightSquareRegular';
 */
const ChevronFullRightSquare = memo(forwardRef<SVGSVGElement, ChevronFullRightSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullRightSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullRightSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullRightSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullRightSquareFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullRightSquareRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullRightSquareRegular ref={ref} {...rest} />;
}));

ChevronFullRightSquare.displayName = 'ChevronFullRightSquare';

// Triple export pattern
export { ChevronFullRightSquare, ChevronFullRightSquare as ChevronFullRightSquareIcon, ChevronFullRightSquare as SiChevronFullRightSquare };
export default ChevronFullRightSquare;
