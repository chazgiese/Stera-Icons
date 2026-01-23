import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CoinRegular } from './CoinRegular.js';
import { CoinRegularDuotone } from './CoinRegularDuotone.js';
import { CoinBold } from './CoinBold.js';
import { CoinBoldDuotone } from './CoinBoldDuotone.js';
import { CoinFill } from './CoinFill.js';
import { CoinFillDuotone } from './CoinFillDuotone.js';

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
