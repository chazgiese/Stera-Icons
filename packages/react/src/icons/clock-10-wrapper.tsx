import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock10Icon as RegularClock10Icon } from './clock-10';
import { Clock10IconBold } from './clock-10-bold';
import { Clock10IconFilled } from './clock-10-filled';
import { Clock10IconFilltone } from './clock-10-filltone';
import { Clock10IconLinetone } from './clock-10-linetone';

export interface Clock10IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock10Icon = memo(forwardRef<SVGSVGElement, Clock10IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock10IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock10IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock10IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock10IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock10Icon ref={ref} {...props} />;
  }
}));

Clock10Icon.displayName = 'Clock10Icon';

export { Clock10Icon };
