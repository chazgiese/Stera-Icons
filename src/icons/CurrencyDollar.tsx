import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyDollarRegular } from './CurrencyDollarRegular';
import { CurrencyDollarRegularDuotone } from './CurrencyDollarRegularDuotone';
import { CurrencyDollarBold } from './CurrencyDollarBold';
import { CurrencyDollarBoldDuotone } from './CurrencyDollarBoldDuotone';
import { CurrencyDollarFill } from './CurrencyDollarFill';
import { CurrencyDollarFillDuotone } from './CurrencyDollarFillDuotone';

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
