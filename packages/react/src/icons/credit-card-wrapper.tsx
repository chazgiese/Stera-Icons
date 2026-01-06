import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CreditCardIcon as RegularCreditCardIcon } from './credit-card';
import { CreditCardIconDuotone as CreditCardIconDuotone } from './credit-card-duotone';
import { CreditCardIconBold as CreditCardIconBold } from './credit-card-bold';
import { CreditCardIconBoldDuotone as CreditCardIconBoldDuotone } from './credit-card-bold-duotone';
import { CreditCardIconFill as CreditCardIconFill } from './credit-card-fill';
import { CreditCardIconFillDuotone as CreditCardIconFillDuotone } from './credit-card-fill-duotone';

export interface CreditCardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CreditCardIcon = memo(forwardRef<SVGSVGElement, CreditCardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CreditCardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CreditCardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CreditCardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CreditCardIconFill ref={ref} {...props} />;
  if (duotone) return <CreditCardIconDuotone ref={ref} {...props} />;
  return <RegularCreditCardIcon ref={ref} {...props} />;
}));

CreditCardIcon.displayName = 'CreditCardIcon';

export { CreditCardIcon };
