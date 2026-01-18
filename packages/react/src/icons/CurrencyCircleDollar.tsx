import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyCircleDollarRegular } from './CurrencyCircleDollarRegular';
import { CurrencyCircleDollarRegularDuotone } from './CurrencyCircleDollarRegularDuotone';
import { CurrencyCircleDollarBold } from './CurrencyCircleDollarBold';
import { CurrencyCircleDollarBoldDuotone } from './CurrencyCircleDollarBoldDuotone';
import { CurrencyCircleDollarFill } from './CurrencyCircleDollarFill';
import { CurrencyCircleDollarFillDuotone } from './CurrencyCircleDollarFillDuotone';

export interface CurrencyCircleDollarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CurrencyCircleDollar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CurrencyCircleDollarRegular } from 'stera-icons/CurrencyCircleDollarRegular';
 */
const CurrencyCircleDollar = memo(forwardRef<SVGSVGElement, CurrencyCircleDollarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyCircleDollarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CurrencyCircleDollarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CurrencyCircleDollarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CurrencyCircleDollarFill ref={ref} {...rest} />;
  if (duotone) return <CurrencyCircleDollarRegularDuotone ref={ref} {...rest} />;
  return <CurrencyCircleDollarRegular ref={ref} {...rest} />;
}));

CurrencyCircleDollar.displayName = 'CurrencyCircleDollar';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollar, CurrencyCircleDollar as CurrencyCircleDollarIcon, CurrencyCircleDollar as SiCurrencyCircleDollar };
