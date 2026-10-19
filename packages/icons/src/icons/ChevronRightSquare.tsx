import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronRightSquareRegular } from './ChevronRightSquareRegular.js';
import { ChevronRightSquareRegularDuotone } from './ChevronRightSquareRegularDuotone.js';
import { ChevronRightSquareBold } from './ChevronRightSquareBold.js';
import { ChevronRightSquareBoldDuotone } from './ChevronRightSquareBoldDuotone.js';
import { ChevronRightSquareFill } from './ChevronRightSquareFill.js';
import { ChevronRightSquareFillDuotone } from './ChevronRightSquareFillDuotone.js';

export interface ChevronRightSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronRightSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronRightSquareRegular } from 'stera-icons/icons/ChevronRightSquareRegular';
 */
const ChevronRightSquare = memo(forwardRef<SVGSVGElement, ChevronRightSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronRightSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronRightSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronRightSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronRightSquareFill ref={ref} {...rest} />;
  if (duotone) return <ChevronRightSquareRegularDuotone ref={ref} {...rest} />;
  return <ChevronRightSquareRegular ref={ref} {...rest} />;
}));

ChevronRightSquare.displayName = 'ChevronRightSquare';

// Triple export pattern
export { ChevronRightSquare, ChevronRightSquare as ChevronRightSquareIcon, ChevronRightSquare as SiChevronRightSquare };
export default ChevronRightSquare;
