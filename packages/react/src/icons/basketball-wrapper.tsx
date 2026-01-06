import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BasketballIcon as RegularBasketballIcon } from './basketball';
import { BasketballIconDuotone as BasketballIconDuotone } from './basketball-duotone';
import { BasketballIconBold as BasketballIconBold } from './basketball-bold';
import { BasketballIconBoldDuotone as BasketballIconBoldDuotone } from './basketball-bold-duotone';
import { BasketballIconFill as BasketballIconFill } from './basketball-fill';
import { BasketballIconFillDuotone as BasketballIconFillDuotone } from './basketball-fill-duotone';

export interface BasketballIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BasketballIcon = memo(forwardRef<SVGSVGElement, BasketballIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BasketballIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BasketballIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BasketballIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BasketballIconFill ref={ref} {...props} />;
  if (duotone) return <BasketballIconDuotone ref={ref} {...props} />;
  return <RegularBasketballIcon ref={ref} {...props} />;
}));

BasketballIcon.displayName = 'BasketballIcon';

export { BasketballIcon };
