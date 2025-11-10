import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock7Icon as RegularClock7Icon } from './clock-7';
import { Clock7IconBold } from './clock-7-bold';
import { Clock7IconFilled } from './clock-7-filled';
import { Clock7IconFilltone } from './clock-7-filltone';
import { Clock7IconLinetone } from './clock-7-linetone';

export interface Clock7IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock7Icon = memo(forwardRef<SVGSVGElement, Clock7IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock7IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock7IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock7IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock7IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock7Icon ref={ref} {...props} />;
  }
}));

Clock7Icon.displayName = 'Clock7Icon';

export { Clock7Icon };
