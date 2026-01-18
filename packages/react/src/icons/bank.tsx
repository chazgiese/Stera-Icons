import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BankRegular } from './BankRegular';
import { BankRegularDuotone } from './BankRegularDuotone';
import { BankBold } from './BankBold';
import { BankBoldDuotone } from './BankBoldDuotone';
import { BankFill } from './BankFill';
import { BankFillDuotone } from './BankFillDuotone';

export interface BankProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bank with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BankRegular } from 'stera-icons/BankRegular';
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

export { Bank };
