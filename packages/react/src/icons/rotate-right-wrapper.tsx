import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotateRightIcon as RegularRotateRightIcon } from './rotate-right';
import { RotateRightIconDuotone as RotateRightIconDuotone } from './rotate-right-duotone';
import { RotateRightIconBold as RotateRightIconBold } from './rotate-right-bold';
import { RotateRightIconBoldDuotone as RotateRightIconBoldDuotone } from './rotate-right-bold-duotone';
import { RotateRightIconFill as RotateRightIconFill } from './rotate-right-fill';
import { RotateRightIconFillDuotone as RotateRightIconFillDuotone } from './rotate-right-fill-duotone';

export interface RotateRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RotateRightIcon = memo(forwardRef<SVGSVGElement, RotateRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RotateRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RotateRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RotateRightIconFill ref={ref} {...props} />;
  if (duotone) return <RotateRightIconDuotone ref={ref} {...props} />;
  return <RegularRotateRightIcon ref={ref} {...props} />;
}));

RotateRightIcon.displayName = 'RotateRightIcon';

export { RotateRightIcon };
