import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlySquareRegular } from './BracketsCurlySquareRegular';
import { BracketsCurlySquareRegularDuotone } from './BracketsCurlySquareRegularDuotone';
import { BracketsCurlySquareBold } from './BracketsCurlySquareBold';
import { BracketsCurlySquareBoldDuotone } from './BracketsCurlySquareBoldDuotone';
import { BracketsCurlySquareFill } from './BracketsCurlySquareFill';
import { BracketsCurlySquareFillDuotone } from './BracketsCurlySquareFillDuotone';

export interface BracketsCurlySquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsCurlySquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsCurlySquareRegular } from 'stera-icons/icons/BracketsCurlySquareRegular';
 */
const BracketsCurlySquare = memo(forwardRef<SVGSVGElement, BracketsCurlySquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsCurlySquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BracketsCurlySquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BracketsCurlySquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BracketsCurlySquareFill ref={ref} {...rest} />;
  if (duotone) return <BracketsCurlySquareRegularDuotone ref={ref} {...rest} />;
  return <BracketsCurlySquareRegular ref={ref} {...rest} />;
}));

BracketsCurlySquare.displayName = 'BracketsCurlySquare';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquare, BracketsCurlySquare as BracketsCurlySquareIcon, BracketsCurlySquare as SiBracketsCurlySquare };
