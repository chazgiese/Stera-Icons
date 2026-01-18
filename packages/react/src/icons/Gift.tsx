import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GiftRegular } from './GiftRegular';
import { GiftRegularDuotone } from './GiftRegularDuotone';
import { GiftBold } from './GiftBold';
import { GiftBoldDuotone } from './GiftBoldDuotone';
import { GiftFill } from './GiftFill';
import { GiftFillDuotone } from './GiftFillDuotone';

export interface GiftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gift with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { GiftRegular } from 'stera-icons/GiftRegular';
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

export { Gift };
