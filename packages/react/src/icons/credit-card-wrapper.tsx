import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CreditCardIcon as RegularCreditCardIcon } from './credit-card';
import { CreditCardIconBold } from './credit-card-bold';
import { CreditCardIconFilled } from './credit-card-filled';
import { CreditCardIconFilltone } from './credit-card-filltone';
import { CreditCardIconLinetone } from './credit-card-linetone';

export interface CreditCardIconProps extends IconProps {
  variant?: IconVariant;
}

const CreditCardIcon = memo(forwardRef<SVGSVGElement, CreditCardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CreditCardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CreditCardIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CreditCardIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CreditCardIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCreditCardIcon ref={ref} {...props} />;
  }
}));

CreditCardIcon.displayName = 'CreditCardIcon';

export { CreditCardIcon };
