import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CreditCardAltIcon as RegularCreditCardAltIcon } from './credit-card-alt';
import { CreditCardAltIconDuotone as CreditCardAltIconDuotone } from './credit-card-alt-duotone';
import { CreditCardAltIconBold as CreditCardAltIconBold } from './credit-card-alt-bold';
import { CreditCardAltIconBoldDuotone as CreditCardAltIconBoldDuotone } from './credit-card-alt-bold-duotone';
import { CreditCardAltIconFill as CreditCardAltIconFill } from './credit-card-alt-fill';
import { CreditCardAltIconFillDuotone as CreditCardAltIconFillDuotone } from './credit-card-alt-fill-duotone';

export interface CreditCardAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CreditCardAltIcon = memo(forwardRef<SVGSVGElement, CreditCardAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CreditCardAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CreditCardAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CreditCardAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CreditCardAltIconFill ref={ref} {...props} />;
  if (duotone) return <CreditCardAltIconDuotone ref={ref} {...props} />;
  return <RegularCreditCardAltIcon ref={ref} {...props} />;
}));

CreditCardAltIcon.displayName = 'CreditCardAltIcon';

export { CreditCardAltIcon };
