import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyDollarIcon as RegularCurrencyDollarIcon } from './currency-dollar';
import { CurrencyDollarIconDuotone as CurrencyDollarIconDuotone } from './currency-dollar-duotone';
import { CurrencyDollarIconBold as CurrencyDollarIconBold } from './currency-dollar-bold';
import { CurrencyDollarIconBoldDuotone as CurrencyDollarIconBoldDuotone } from './currency-dollar-bold-duotone';
import { CurrencyDollarIconFill as CurrencyDollarIconFill } from './currency-dollar-fill';
import { CurrencyDollarIconFillDuotone as CurrencyDollarIconFillDuotone } from './currency-dollar-fill-duotone';

export interface CurrencyDollarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CurrencyDollarIcon = memo(forwardRef<SVGSVGElement, CurrencyDollarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyDollarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CurrencyDollarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CurrencyDollarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CurrencyDollarIconFill ref={ref} {...props} />;
  if (duotone) return <CurrencyDollarIconDuotone ref={ref} {...props} />;
  return <RegularCurrencyDollarIcon ref={ref} {...props} />;
}));

CurrencyDollarIcon.displayName = 'CurrencyDollarIcon';

export { CurrencyDollarIcon };
