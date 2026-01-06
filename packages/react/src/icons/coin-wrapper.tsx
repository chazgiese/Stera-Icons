import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CoinIcon as RegularCoinIcon } from './coin';
import { CoinIconDuotone as CoinIconDuotone } from './coin-duotone';
import { CoinIconBold as CoinIconBold } from './coin-bold';
import { CoinIconBoldDuotone as CoinIconBoldDuotone } from './coin-bold-duotone';
import { CoinIconFill as CoinIconFill } from './coin-fill';
import { CoinIconFillDuotone as CoinIconFillDuotone } from './coin-fill-duotone';

export interface CoinIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CoinIcon = memo(forwardRef<SVGSVGElement, CoinIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CoinIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CoinIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CoinIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CoinIconFill ref={ref} {...props} />;
  if (duotone) return <CoinIconDuotone ref={ref} {...props} />;
  return <RegularCoinIcon ref={ref} {...props} />;
}));

CoinIcon.displayName = 'CoinIcon';

export { CoinIcon };
