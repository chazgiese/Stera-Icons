import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BasketRegular } from './BasketRegular';
import { BasketRegularDuotone } from './BasketRegularDuotone';
import { BasketBold } from './BasketBold';
import { BasketBoldDuotone } from './BasketBoldDuotone';
import { BasketFill } from './BasketFill';
import { BasketFillDuotone } from './BasketFillDuotone';

export interface BasketProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Basket - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BasketRegular } from 'stera-icons/BasketRegular';
 */
const Basket = memo(forwardRef<SVGSVGElement, BasketProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BasketBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BasketBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BasketFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BasketFill ref={ref} {...rest} />;
  if (duotone) return <BasketRegularDuotone ref={ref} {...rest} />;
  return <BasketRegular ref={ref} {...rest} />;
}));

Basket.displayName = 'Basket';

// Triple export pattern (lucide-react style)
export { Basket, Basket as BasketIcon, Basket as SiBasket };
