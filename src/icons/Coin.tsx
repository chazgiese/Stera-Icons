import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CoinRegular } from './CoinRegular';
import { CoinRegularDuotone } from './CoinRegularDuotone';
import { CoinBold } from './CoinBold';
import { CoinBoldDuotone } from './CoinBoldDuotone';
import { CoinFill } from './CoinFill';
import { CoinFillDuotone } from './CoinFillDuotone';

export interface CoinProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Coin - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CoinRegular } from 'stera-icons/icons/CoinRegular';
 */
const Coin = memo(forwardRef<SVGSVGElement, CoinProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CoinBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CoinBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CoinFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CoinFill ref={ref} {...rest} />;
  if (duotone) return <CoinRegularDuotone ref={ref} {...rest} />;
  return <CoinRegular ref={ref} {...rest} />;
}));

Coin.displayName = 'Coin';

// Triple export pattern (lucide-react style)
export { Coin, Coin as CoinIcon, Coin as SiCoin };
export default Coin;
