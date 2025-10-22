import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CoinIcon as CoinIconRegular } from './coin';
import { CoinIconBold } from './coin-bold';
import { CoinIconFilled } from './coin-filled';
import { CoinIconFilltone } from './coin-filltone';
import { CoinIconLinetone } from './coin-linetone';

export interface CoinIconProps extends IconProps {
  variant?: IconVariant;
}

const CoinIcon = memo(forwardRef<SVGSVGElement, CoinIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CoinIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CoinIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CoinIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CoinIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CoinIconRegular ref={ref} {...props} />;
  }
}));

CoinIcon.displayName = 'CoinIcon';

export { CoinIcon };
