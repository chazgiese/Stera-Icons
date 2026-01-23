import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CurrencyEuroRegular } from './CurrencyEuroRegular.js';
import { CurrencyEuroRegularDuotone } from './CurrencyEuroRegularDuotone.js';
import { CurrencyEuroBold } from './CurrencyEuroBold.js';
import { CurrencyEuroBoldDuotone } from './CurrencyEuroBoldDuotone.js';
import { CurrencyEuroFill } from './CurrencyEuroFill.js';
import { CurrencyEuroFillDuotone } from './CurrencyEuroFillDuotone.js';

export interface CurrencyEuroProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CurrencyEuro - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CurrencyEuroRegular } from 'stera-icons/icons/CurrencyEuroRegular';
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

// Triple export pattern (lucide-react style)
export { CurrencyEuro, CurrencyEuro as CurrencyEuroIcon, CurrencyEuro as SiCurrencyEuro };
export default CurrencyEuro;
