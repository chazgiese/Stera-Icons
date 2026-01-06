import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyCentIcon as RegularCurrencyCentIcon } from './currency-cent';
import { CurrencyCentIconDuotone as CurrencyCentIconDuotone } from './currency-cent-duotone';
import { CurrencyCentIconBold as CurrencyCentIconBold } from './currency-cent-bold';
import { CurrencyCentIconBoldDuotone as CurrencyCentIconBoldDuotone } from './currency-cent-bold-duotone';
import { CurrencyCentIconFill as CurrencyCentIconFill } from './currency-cent-fill';
import { CurrencyCentIconFillDuotone as CurrencyCentIconFillDuotone } from './currency-cent-fill-duotone';

export interface CurrencyCentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CurrencyCentIcon = memo(forwardRef<SVGSVGElement, CurrencyCentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyCentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CurrencyCentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CurrencyCentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CurrencyCentIconFill ref={ref} {...props} />;
  if (duotone) return <CurrencyCentIconDuotone ref={ref} {...props} />;
  return <RegularCurrencyCentIcon ref={ref} {...props} />;
}));

CurrencyCentIcon.displayName = 'CurrencyCentIcon';

export { CurrencyCentIcon };
