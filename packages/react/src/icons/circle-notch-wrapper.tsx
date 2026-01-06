import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleNotchIcon as RegularCircleNotchIcon } from './circle-notch';
import { CircleNotchIconDuotone as CircleNotchIconDuotone } from './circle-notch-duotone';
import { CircleNotchIconBold as CircleNotchIconBold } from './circle-notch-bold';
import { CircleNotchIconBoldDuotone as CircleNotchIconBoldDuotone } from './circle-notch-bold-duotone';
import { CircleNotchIconFill as CircleNotchIconFill } from './circle-notch-fill';
import { CircleNotchIconFillDuotone as CircleNotchIconFillDuotone } from './circle-notch-fill-duotone';

export interface CircleNotchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleNotchIcon = memo(forwardRef<SVGSVGElement, CircleNotchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleNotchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleNotchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleNotchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleNotchIconFill ref={ref} {...props} />;
  if (duotone) return <CircleNotchIconDuotone ref={ref} {...props} />;
  return <RegularCircleNotchIcon ref={ref} {...props} />;
}));

CircleNotchIcon.displayName = 'CircleNotchIcon';

export { CircleNotchIcon };
