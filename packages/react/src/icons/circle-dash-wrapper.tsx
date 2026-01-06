import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDashIcon as RegularCircleDashIcon } from './circle-dash';
import { CircleDashIconDuotone as CircleDashIconDuotone } from './circle-dash-duotone';
import { CircleDashIconBold as CircleDashIconBold } from './circle-dash-bold';
import { CircleDashIconBoldDuotone as CircleDashIconBoldDuotone } from './circle-dash-bold-duotone';
import { CircleDashIconFill as CircleDashIconFill } from './circle-dash-fill';
import { CircleDashIconFillDuotone as CircleDashIconFillDuotone } from './circle-dash-fill-duotone';

export interface CircleDashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleDashIcon = memo(forwardRef<SVGSVGElement, CircleDashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleDashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleDashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleDashIconFill ref={ref} {...props} />;
  if (duotone) return <CircleDashIconDuotone ref={ref} {...props} />;
  return <RegularCircleDashIcon ref={ref} {...props} />;
}));

CircleDashIcon.displayName = 'CircleDashIcon';

export { CircleDashIcon };
