import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyCircleDollarIcon as CurrencyCircleDollarIconRegular } from './currency-circle-dollar';
import { CurrencyCircleDollarIconBold } from './currency-circle-dollar-bold';
import { CurrencyCircleDollarIconFilled } from './currency-circle-dollar-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CurrencyCircleDollarIconProps extends IconProps {
  variant?: IconVariant;
}

const CurrencyCircleDollarIcon = memo(forwardRef<SVGSVGElement, CurrencyCircleDollarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CurrencyCircleDollarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CurrencyCircleDollarIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CurrencyCircleDollarIconRegular ref={ref} {...props} />;
  }
}));

CurrencyCircleDollarIcon.displayName = 'CurrencyCircleDollarIcon';

export { CurrencyCircleDollarIcon };
