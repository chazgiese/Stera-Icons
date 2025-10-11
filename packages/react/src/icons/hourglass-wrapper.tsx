import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HourglassIcon as HourglassIconRegular } from './hourglass';
import { HourglassIconBold } from './hourglass-bold';
import { HourglassIconFilled } from './hourglass-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HourglassIconProps extends IconProps {
  variant?: IconVariant;
}

const HourglassIcon = memo(forwardRef<SVGSVGElement, HourglassIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HourglassIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HourglassIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HourglassIconRegular ref={ref} {...props} />;
  }
}));

HourglassIcon.displayName = 'HourglassIcon';

export { HourglassIcon };
