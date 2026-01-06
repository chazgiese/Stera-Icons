import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PushPinIcon as RegularPushPinIcon } from './push-pin';
import { PushPinIconDuotone as PushPinIconDuotone } from './push-pin-duotone';
import { PushPinIconBold as PushPinIconBold } from './push-pin-bold';
import { PushPinIconBoldDuotone as PushPinIconBoldDuotone } from './push-pin-bold-duotone';
import { PushPinIconFill as PushPinIconFill } from './push-pin-fill';
import { PushPinIconFillDuotone as PushPinIconFillDuotone } from './push-pin-fill-duotone';

export interface PushPinIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PushPinIcon = memo(forwardRef<SVGSVGElement, PushPinIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PushPinIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PushPinIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PushPinIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PushPinIconFill ref={ref} {...props} />;
  if (duotone) return <PushPinIconDuotone ref={ref} {...props} />;
  return <RegularPushPinIcon ref={ref} {...props} />;
}));

PushPinIcon.displayName = 'PushPinIcon';

export { PushPinIcon };
