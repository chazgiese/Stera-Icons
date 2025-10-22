import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BankIcon as RegularBankIcon } from './bank';
import { BankIconBold } from './bank-bold';
import { BankIconFilled } from './bank-filled';
import { BankIconFilltone } from './bank-filltone';
import { BankIconLinetone } from './bank-linetone';

export interface BankIconProps extends IconProps {
  variant?: IconVariant;
}

const BankIcon = memo(forwardRef<SVGSVGElement, BankIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BankIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BankIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BankIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BankIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBankIcon ref={ref} {...props} />;
  }
}));

BankIcon.displayName = 'BankIcon';

export { BankIcon };
