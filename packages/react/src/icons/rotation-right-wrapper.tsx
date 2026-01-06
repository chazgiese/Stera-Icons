import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotationRightIcon as RegularRotationRightIcon } from './rotation-right';
import { RotationRightIconDuotone as RotationRightIconDuotone } from './rotation-right-duotone';
import { RotationRightIconBold as RotationRightIconBold } from './rotation-right-bold';
import { RotationRightIconBoldDuotone as RotationRightIconBoldDuotone } from './rotation-right-bold-duotone';
import { RotationRightIconFill as RotationRightIconFill } from './rotation-right-fill';
import { RotationRightIconFillDuotone as RotationRightIconFillDuotone } from './rotation-right-fill-duotone';

export interface RotationRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RotationRightIcon = memo(forwardRef<SVGSVGElement, RotationRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotationRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RotationRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RotationRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RotationRightIconFill ref={ref} {...props} />;
  if (duotone) return <RotationRightIconDuotone ref={ref} {...props} />;
  return <RegularRotationRightIcon ref={ref} {...props} />;
}));

RotationRightIcon.displayName = 'RotationRightIcon';

export { RotationRightIcon };
