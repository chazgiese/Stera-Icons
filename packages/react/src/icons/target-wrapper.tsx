import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TargetIcon as RegularTargetIcon } from './target';
import { TargetIconBold } from './target-bold';
import { TargetIconFilled } from './target-filled';
import { TargetIconFilltone } from './target-filltone';
import { TargetIconLinetone } from './target-linetone';

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
    case 'filltone':
      return <TargetIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TargetIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTargetIcon ref={ref} {...props} />;
  }
}));

TargetIcon.displayName = 'TargetIcon';

export { TargetIcon };
