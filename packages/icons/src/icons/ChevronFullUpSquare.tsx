import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullUpSquareRegular } from './ChevronFullUpSquareRegular.js';
import { ChevronFullUpSquareRegularDuotone } from './ChevronFullUpSquareRegularDuotone.js';
import { ChevronFullUpSquareBold } from './ChevronFullUpSquareBold.js';
import { ChevronFullUpSquareBoldDuotone } from './ChevronFullUpSquareBoldDuotone.js';
import { ChevronFullUpSquareFill } from './ChevronFullUpSquareFill.js';
import { ChevronFullUpSquareFillDuotone } from './ChevronFullUpSquareFillDuotone.js';

export interface ChevronFullUpSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullUpSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullUpSquareRegular } from 'stera-icons/icons/ChevronFullUpSquareRegular';
 */
const ChevronFullUpSquare = memo(forwardRef<SVGSVGElement, ChevronFullUpSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullUpSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullUpSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullUpSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullUpSquareFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullUpSquareRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullUpSquareRegular ref={ref} {...rest} />;
}));

ChevronFullUpSquare.displayName = 'ChevronFullUpSquare';

// Triple export pattern
export { ChevronFullUpSquare, ChevronFullUpSquare as ChevronFullUpSquareIcon, ChevronFullUpSquare as SiChevronFullUpSquare };
export default ChevronFullUpSquare;
