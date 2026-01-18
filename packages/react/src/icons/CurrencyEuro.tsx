import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyEuroRegular } from './CurrencyEuroRegular';
import { CurrencyEuroRegularDuotone } from './CurrencyEuroRegularDuotone';
import { CurrencyEuroBold } from './CurrencyEuroBold';
import { CurrencyEuroBoldDuotone } from './CurrencyEuroBoldDuotone';
import { CurrencyEuroFill } from './CurrencyEuroFill';
import { CurrencyEuroFillDuotone } from './CurrencyEuroFillDuotone';

export interface CurrencyEuroProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CurrencyEuro with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CurrencyEuroRegular } from 'stera-icons/CurrencyEuroRegular';
 */
const CurrencyEuro = memo(forwardRef<SVGSVGElement, CurrencyEuroProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyEuroBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CurrencyEuroBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CurrencyEuroFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CurrencyEuroFill ref={ref} {...rest} />;
  if (duotone) return <CurrencyEuroRegularDuotone ref={ref} {...rest} />;
  return <CurrencyEuroRegular ref={ref} {...rest} />;
}));

CurrencyEuro.displayName = 'CurrencyEuro';

export { CurrencyEuro };
