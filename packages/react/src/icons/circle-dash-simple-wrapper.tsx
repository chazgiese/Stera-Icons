import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDashSimpleIcon as RegularCircleDashSimpleIcon } from './circle-dash-simple';
import { CircleDashSimpleIconDuotone as CircleDashSimpleIconDuotone } from './circle-dash-simple-duotone';
import { CircleDashSimpleIconBold as CircleDashSimpleIconBold } from './circle-dash-simple-bold';
import { CircleDashSimpleIconBoldDuotone as CircleDashSimpleIconBoldDuotone } from './circle-dash-simple-bold-duotone';
import { CircleDashSimpleIconFill as CircleDashSimpleIconFill } from './circle-dash-simple-fill';
import { CircleDashSimpleIconFillDuotone as CircleDashSimpleIconFillDuotone } from './circle-dash-simple-fill-duotone';

export interface CircleDashSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleDashSimpleIcon = memo(forwardRef<SVGSVGElement, CircleDashSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDashSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleDashSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleDashSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleDashSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <CircleDashSimpleIconDuotone ref={ref} {...props} />;
  return <RegularCircleDashSimpleIcon ref={ref} {...props} />;
}));

CircleDashSimpleIcon.displayName = 'CircleDashSimpleIcon';

export { CircleDashSimpleIcon };
