import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CoffeeMugIcon as RegularCoffeeMugIcon } from './coffee-mug';
import { CoffeeMugIconBold } from './coffee-mug-bold';
import { CoffeeMugIconFilled } from './coffee-mug-filled';
import { CoffeeMugIconFilltone } from './coffee-mug-filltone';
import { CoffeeMugIconLinetone } from './coffee-mug-linetone';

export interface CoffeeMugIconProps extends IconProps {
  variant?: IconVariant;
}

const CoffeeMugIcon = memo(forwardRef<SVGSVGElement, CoffeeMugIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CoffeeMugIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CoffeeMugIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CoffeeMugIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CoffeeMugIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCoffeeMugIcon ref={ref} {...props} />;
  }
}));

CoffeeMugIcon.displayName = 'CoffeeMugIcon';

export { CoffeeMugIcon };
