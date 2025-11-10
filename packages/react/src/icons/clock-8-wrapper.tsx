import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock8Icon as RegularClock8Icon } from './clock-8';
import { Clock8IconBold } from './clock-8-bold';
import { Clock8IconFilled } from './clock-8-filled';
import { Clock8IconFilltone } from './clock-8-filltone';
import { Clock8IconLinetone } from './clock-8-linetone';

export interface Clock8IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock8Icon = memo(forwardRef<SVGSVGElement, Clock8IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock8IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock8IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock8IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock8IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock8Icon ref={ref} {...props} />;
  }
}));

Clock8Icon.displayName = 'Clock8Icon';

export { Clock8Icon };
