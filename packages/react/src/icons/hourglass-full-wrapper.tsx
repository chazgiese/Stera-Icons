import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HourglassFullIcon as RegularHourglassFullIcon } from './hourglass-full';
import { HourglassFullIconBold } from './hourglass-full-bold';
import { HourglassFullIconFilled } from './hourglass-full-filled';
import { HourglassFullIconFilltone } from './hourglass-full-filltone';
import { HourglassFullIconLinetone } from './hourglass-full-linetone';

export interface HourglassFullIconProps extends IconProps {
  variant?: IconVariant;
}

const HourglassFullIcon = memo(forwardRef<SVGSVGElement, HourglassFullIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HourglassFullIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HourglassFullIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HourglassFullIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HourglassFullIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHourglassFullIcon ref={ref} {...props} />;
  }
}));

HourglassFullIcon.displayName = 'HourglassFullIcon';

export { HourglassFullIcon };
