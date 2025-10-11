import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyEuroCirlceIcon as CurrencyEuroCirlceIconRegular } from './currency-euro-cirlce';
import { CurrencyEuroCirlceIconBold } from './currency-euro-cirlce-bold';
import { CurrencyEuroCirlceIconFilled } from './currency-euro-cirlce-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CurrencyEuroCirlceIconRegular ref={ref} {...props} />;
  }
}));

CurrencyEuroCirlceIcon.displayName = 'CurrencyEuroCirlceIcon';

export { CurrencyEuroCirlceIcon };
