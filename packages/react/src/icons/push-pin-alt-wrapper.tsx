import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PushPinAltIcon as RegularPushPinAltIcon } from './push-pin-alt';
import { PushPinAltIconDuotone as PushPinAltIconDuotone } from './push-pin-alt-duotone';
import { PushPinAltIconBold as PushPinAltIconBold } from './push-pin-alt-bold';
import { PushPinAltIconBoldDuotone as PushPinAltIconBoldDuotone } from './push-pin-alt-bold-duotone';
import { PushPinAltIconFill as PushPinAltIconFill } from './push-pin-alt-fill';
import { PushPinAltIconFillDuotone as PushPinAltIconFillDuotone } from './push-pin-alt-fill-duotone';

export interface PushPinAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PushPinAltIcon = memo(forwardRef<SVGSVGElement, PushPinAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PushPinAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PushPinAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PushPinAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PushPinAltIconFill ref={ref} {...props} />;
  if (duotone) return <PushPinAltIconDuotone ref={ref} {...props} />;
  return <RegularPushPinAltIcon ref={ref} {...props} />;
}));

PushPinAltIcon.displayName = 'PushPinAltIcon';

export { PushPinAltIcon };
