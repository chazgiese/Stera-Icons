import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CurrencyEuroCirlceIcon as CurrencyEuroCirlceIconRegular } from './currency-euro-cirlce';
import { CurrencyEuroCirlceIconBold } from './currency-euro-cirlce-bold';
import { CurrencyEuroCirlceIconFilled } from './currency-euro-cirlce-filled';
import { CurrencyEuroCirlceIconFilltone } from './currency-euro-cirlce-filltone';
import { CurrencyEuroCirlceIconLinetone } from './currency-euro-cirlce-linetone';

export interface CurrencyEuroCirlceIconProps extends IconProps {
  variant?: IconVariant;
}

const CurrencyEuroCirlceIcon = memo(forwardRef<SVGSVGElement, CurrencyEuroCirlceIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CurrencyEuroCirlceIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CurrencyEuroCirlceIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CurrencyEuroCirlceIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CurrencyEuroCirlceIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CurrencyEuroCirlceIconRegular ref={ref} {...props} />;
  }
}));

CurrencyEuroCirlceIcon.displayName = 'CurrencyEuroCirlceIcon';

export { CurrencyEuroCirlceIcon };
