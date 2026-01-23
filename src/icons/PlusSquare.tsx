import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PlusSquareRegular } from './PlusSquareRegular.js';
import { PlusSquareRegularDuotone } from './PlusSquareRegularDuotone.js';
import { PlusSquareBold } from './PlusSquareBold.js';
import { PlusSquareBoldDuotone } from './PlusSquareBoldDuotone.js';
import { PlusSquareFill } from './PlusSquareFill.js';
import { PlusSquareFillDuotone } from './PlusSquareFillDuotone.js';

export interface PlusSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PlusSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PlusSquareRegular } from 'stera-icons/icons/PlusSquareRegular';
 */
const PlusSquare = memo(forwardRef<SVGSVGElement, PlusSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlusSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlusSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlusSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlusSquareFill ref={ref} {...rest} />;
  if (duotone) return <PlusSquareRegularDuotone ref={ref} {...rest} />;
  return <PlusSquareRegular ref={ref} {...rest} />;
}));

PlusSquare.displayName = 'PlusSquare';

// Triple export pattern (lucide-react style)
export { PlusSquare, PlusSquare as PlusSquareIcon, PlusSquare as SiPlusSquare };
export default PlusSquare;
