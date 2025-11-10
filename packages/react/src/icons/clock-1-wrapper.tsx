import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock1Icon as RegularClock1Icon } from './clock-1';
import { Clock1IconBold } from './clock-1-bold';
import { Clock1IconFilled } from './clock-1-filled';
import { Clock1IconFilltone } from './clock-1-filltone';
import { Clock1IconLinetone } from './clock-1-linetone';

export interface Clock1IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock1Icon = memo(forwardRef<SVGSVGElement, Clock1IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock1IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock1IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock1IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock1IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock1Icon ref={ref} {...props} />;
  }
}));

Clock1Icon.displayName = 'Clock1Icon';

export { Clock1Icon };
