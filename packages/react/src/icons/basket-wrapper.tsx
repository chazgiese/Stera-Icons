import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BasketIcon as RegularBasketIcon } from './basket';
import { BasketIconDuotone as BasketIconDuotone } from './basket-duotone';
import { BasketIconBold as BasketIconBold } from './basket-bold';
import { BasketIconBoldDuotone as BasketIconBoldDuotone } from './basket-bold-duotone';
import { BasketIconFill as BasketIconFill } from './basket-fill';
import { BasketIconFillDuotone as BasketIconFillDuotone } from './basket-fill-duotone';

export interface BasketIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BasketIcon = memo(forwardRef<SVGSVGElement, BasketIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BasketIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BasketIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BasketIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BasketIconFill ref={ref} {...props} />;
  if (duotone) return <BasketIconDuotone ref={ref} {...props} />;
  return <RegularBasketIcon ref={ref} {...props} />;
}));

BasketIcon.displayName = 'BasketIcon';

export { BasketIcon };
