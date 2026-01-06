import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleCheckerIcon as RegularCircleCheckerIcon } from './circle-checker';
import { CircleCheckerIconDuotone as CircleCheckerIconDuotone } from './circle-checker-duotone';
import { CircleCheckerIconBold as CircleCheckerIconBold } from './circle-checker-bold';
import { CircleCheckerIconBoldDuotone as CircleCheckerIconBoldDuotone } from './circle-checker-bold-duotone';
import { CircleCheckerIconFill as CircleCheckerIconFill } from './circle-checker-fill';
import { CircleCheckerIconFillDuotone as CircleCheckerIconFillDuotone } from './circle-checker-fill-duotone';

export interface CircleCheckerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleCheckerIcon = memo(forwardRef<SVGSVGElement, CircleCheckerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleCheckerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleCheckerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleCheckerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleCheckerIconFill ref={ref} {...props} />;
  if (duotone) return <CircleCheckerIconDuotone ref={ref} {...props} />;
  return <RegularCircleCheckerIcon ref={ref} {...props} />;
}));

CircleCheckerIcon.displayName = 'CircleCheckerIcon';

export { CircleCheckerIcon };
