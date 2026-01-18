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
 * GiftBox with dynamic weight and duotone props.
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

export { GiftBox };
