import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronUpSquareRegular } from './ChevronUpSquareRegular.js';
import { ChevronUpSquareRegularDuotone } from './ChevronUpSquareRegularDuotone.js';
import { ChevronUpSquareBold } from './ChevronUpSquareBold.js';
import { ChevronUpSquareBoldDuotone } from './ChevronUpSquareBoldDuotone.js';
import { ChevronUpSquareFill } from './ChevronUpSquareFill.js';
import { ChevronUpSquareFillDuotone } from './ChevronUpSquareFillDuotone.js';

export interface ChevronUpSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronUpSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronUpSquareRegular } from 'stera-icons/icons/ChevronUpSquareRegular';
 */
const ChevronUpSquare = memo(forwardRef<SVGSVGElement, ChevronUpSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronUpSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronUpSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronUpSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronUpSquareFill ref={ref} {...rest} />;
  if (duotone) return <ChevronUpSquareRegularDuotone ref={ref} {...rest} />;
  return <ChevronUpSquareRegular ref={ref} {...rest} />;
}));

ChevronUpSquare.displayName = 'ChevronUpSquare';

// Triple export pattern
export { ChevronUpSquare, ChevronUpSquare as ChevronUpSquareIcon, ChevronUpSquare as SiChevronUpSquare };
export default ChevronUpSquare;
