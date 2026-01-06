import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideIcon as RegularCircleDivideIcon } from './circle-divide';
import { CircleDivideIconDuotone as CircleDivideIconDuotone } from './circle-divide-duotone';
import { CircleDivideIconBold as CircleDivideIconBold } from './circle-divide-bold';
import { CircleDivideIconBoldDuotone as CircleDivideIconBoldDuotone } from './circle-divide-bold-duotone';
import { CircleDivideIconFill as CircleDivideIconFill } from './circle-divide-fill';
import { CircleDivideIconFillDuotone as CircleDivideIconFillDuotone } from './circle-divide-fill-duotone';

export interface CircleDivideIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleDivideIcon = memo(forwardRef<SVGSVGElement, CircleDivideIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDivideIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleDivideIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleDivideIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleDivideIconFill ref={ref} {...props} />;
  if (duotone) return <CircleDivideIconDuotone ref={ref} {...props} />;
  return <RegularCircleDivideIcon ref={ref} {...props} />;
}));

CircleDivideIcon.displayName = 'CircleDivideIcon';

export { CircleDivideIcon };
