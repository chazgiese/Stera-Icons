import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GiftIcon as RegularGiftIcon } from './gift';
import { GiftIconDuotone as GiftIconDuotone } from './gift-duotone';
import { GiftIconBold as GiftIconBold } from './gift-bold';
import { GiftIconBoldDuotone as GiftIconBoldDuotone } from './gift-bold-duotone';
import { GiftIconFill as GiftIconFill } from './gift-fill';
import { GiftIconFillDuotone as GiftIconFillDuotone } from './gift-fill-duotone';

export interface GiftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GiftIcon = memo(forwardRef<SVGSVGElement, GiftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GiftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GiftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GiftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GiftIconFill ref={ref} {...props} />;
  if (duotone) return <GiftIconDuotone ref={ref} {...props} />;
  return <RegularGiftIcon ref={ref} {...props} />;
}));

GiftIcon.displayName = 'GiftIcon';

export { GiftIcon };
