import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BankRegular } from './BankRegular.js';
import { BankRegularDuotone } from './BankRegularDuotone.js';
import { BankBold } from './BankBold.js';
import { BankBoldDuotone } from './BankBoldDuotone.js';
import { BankFill } from './BankFill.js';
import { BankFillDuotone } from './BankFillDuotone.js';

export interface BankProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bank - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BankRegular } from 'stera-icons/icons/BankRegular';
 */
const Bank = memo(forwardRef<SVGSVGElement, BankProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BankBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BankBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BankFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BankFill ref={ref} {...rest} />;
  if (duotone) return <BankRegularDuotone ref={ref} {...rest} />;
  return <BankRegular ref={ref} {...rest} />;
}));

Bank.displayName = 'Bank';

// Triple export pattern (lucide-react style)
export { Bank, Bank as BankIcon, Bank as SiBank };
export default Bank;
