import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CreditCardIcon as CreditCardIconRegular } from './credit-card';
import { CreditCardIconBold } from './credit-card-bold';
import { CreditCardIconFilled } from './credit-card-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CreditCardIconRegular ref={ref} {...props} />;
  }
}));

CreditCardIcon.displayName = 'CreditCardIcon';

export { CreditCardIcon };
