import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock4Icon as RegularClock4Icon } from './clock-4';
import { Clock4IconBold } from './clock-4-bold';
import { Clock4IconFilled } from './clock-4-filled';
import { Clock4IconFilltone } from './clock-4-filltone';
import { Clock4IconLinetone } from './clock-4-linetone';

export interface Clock4IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock4Icon = memo(forwardRef<SVGSVGElement, Clock4IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock4IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock4IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock4IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock4IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock4Icon ref={ref} {...props} />;
  }
}));

Clock4Icon.displayName = 'Clock4Icon';

export { Clock4Icon };
