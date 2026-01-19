import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MinusRegular } from './MinusRegular';
import { MinusRegularDuotone } from './MinusRegularDuotone';
import { MinusBold } from './MinusBold';
import { MinusBoldDuotone } from './MinusBoldDuotone';
import { MinusFill } from './MinusFill';
import { MinusFillDuotone } from './MinusFillDuotone';

export interface MinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Minus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MinusRegular } from 'stera-icons/icons/MinusRegular';
 */
const Minus = memo(forwardRef<SVGSVGElement, MinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MinusFill ref={ref} {...rest} />;
  if (duotone) return <MinusRegularDuotone ref={ref} {...rest} />;
  return <MinusRegular ref={ref} {...rest} />;
}));

Minus.displayName = 'Minus';

// Triple export pattern (lucide-react style)
export { Minus, Minus as MinusIcon, Minus as SiMinus };
export default Minus;
