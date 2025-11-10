import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock11Icon as RegularClock11Icon } from './clock-11';
import { Clock11IconBold } from './clock-11-bold';
import { Clock11IconFilled } from './clock-11-filled';
import { Clock11IconFilltone } from './clock-11-filltone';
import { Clock11IconLinetone } from './clock-11-linetone';

export interface Clock11IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock11Icon = memo(forwardRef<SVGSVGElement, Clock11IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock11IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock11IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock11IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock11IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock11Icon ref={ref} {...props} />;
  }
}));

Clock11Icon.displayName = 'Clock11Icon';

export { Clock11Icon };
