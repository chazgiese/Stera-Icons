import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BankIcon as RegularBankIcon } from './bank';
import { BankIconDuotone as BankIconDuotone } from './bank-duotone';
import { BankIconBold as BankIconBold } from './bank-bold';
import { BankIconBoldDuotone as BankIconBoldDuotone } from './bank-bold-duotone';
import { BankIconFill as BankIconFill } from './bank-fill';
import { BankIconFillDuotone as BankIconFillDuotone } from './bank-fill-duotone';

export interface BankIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BankIcon = memo(forwardRef<SVGSVGElement, BankIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BankIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BankIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BankIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BankIconFill ref={ref} {...props} />;
  if (duotone) return <BankIconDuotone ref={ref} {...props} />;
  return <RegularBankIcon ref={ref} {...props} />;
}));

BankIcon.displayName = 'BankIcon';

export { BankIcon };
