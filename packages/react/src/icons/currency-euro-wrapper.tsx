import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyEuroIcon as CurrencyEuroIconRegular } from './currency-euro';
import { CurrencyEuroIconBold } from './currency-euro-bold';
import { CurrencyEuroIconFilled } from './currency-euro-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CurrencyEuroIconProps extends IconProps {
  variant?: IconVariant;
}

const CurrencyEuroIcon = memo(forwardRef<SVGSVGElement, CurrencyEuroIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CurrencyEuroIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CurrencyEuroIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CurrencyEuroIconRegular ref={ref} {...props} />;
  }
}));

CurrencyEuroIcon.displayName = 'CurrencyEuroIcon';

export { CurrencyEuroIcon };
