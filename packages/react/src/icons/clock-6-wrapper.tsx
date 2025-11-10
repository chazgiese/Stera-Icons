import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock6Icon as RegularClock6Icon } from './clock-6';
import { Clock6IconBold } from './clock-6-bold';
import { Clock6IconFilled } from './clock-6-filled';
import { Clock6IconFilltone } from './clock-6-filltone';
import { Clock6IconLinetone } from './clock-6-linetone';

export interface Clock6IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock6Icon = memo(forwardRef<SVGSVGElement, Clock6IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock6IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock6IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock6IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock6IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock6Icon ref={ref} {...props} />;
  }
}));

Clock6Icon.displayName = 'Clock6Icon';

export { Clock6Icon };
