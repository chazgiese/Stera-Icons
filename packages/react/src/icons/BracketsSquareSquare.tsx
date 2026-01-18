import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsSquareSquareRegular } from './BracketsSquareSquareRegular';
import { BracketsSquareSquareRegularDuotone } from './BracketsSquareSquareRegularDuotone';
import { BracketsSquareSquareBold } from './BracketsSquareSquareBold';
import { BracketsSquareSquareBoldDuotone } from './BracketsSquareSquareBoldDuotone';
import { BracketsSquareSquareFill } from './BracketsSquareSquareFill';
import { BracketsSquareSquareFillDuotone } from './BracketsSquareSquareFillDuotone';

export interface BracketsSquareSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsSquareSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsSquareSquareRegular } from 'stera-icons/BracketsSquareSquareRegular';
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
