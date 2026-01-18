import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoveRegular } from './MoveRegular';
import { MoveRegularDuotone } from './MoveRegularDuotone';
import { MoveBold } from './MoveBold';
import { MoveBoldDuotone } from './MoveBoldDuotone';
import { MoveFill } from './MoveFill';
import { MoveFillDuotone } from './MoveFillDuotone';

export interface MoveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Move with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MoveRegular } from 'stera-icons/MoveRegular';
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

export { Move };
