import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StopCircleIcon as StopCircleIconRegular } from './stop-circle';
import { StopCircleIconBold } from './stop-circle-bold';
import { StopCircleIconFilled } from './stop-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface StopCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const StopCircleIcon = memo(forwardRef<SVGSVGElement, StopCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <StopCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <StopCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <StopCircleIconRegular ref={ref} {...props} />;
  }
}));

StopCircleIcon.displayName = 'StopCircleIcon';

export { StopCircleIcon };
