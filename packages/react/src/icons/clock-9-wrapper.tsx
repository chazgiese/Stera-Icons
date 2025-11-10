import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock9Icon as RegularClock9Icon } from './clock-9';
import { Clock9IconBold } from './clock-9-bold';
import { Clock9IconFilled } from './clock-9-filled';
import { Clock9IconFilltone } from './clock-9-filltone';
import { Clock9IconLinetone } from './clock-9-linetone';

export interface Clock9IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock9Icon = memo(forwardRef<SVGSVGElement, Clock9IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock9IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock9IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock9IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock9IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock9Icon ref={ref} {...props} />;
  }
}));

Clock9Icon.displayName = 'Clock9Icon';

export { Clock9Icon };
