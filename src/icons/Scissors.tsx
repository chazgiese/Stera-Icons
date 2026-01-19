import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScissorsRegular } from './ScissorsRegular';
import { ScissorsRegularDuotone } from './ScissorsRegularDuotone';
import { ScissorsBold } from './ScissorsBold';
import { ScissorsBoldDuotone } from './ScissorsBoldDuotone';
import { ScissorsFill } from './ScissorsFill';
import { ScissorsFillDuotone } from './ScissorsFillDuotone';

export interface ScissorsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Scissors - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScissorsRegular } from 'stera-icons/icons/ScissorsRegular';
 */
const Scissors = memo(forwardRef<SVGSVGElement, ScissorsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScissorsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScissorsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScissorsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScissorsFill ref={ref} {...rest} />;
  if (duotone) return <ScissorsRegularDuotone ref={ref} {...rest} />;
  return <ScissorsRegular ref={ref} {...rest} />;
}));

Scissors.displayName = 'Scissors';

// Triple export pattern (lucide-react style)
export { Scissors, Scissors as ScissorsIcon, Scissors as SiScissors };
export default Scissors;
