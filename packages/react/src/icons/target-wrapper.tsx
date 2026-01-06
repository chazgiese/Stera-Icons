import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TargetIcon as RegularTargetIcon } from './target';
import { TargetIconDuotone as TargetIconDuotone } from './target-duotone';
import { TargetIconBold as TargetIconBold } from './target-bold';
import { TargetIconBoldDuotone as TargetIconBoldDuotone } from './target-bold-duotone';
import { TargetIconFill as TargetIconFill } from './target-fill';
import { TargetIconFillDuotone as TargetIconFillDuotone } from './target-fill-duotone';

export interface TargetIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TargetIcon = memo(forwardRef<SVGSVGElement, TargetIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TargetIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TargetIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TargetIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TargetIconFill ref={ref} {...props} />;
  if (duotone) return <TargetIconDuotone ref={ref} {...props} />;
  return <RegularTargetIcon ref={ref} {...props} />;
}));

TargetIcon.displayName = 'TargetIcon';

export { TargetIcon };
