import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock3Icon as RegularClock3Icon } from './clock-3';
import { Clock3IconBold } from './clock-3-bold';
import { Clock3IconFilled } from './clock-3-filled';
import { Clock3IconFilltone } from './clock-3-filltone';
import { Clock3IconLinetone } from './clock-3-linetone';

export interface Clock3IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock3Icon = memo(forwardRef<SVGSVGElement, Clock3IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock3IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock3IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock3IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock3IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock3Icon ref={ref} {...props} />;
  }
}));

Clock3Icon.displayName = 'Clock3Icon';

export { Clock3Icon };
