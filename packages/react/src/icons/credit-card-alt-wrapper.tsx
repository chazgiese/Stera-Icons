import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CreditCardAltIcon as RegularCreditCardAltIcon } from './credit-card-alt';
import { CreditCardAltIconBold } from './credit-card-alt-bold';
import { CreditCardAltIconFilled } from './credit-card-alt-filled';
import { CreditCardAltIconFilltone } from './credit-card-alt-filltone';
import { CreditCardAltIconLinetone } from './credit-card-alt-linetone';

export interface CreditCardAltIconProps extends IconProps {
  variant?: IconVariant;
}

const CreditCardAltIcon = memo(forwardRef<SVGSVGElement, CreditCardAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CreditCardAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CreditCardAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CreditCardAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CreditCardAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCreditCardAltIcon ref={ref} {...props} />;
  }
}));

CreditCardAltIcon.displayName = 'CreditCardAltIcon';

export { CreditCardAltIcon };
