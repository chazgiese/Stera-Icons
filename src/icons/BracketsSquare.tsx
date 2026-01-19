import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsSquareRegular } from './BracketsSquareRegular';
import { BracketsSquareRegularDuotone } from './BracketsSquareRegularDuotone';
import { BracketsSquareBold } from './BracketsSquareBold';
import { BracketsSquareBoldDuotone } from './BracketsSquareBoldDuotone';
import { BracketsSquareFill } from './BracketsSquareFill';
import { BracketsSquareFillDuotone } from './BracketsSquareFillDuotone';

export interface BracketsSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsSquareRegular } from 'stera-icons/icons/BracketsSquareRegular';
 */
const BracketsSquare = memo(forwardRef<SVGSVGElement, BracketsSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BracketsSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BracketsSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BracketsSquareFill ref={ref} {...rest} />;
  if (duotone) return <BracketsSquareRegularDuotone ref={ref} {...rest} />;
  return <BracketsSquareRegular ref={ref} {...rest} />;
}));

BracketsSquare.displayName = 'BracketsSquare';

// Triple export pattern (lucide-react style)
export { BracketsSquare, BracketsSquare as BracketsSquareIcon, BracketsSquare as SiBracketsSquare };
