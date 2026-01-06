import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyCircleDollarIcon as RegularCurrencyCircleDollarIcon } from './currency-circle-dollar';
import { CurrencyCircleDollarIconDuotone as CurrencyCircleDollarIconDuotone } from './currency-circle-dollar-duotone';
import { CurrencyCircleDollarIconBold as CurrencyCircleDollarIconBold } from './currency-circle-dollar-bold';
import { CurrencyCircleDollarIconBoldDuotone as CurrencyCircleDollarIconBoldDuotone } from './currency-circle-dollar-bold-duotone';
import { CurrencyCircleDollarIconFill as CurrencyCircleDollarIconFill } from './currency-circle-dollar-fill';
import { CurrencyCircleDollarIconFillDuotone as CurrencyCircleDollarIconFillDuotone } from './currency-circle-dollar-fill-duotone';

export interface CurrencyCircleDollarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CurrencyCircleDollarIcon = memo(forwardRef<SVGSVGElement, CurrencyCircleDollarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyCircleDollarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CurrencyCircleDollarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CurrencyCircleDollarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CurrencyCircleDollarIconFill ref={ref} {...props} />;
  if (duotone) return <CurrencyCircleDollarIconDuotone ref={ref} {...props} />;
  return <RegularCurrencyCircleDollarIcon ref={ref} {...props} />;
}));

CurrencyCircleDollarIcon.displayName = 'CurrencyCircleDollarIcon';

export { CurrencyCircleDollarIcon };
