import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotationLeftIcon as RegularRotationLeftIcon } from './rotation-left';
import { RotationLeftIconDuotone as RotationLeftIconDuotone } from './rotation-left-duotone';
import { RotationLeftIconBold as RotationLeftIconBold } from './rotation-left-bold';
import { RotationLeftIconBoldDuotone as RotationLeftIconBoldDuotone } from './rotation-left-bold-duotone';
import { RotationLeftIconFill as RotationLeftIconFill } from './rotation-left-fill';
import { RotationLeftIconFillDuotone as RotationLeftIconFillDuotone } from './rotation-left-fill-duotone';

export interface RotationLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RotationLeftIcon = memo(forwardRef<SVGSVGElement, RotationLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotationLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RotationLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RotationLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RotationLeftIconFill ref={ref} {...props} />;
  if (duotone) return <RotationLeftIconDuotone ref={ref} {...props} />;
  return <RegularRotationLeftIcon ref={ref} {...props} />;
}));

RotationLeftIcon.displayName = 'RotationLeftIcon';

export { RotationLeftIcon };
