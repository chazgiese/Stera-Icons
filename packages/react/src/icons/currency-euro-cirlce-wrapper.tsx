import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyEuroCirlceIcon as RegularCurrencyEuroCirlceIcon } from './currency-euro-cirlce';
import { CurrencyEuroCirlceIconDuotone as CurrencyEuroCirlceIconDuotone } from './currency-euro-cirlce-duotone';
import { CurrencyEuroCirlceIconBold as CurrencyEuroCirlceIconBold } from './currency-euro-cirlce-bold';
import { CurrencyEuroCirlceIconBoldDuotone as CurrencyEuroCirlceIconBoldDuotone } from './currency-euro-cirlce-bold-duotone';
import { CurrencyEuroCirlceIconFill as CurrencyEuroCirlceIconFill } from './currency-euro-cirlce-fill';
import { CurrencyEuroCirlceIconFillDuotone as CurrencyEuroCirlceIconFillDuotone } from './currency-euro-cirlce-fill-duotone';

export interface CurrencyEuroCirlceIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CurrencyEuroCirlceIcon = memo(forwardRef<SVGSVGElement, CurrencyEuroCirlceIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyEuroCirlceIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CurrencyEuroCirlceIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CurrencyEuroCirlceIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CurrencyEuroCirlceIconFill ref={ref} {...props} />;
  if (duotone) return <CurrencyEuroCirlceIconDuotone ref={ref} {...props} />;
  return <RegularCurrencyEuroCirlceIcon ref={ref} {...props} />;
}));

CurrencyEuroCirlceIcon.displayName = 'CurrencyEuroCirlceIcon';

export { CurrencyEuroCirlceIcon };
