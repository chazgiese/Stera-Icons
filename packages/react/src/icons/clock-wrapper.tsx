import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ClockIcon as ClockIconRegular } from './clock';
import { ClockIconBold } from './clock-bold';
import { ClockIconFilled } from './clock-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ClockIconProps extends IconProps {
  variant?: IconVariant;
}

const ClockIcon = memo(forwardRef<SVGSVGElement, ClockIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ClockIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ClockIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ClockIconRegular ref={ref} {...props} />;
  }
}));

ClockIcon.displayName = 'ClockIcon';

export { ClockIcon };
