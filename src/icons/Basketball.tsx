import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BasketballRegular } from './BasketballRegular.js';
import { BasketballRegularDuotone } from './BasketballRegularDuotone.js';
import { BasketballBold } from './BasketballBold.js';
import { BasketballBoldDuotone } from './BasketballBoldDuotone.js';
import { BasketballFill } from './BasketballFill.js';
import { BasketballFillDuotone } from './BasketballFillDuotone.js';

export interface BasketballProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Basketball - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BasketballRegular } from 'stera-icons/icons/BasketballRegular';
 */
const Basketball = memo(forwardRef<SVGSVGElement, BasketballProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BasketballBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BasketballBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BasketballFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BasketballFill ref={ref} {...rest} />;
  if (duotone) return <BasketballRegularDuotone ref={ref} {...rest} />;
  return <BasketballRegular ref={ref} {...rest} />;
}));

Basketball.displayName = 'Basketball';

// Triple export pattern (lucide-react style)
export { Basketball, Basketball as BasketballIcon, Basketball as SiBasketball };
export default Basketball;
