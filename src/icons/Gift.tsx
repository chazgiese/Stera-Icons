import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GiftRegular } from './GiftRegular.js';
import { GiftRegularDuotone } from './GiftRegularDuotone.js';
import { GiftBold } from './GiftBold.js';
import { GiftBoldDuotone } from './GiftBoldDuotone.js';
import { GiftFill } from './GiftFill.js';
import { GiftFillDuotone } from './GiftFillDuotone.js';

export interface GiftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gift - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GiftRegular } from 'stera-icons/icons/GiftRegular';
 */
const Gift = memo(forwardRef<SVGSVGElement, GiftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GiftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GiftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GiftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GiftFill ref={ref} {...rest} />;
  if (duotone) return <GiftRegularDuotone ref={ref} {...rest} />;
  return <GiftRegular ref={ref} {...rest} />;
}));

Gift.displayName = 'Gift';

// Triple export pattern (lucide-react style)
export { Gift, Gift as GiftIcon, Gift as SiGift };
export default Gift;
