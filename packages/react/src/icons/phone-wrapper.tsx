import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneIcon as RegularPhoneIcon } from './phone';
import { PhoneIconDuotone as PhoneIconDuotone } from './phone-duotone';
import { PhoneIconBold as PhoneIconBold } from './phone-bold';
import { PhoneIconBoldDuotone as PhoneIconBoldDuotone } from './phone-bold-duotone';
import { PhoneIconFill as PhoneIconFill } from './phone-fill';
import { PhoneIconFillDuotone as PhoneIconFillDuotone } from './phone-fill-duotone';

export interface PhoneIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PhoneIcon = memo(forwardRef<SVGSVGElement, PhoneIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PhoneIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PhoneIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PhoneIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PhoneIconFill ref={ref} {...props} />;
  if (duotone) return <PhoneIconDuotone ref={ref} {...props} />;
  return <RegularPhoneIcon ref={ref} {...props} />;
}));

PhoneIcon.displayName = 'PhoneIcon';

export { PhoneIcon };
