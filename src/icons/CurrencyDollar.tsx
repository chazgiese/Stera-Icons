import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CurrencyDollarRegular } from './CurrencyDollarRegular.js';
import { CurrencyDollarRegularDuotone } from './CurrencyDollarRegularDuotone.js';
import { CurrencyDollarBold } from './CurrencyDollarBold.js';
import { CurrencyDollarBoldDuotone } from './CurrencyDollarBoldDuotone.js';
import { CurrencyDollarFill } from './CurrencyDollarFill.js';
import { CurrencyDollarFillDuotone } from './CurrencyDollarFillDuotone.js';

export interface CurrencyDollarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CurrencyDollar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CurrencyDollarRegular } from 'stera-icons/icons/CurrencyDollarRegular';
 */
const CurrencyDollar = memo(forwardRef<SVGSVGElement, CurrencyDollarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyDollarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CurrencyDollarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CurrencyDollarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CurrencyDollarFill ref={ref} {...rest} />;
  if (duotone) return <CurrencyDollarRegularDuotone ref={ref} {...rest} />;
  return <CurrencyDollarRegular ref={ref} {...rest} />;
}));

CurrencyDollar.displayName = 'CurrencyDollar';

// Triple export pattern (lucide-react style)
export { CurrencyDollar, CurrencyDollar as CurrencyDollarIcon, CurrencyDollar as SiCurrencyDollar };
export default CurrencyDollar;
