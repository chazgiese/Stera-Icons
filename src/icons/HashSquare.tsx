import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HashSquareRegular } from './HashSquareRegular.js';
import { HashSquareRegularDuotone } from './HashSquareRegularDuotone.js';
import { HashSquareBold } from './HashSquareBold.js';
import { HashSquareBoldDuotone } from './HashSquareBoldDuotone.js';
import { HashSquareFill } from './HashSquareFill.js';
import { HashSquareFillDuotone } from './HashSquareFillDuotone.js';

export interface HashSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HashSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HashSquareRegular } from 'stera-icons/icons/HashSquareRegular';
 */
const HashSquare = memo(forwardRef<SVGSVGElement, HashSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HashSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HashSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HashSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HashSquareFill ref={ref} {...rest} />;
  if (duotone) return <HashSquareRegularDuotone ref={ref} {...rest} />;
  return <HashSquareRegular ref={ref} {...rest} />;
}));

HashSquare.displayName = 'HashSquare';

// Triple export pattern (lucide-react style)
export { HashSquare, HashSquare as HashSquareIcon, HashSquare as SiHashSquare };
export default HashSquare;
