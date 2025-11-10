import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { Clock2Icon as RegularClock2Icon } from './clock-2';
import { Clock2IconBold } from './clock-2-bold';
import { Clock2IconFilled } from './clock-2-filled';
import { Clock2IconFilltone } from './clock-2-filltone';
import { Clock2IconLinetone } from './clock-2-linetone';

export interface Clock2IconProps extends IconProps {
  variant?: IconVariant;
}

const Clock2Icon = memo(forwardRef<SVGSVGElement, Clock2IconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <Clock2IconFilled ref={ref} {...props} />;
    case 'bold':
      return <Clock2IconBold ref={ref} {...props} />;
    case 'filltone':
      return <Clock2IconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <Clock2IconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClock2Icon ref={ref} {...props} />;
  }
}));

Clock2Icon.displayName = 'Clock2Icon';

export { Clock2Icon };
