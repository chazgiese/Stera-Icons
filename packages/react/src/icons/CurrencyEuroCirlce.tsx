import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyEuroCirlceRegular } from './CurrencyEuroCirlceRegular';
import { CurrencyEuroCirlceRegularDuotone } from './CurrencyEuroCirlceRegularDuotone';
import { CurrencyEuroCirlceBold } from './CurrencyEuroCirlceBold';
import { CurrencyEuroCirlceBoldDuotone } from './CurrencyEuroCirlceBoldDuotone';
import { CurrencyEuroCirlceFill } from './CurrencyEuroCirlceFill';
import { CurrencyEuroCirlceFillDuotone } from './CurrencyEuroCirlceFillDuotone';

export interface CurrencyEuroCirlceProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CurrencyEuroCirlce with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CurrencyEuroCirlceRegular } from 'stera-icons/CurrencyEuroCirlceRegular';
 */
const CurrencyEuroCirlce = memo(forwardRef<SVGSVGElement, CurrencyEuroCirlceProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyEuroCirlceBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CurrencyEuroCirlceBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CurrencyEuroCirlceFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CurrencyEuroCirlceFill ref={ref} {...rest} />;
  if (duotone) return <CurrencyEuroCirlceRegularDuotone ref={ref} {...rest} />;
  return <CurrencyEuroCirlceRegular ref={ref} {...rest} />;
}));

CurrencyEuroCirlce.displayName = 'CurrencyEuroCirlce';

export { CurrencyEuroCirlce };
