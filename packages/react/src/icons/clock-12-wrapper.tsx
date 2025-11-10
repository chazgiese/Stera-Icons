import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock12Icon as RegularClock12Icon } from './clock-12';
import { Clock12IconBold } from './clock-12-bold';
import { Clock12IconFilled } from './clock-12-filled';
import { Clock12IconFilltone } from './clock-12-filltone';
import { Clock12IconLinetone } from './clock-12-linetone';

export interface Clock12IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock12Icon = memo(forwardRef<SVGSVGElement, Clock12IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock12IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock12IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock12IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock12IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock12Icon ref={ref} {...props} />;
  }
}));

Clock12Icon.displayName = 'Clock12Icon';

export { Clock12Icon };
