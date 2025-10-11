import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyCentIcon as CurrencyCentIconRegular } from './currency-cent';
import { CurrencyCentIconBold } from './currency-cent-bold';
import { CurrencyCentIconFilled } from './currency-cent-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CurrencyCentIconRegular ref={ref} {...props} />;
  }
}));

CurrencyCentIcon.displayName = 'CurrencyCentIcon';

export { CurrencyCentIcon };
