import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CoffeeMugIcon as CoffeeMugIconRegular } from './coffee-mug';
import { CoffeeMugIconBold } from './coffee-mug-bold';
import { CoffeeMugIconFilled } from './coffee-mug-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CoffeeMugIconRegular ref={ref} {...props} />;
  }
}));

CoffeeMugIcon.displayName = 'CoffeeMugIcon';

export { CoffeeMugIcon };
