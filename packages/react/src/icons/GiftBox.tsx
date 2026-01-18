import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GiftBoxRegular } from './GiftBoxRegular';
import { GiftBoxRegularDuotone } from './GiftBoxRegularDuotone';
import { GiftBoxBold } from './GiftBoxBold';
import { GiftBoxBoldDuotone } from './GiftBoxBoldDuotone';
import { GiftBoxFill } from './GiftBoxFill';
import { GiftBoxFillDuotone } from './GiftBoxFillDuotone';

export interface GiftBoxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GiftBox - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GiftBoxRegular } from 'stera-icons/GiftBoxRegular';
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
