import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotateCircleRightIcon as RegularRotateCircleRightIcon } from './rotate-circle-right';
import { RotateCircleRightIconDuotone as RotateCircleRightIconDuotone } from './rotate-circle-right-duotone';
import { RotateCircleRightIconBold as RotateCircleRightIconBold } from './rotate-circle-right-bold';
import { RotateCircleRightIconBoldDuotone as RotateCircleRightIconBoldDuotone } from './rotate-circle-right-bold-duotone';
import { RotateCircleRightIconFill as RotateCircleRightIconFill } from './rotate-circle-right-fill';
import { RotateCircleRightIconFillDuotone as RotateCircleRightIconFillDuotone } from './rotate-circle-right-fill-duotone';

export interface RotateCircleRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RotateCircleRightIcon = memo(forwardRef<SVGSVGElement, RotateCircleRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateCircleRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RotateCircleRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RotateCircleRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RotateCircleRightIconFill ref={ref} {...props} />;
  if (duotone) return <RotateCircleRightIconDuotone ref={ref} {...props} />;
  return <RegularRotateCircleRightIcon ref={ref} {...props} />;
}));

RotateCircleRightIcon.displayName = 'RotateCircleRightIcon';

export { RotateCircleRightIcon };
