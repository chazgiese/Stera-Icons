import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CreditCardAltRegular } from './CreditCardAltRegular';
import { CreditCardAltRegularDuotone } from './CreditCardAltRegularDuotone';
import { CreditCardAltBold } from './CreditCardAltBold';
import { CreditCardAltBoldDuotone } from './CreditCardAltBoldDuotone';
import { CreditCardAltFill } from './CreditCardAltFill';
import { CreditCardAltFillDuotone } from './CreditCardAltFillDuotone';

export interface CreditCardAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CreditCardAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CreditCardAltRegular } from 'stera-icons/icons/CreditCardAltRegular';
 */
const CreditCardAlt = memo(forwardRef<SVGSVGElement, CreditCardAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CreditCardAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CreditCardAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CreditCardAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CreditCardAltFill ref={ref} {...rest} />;
  if (duotone) return <CreditCardAltRegularDuotone ref={ref} {...rest} />;
  return <CreditCardAltRegular ref={ref} {...rest} />;
}));

CreditCardAlt.displayName = 'CreditCardAlt';

// Triple export pattern (lucide-react style)
export { CreditCardAlt, CreditCardAlt as CreditCardAltIcon, CreditCardAlt as SiCreditCardAlt };
export default CreditCardAlt;
