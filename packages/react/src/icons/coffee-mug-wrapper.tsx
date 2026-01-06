import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CoffeeMugIcon as RegularCoffeeMugIcon } from './coffee-mug';
import { CoffeeMugIconDuotone as CoffeeMugIconDuotone } from './coffee-mug-duotone';
import { CoffeeMugIconBold as CoffeeMugIconBold } from './coffee-mug-bold';
import { CoffeeMugIconBoldDuotone as CoffeeMugIconBoldDuotone } from './coffee-mug-bold-duotone';
import { CoffeeMugIconFill as CoffeeMugIconFill } from './coffee-mug-fill';
import { CoffeeMugIconFillDuotone as CoffeeMugIconFillDuotone } from './coffee-mug-fill-duotone';

export interface CoffeeMugIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CoffeeMugIcon = memo(forwardRef<SVGSVGElement, CoffeeMugIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CoffeeMugIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CoffeeMugIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CoffeeMugIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CoffeeMugIconFill ref={ref} {...props} />;
  if (duotone) return <CoffeeMugIconDuotone ref={ref} {...props} />;
  return <RegularCoffeeMugIcon ref={ref} {...props} />;
}));

CoffeeMugIcon.displayName = 'CoffeeMugIcon';

export { CoffeeMugIcon };
