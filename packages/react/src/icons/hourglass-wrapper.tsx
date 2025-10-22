import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HourglassIcon as RegularHourglassIcon } from './hourglass';
import { HourglassIconBold } from './hourglass-bold';
import { HourglassIconFilled } from './hourglass-filled';
import { HourglassIconFilltone } from './hourglass-filltone';
import { HourglassIconLinetone } from './hourglass-linetone';

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
    case 'filltone':
      return <HourglassIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HourglassIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHourglassIcon ref={ref} {...props} />;
  }
}));

HourglassIcon.displayName = 'HourglassIcon';

export { HourglassIcon };
