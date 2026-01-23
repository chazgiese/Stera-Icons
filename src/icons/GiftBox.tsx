import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GiftBoxRegular } from './GiftBoxRegular.js';
import { GiftBoxRegularDuotone } from './GiftBoxRegularDuotone.js';
import { GiftBoxBold } from './GiftBoxBold.js';
import { GiftBoxBoldDuotone } from './GiftBoxBoldDuotone.js';
import { GiftBoxFill } from './GiftBoxFill.js';
import { GiftBoxFillDuotone } from './GiftBoxFillDuotone.js';

export interface GiftBoxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GiftBox - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GiftBoxRegular } from 'stera-icons/icons/GiftBoxRegular';
 */
const GiftBox = memo(forwardRef<SVGSVGElement, GiftBoxProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GiftBoxBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GiftBoxBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GiftBoxFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GiftBoxFill ref={ref} {...rest} />;
  if (duotone) return <GiftBoxRegularDuotone ref={ref} {...rest} />;
  return <GiftBoxRegular ref={ref} {...rest} />;
}));

GiftBox.displayName = 'GiftBox';

// Triple export pattern (lucide-react style)
export { GiftBox, GiftBox as GiftBoxIcon, GiftBox as SiGiftBox };
export default GiftBox;
