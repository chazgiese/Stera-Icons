import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CoinIcon as CoinIconRegular } from './coin';
import { CoinIconBold } from './coin-bold';
import { CoinIconFilled } from './coin-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CoinIconRegular ref={ref} {...props} />;
  }
}));

CoinIcon.displayName = 'CoinIcon';

export { CoinIcon };
