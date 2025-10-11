import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CreditCardAltIcon as CreditCardAltIconRegular } from './credit-card-alt';
import { CreditCardAltIconBold } from './credit-card-alt-bold';
import { CreditCardAltIconFilled } from './credit-card-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CreditCardAltIconRegular ref={ref} {...props} />;
  }
}));

CreditCardAltIcon.displayName = 'CreditCardAltIcon';

export { CreditCardAltIcon };
