import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TargetIcon as TargetIconRegular } from './target';
import { TargetIconBold } from './target-bold';
import { TargetIconFilled } from './target-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TargetIconProps extends IconProps {
  variant?: IconVariant;
}

const TargetIcon = memo(forwardRef<SVGSVGElement, TargetIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TargetIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TargetIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TargetIconRegular ref={ref} {...props} />;
  }
}));

TargetIcon.displayName = 'TargetIcon';

export { TargetIcon };
