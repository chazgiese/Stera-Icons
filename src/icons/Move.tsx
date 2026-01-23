import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MoveRegular } from './MoveRegular.js';
import { MoveRegularDuotone } from './MoveRegularDuotone.js';
import { MoveBold } from './MoveBold.js';
import { MoveBoldDuotone } from './MoveBoldDuotone.js';
import { MoveFill } from './MoveFill.js';
import { MoveFillDuotone } from './MoveFillDuotone.js';

export interface MoveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Move - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoveRegular } from 'stera-icons/icons/MoveRegular';
 */
const Move = memo(forwardRef<SVGSVGElement, MoveProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoveBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoveBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoveFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoveFill ref={ref} {...rest} />;
  if (duotone) return <MoveRegularDuotone ref={ref} {...rest} />;
  return <MoveRegular ref={ref} {...rest} />;
}));

Move.displayName = 'Move';

// Triple export pattern (lucide-react style)
export { Move, Move as MoveIcon, Move as SiMove };
export default Move;
