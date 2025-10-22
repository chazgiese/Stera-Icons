import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CurrencyCentIcon as RegularCurrencyCentIcon } from './currency-cent';
import { CurrencyCentIconBold } from './currency-cent-bold';
import { CurrencyCentIconFilled } from './currency-cent-filled';
import { CurrencyCentIconFilltone } from './currency-cent-filltone';
import { CurrencyCentIconLinetone } from './currency-cent-linetone';

export interface CurrencyCentIconProps extends IconProps {
  variant?: IconVariant;
}

const CurrencyCentIcon = memo(forwardRef<SVGSVGElement, CurrencyCentIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CurrencyCentIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CurrencyCentIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CurrencyCentIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CurrencyCentIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCurrencyCentIcon ref={ref} {...props} />;
  }
}));

CurrencyCentIcon.displayName = 'CurrencyCentIcon';

export { CurrencyCentIcon };
