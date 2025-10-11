import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BankIcon as BankIconRegular } from './bank';
import { BankIconBold } from './bank-bold';
import { BankIconFilled } from './bank-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BankIconRegular ref={ref} {...props} />;
  }
}));

BankIcon.displayName = 'BankIcon';

export { BankIcon };
