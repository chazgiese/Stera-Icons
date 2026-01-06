import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GiftBoxIcon as RegularGiftBoxIcon } from './gift-box';
import { GiftBoxIconDuotone as GiftBoxIconDuotone } from './gift-box-duotone';
import { GiftBoxIconBold as GiftBoxIconBold } from './gift-box-bold';
import { GiftBoxIconBoldDuotone as GiftBoxIconBoldDuotone } from './gift-box-bold-duotone';
import { GiftBoxIconFill as GiftBoxIconFill } from './gift-box-fill';
import { GiftBoxIconFillDuotone as GiftBoxIconFillDuotone } from './gift-box-fill-duotone';

export interface GiftBoxIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GiftBoxIcon = memo(forwardRef<SVGSVGElement, GiftBoxIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GiftBoxIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GiftBoxIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GiftBoxIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GiftBoxIconFill ref={ref} {...props} />;
  if (duotone) return <GiftBoxIconDuotone ref={ref} {...props} />;
  return <RegularGiftBoxIcon ref={ref} {...props} />;
}));

GiftBoxIcon.displayName = 'GiftBoxIcon';

export { GiftBoxIcon };
