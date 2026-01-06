import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotateCircleLeftIcon as RegularRotateCircleLeftIcon } from './rotate-circle-left';
import { RotateCircleLeftIconDuotone as RotateCircleLeftIconDuotone } from './rotate-circle-left-duotone';
import { RotateCircleLeftIconBold as RotateCircleLeftIconBold } from './rotate-circle-left-bold';
import { RotateCircleLeftIconBoldDuotone as RotateCircleLeftIconBoldDuotone } from './rotate-circle-left-bold-duotone';
import { RotateCircleLeftIconFill as RotateCircleLeftIconFill } from './rotate-circle-left-fill';
import { RotateCircleLeftIconFillDuotone as RotateCircleLeftIconFillDuotone } from './rotate-circle-left-fill-duotone';

export interface RotateCircleLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RotateCircleLeftIcon = memo(forwardRef<SVGSVGElement, RotateCircleLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateCircleLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RotateCircleLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RotateCircleLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RotateCircleLeftIconFill ref={ref} {...props} />;
  if (duotone) return <RotateCircleLeftIconDuotone ref={ref} {...props} />;
  return <RegularRotateCircleLeftIcon ref={ref} {...props} />;
}));

RotateCircleLeftIcon.displayName = 'RotateCircleLeftIcon';

export { RotateCircleLeftIcon };
