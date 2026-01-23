import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BracketsSquareSquareRegular } from './BracketsSquareSquareRegular.js';
import { BracketsSquareSquareRegularDuotone } from './BracketsSquareSquareRegularDuotone.js';
import { BracketsSquareSquareBold } from './BracketsSquareSquareBold.js';
import { BracketsSquareSquareBoldDuotone } from './BracketsSquareSquareBoldDuotone.js';
import { BracketsSquareSquareFill } from './BracketsSquareSquareFill.js';
import { BracketsSquareSquareFillDuotone } from './BracketsSquareSquareFillDuotone.js';

export interface BracketsSquareSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsSquareSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsSquareSquareRegular } from 'stera-icons/icons/BracketsSquareSquareRegular';
 */
const BracketsSquareSquare = memo(forwardRef<SVGSVGElement, BracketsSquareSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsSquareSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BracketsSquareSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BracketsSquareSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BracketsSquareSquareFill ref={ref} {...rest} />;
  if (duotone) return <BracketsSquareSquareRegularDuotone ref={ref} {...rest} />;
  return <BracketsSquareSquareRegular ref={ref} {...rest} />;
}));

BracketsSquareSquare.displayName = 'BracketsSquareSquare';

// Triple export pattern (lucide-react style)
export { BracketsSquareSquare, BracketsSquareSquare as BracketsSquareSquareIcon, BracketsSquareSquare as SiBracketsSquareSquare };
export default BracketsSquareSquare;
