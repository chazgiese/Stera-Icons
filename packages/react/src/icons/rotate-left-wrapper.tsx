import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotateLeftIcon as RegularRotateLeftIcon } from './rotate-left';
import { RotateLeftIconDuotone as RotateLeftIconDuotone } from './rotate-left-duotone';
import { RotateLeftIconBold as RotateLeftIconBold } from './rotate-left-bold';
import { RotateLeftIconBoldDuotone as RotateLeftIconBoldDuotone } from './rotate-left-bold-duotone';
import { RotateLeftIconFill as RotateLeftIconFill } from './rotate-left-fill';
import { RotateLeftIconFillDuotone as RotateLeftIconFillDuotone } from './rotate-left-fill-duotone';

export interface RotateLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RotateLeftIcon = memo(forwardRef<SVGSVGElement, RotateLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RotateLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RotateLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RotateLeftIconFill ref={ref} {...props} />;
  if (duotone) return <RotateLeftIconDuotone ref={ref} {...props} />;
  return <RegularRotateLeftIcon ref={ref} {...props} />;
}));

RotateLeftIcon.displayName = 'RotateLeftIcon';

export { RotateLeftIcon };
