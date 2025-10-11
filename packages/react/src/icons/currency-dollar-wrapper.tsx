import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyDollarIcon as CurrencyDollarIconRegular } from './currency-dollar';
import { CurrencyDollarIconBold } from './currency-dollar-bold';
import { CurrencyDollarIconFilled } from './currency-dollar-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CurrencyDollarIconProps extends IconProps {
  variant?: IconVariant;
}

const CurrencyDollarIcon = memo(forwardRef<SVGSVGElement, CurrencyDollarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CurrencyDollarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CurrencyDollarIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CurrencyDollarIconRegular ref={ref} {...props} />;
  }
}));

CurrencyDollarIcon.displayName = 'CurrencyDollarIcon';

export { CurrencyDollarIcon };
