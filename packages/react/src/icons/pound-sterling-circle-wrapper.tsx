import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PoundSterlingCircleIcon as RegularPoundSterlingCircleIcon } from './pound-sterling-circle';
import { PoundSterlingCircleIconBold } from './pound-sterling-circle-bold';
import { PoundSterlingCircleIconFilled } from './pound-sterling-circle-filled';
import { PoundSterlingCircleIconFilltone } from './pound-sterling-circle-filltone';
import { PoundSterlingCircleIconLinetone } from './pound-sterling-circle-linetone';

export interface PoundSterlingCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const PoundSterlingCircleIcon = memo(forwardRef<SVGSVGElement, PoundSterlingCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PoundSterlingCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PoundSterlingCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PoundSterlingCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PoundSterlingCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPoundSterlingCircleIcon ref={ref} {...props} />;
  }
}));

PoundSterlingCircleIcon.displayName = 'PoundSterlingCircleIcon';

export { PoundSterlingCircleIcon };
