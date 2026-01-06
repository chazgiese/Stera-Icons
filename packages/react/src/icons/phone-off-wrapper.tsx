import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneOffIcon as RegularPhoneOffIcon } from './phone-off';
import { PhoneOffIconDuotone as PhoneOffIconDuotone } from './phone-off-duotone';
import { PhoneOffIconBold as PhoneOffIconBold } from './phone-off-bold';
import { PhoneOffIconBoldDuotone as PhoneOffIconBoldDuotone } from './phone-off-bold-duotone';
import { PhoneOffIconFill as PhoneOffIconFill } from './phone-off-fill';
import { PhoneOffIconFillDuotone as PhoneOffIconFillDuotone } from './phone-off-fill-duotone';

export interface PhoneOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PhoneOffIcon = memo(forwardRef<SVGSVGElement, PhoneOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PhoneOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PhoneOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PhoneOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PhoneOffIconFill ref={ref} {...props} />;
  if (duotone) return <PhoneOffIconDuotone ref={ref} {...props} />;
  return <RegularPhoneOffIcon ref={ref} {...props} />;
}));

PhoneOffIcon.displayName = 'PhoneOffIcon';

export { PhoneOffIcon };
