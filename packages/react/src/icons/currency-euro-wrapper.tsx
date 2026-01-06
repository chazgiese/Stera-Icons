import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyEuroIcon as RegularCurrencyEuroIcon } from './currency-euro';
import { CurrencyEuroIconDuotone as CurrencyEuroIconDuotone } from './currency-euro-duotone';
import { CurrencyEuroIconBold as CurrencyEuroIconBold } from './currency-euro-bold';
import { CurrencyEuroIconBoldDuotone as CurrencyEuroIconBoldDuotone } from './currency-euro-bold-duotone';
import { CurrencyEuroIconFill as CurrencyEuroIconFill } from './currency-euro-fill';
import { CurrencyEuroIconFillDuotone as CurrencyEuroIconFillDuotone } from './currency-euro-fill-duotone';

export interface CurrencyEuroIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CurrencyEuroIcon = memo(forwardRef<SVGSVGElement, CurrencyEuroIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyEuroIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CurrencyEuroIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CurrencyEuroIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CurrencyEuroIconFill ref={ref} {...props} />;
  if (duotone) return <CurrencyEuroIconDuotone ref={ref} {...props} />;
  return <RegularCurrencyEuroIcon ref={ref} {...props} />;
}));

CurrencyEuroIcon.displayName = 'CurrencyEuroIcon';

export { CurrencyEuroIcon };
