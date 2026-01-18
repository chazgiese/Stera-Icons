import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CreditCardRegular } from './CreditCardRegular';
import { CreditCardRegularDuotone } from './CreditCardRegularDuotone';
import { CreditCardBold } from './CreditCardBold';
import { CreditCardBoldDuotone } from './CreditCardBoldDuotone';
import { CreditCardFill } from './CreditCardFill';
import { CreditCardFillDuotone } from './CreditCardFillDuotone';

export interface CreditCardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CreditCard - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CreditCardRegular } from 'stera-icons/CreditCardRegular';
 */
const CreditCard = memo(forwardRef<SVGSVGElement, CreditCardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CreditCardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CreditCardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CreditCardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CreditCardFill ref={ref} {...rest} />;
  if (duotone) return <CreditCardRegularDuotone ref={ref} {...rest} />;
  return <CreditCardRegular ref={ref} {...rest} />;
}));

CreditCard.displayName = 'CreditCard';

// Triple export pattern (lucide-react style)
export { CreditCard, CreditCard as CreditCardIcon, CreditCard as SiCreditCard };
