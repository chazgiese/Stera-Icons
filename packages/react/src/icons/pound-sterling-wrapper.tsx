import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PoundSterlingIcon as RegularPoundSterlingIcon } from './pound-sterling';
import { PoundSterlingIconBold } from './pound-sterling-bold';
import { PoundSterlingIconFilled } from './pound-sterling-filled';
import { PoundSterlingIconFilltone } from './pound-sterling-filltone';
import { PoundSterlingIconLinetone } from './pound-sterling-linetone';

export interface PoundSterlingIconProps extends IconProps {
  variant?: IconVariant;
}

const PoundSterlingIcon = memo(forwardRef<SVGSVGElement, PoundSterlingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PoundSterlingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PoundSterlingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PoundSterlingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PoundSterlingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPoundSterlingIcon ref={ref} {...props} />;
  }
}));

PoundSterlingIcon.displayName = 'PoundSterlingIcon';

export { PoundSterlingIcon };
