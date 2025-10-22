import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HourglassEmptyIcon as HourglassEmptyIconRegular } from './hourglass-empty';
import { HourglassEmptyIconBold } from './hourglass-empty-bold';
import { HourglassEmptyIconFilled } from './hourglass-empty-filled';
import { HourglassEmptyIconFilltone } from './hourglass-empty-filltone';
import { HourglassEmptyIconLinetone } from './hourglass-empty-linetone';

export interface HourglassEmptyIconProps extends IconProps {
  variant?: IconVariant;
}

const HourglassEmptyIcon = memo(forwardRef<SVGSVGElement, HourglassEmptyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HourglassEmptyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HourglassEmptyIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HourglassEmptyIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HourglassEmptyIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <HourglassEmptyIconRegular ref={ref} {...props} />;
  }
}));

HourglassEmptyIcon.displayName = 'HourglassEmptyIcon';

export { HourglassEmptyIcon };
