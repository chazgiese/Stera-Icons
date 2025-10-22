import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SpinnerIcon as RegularSpinnerIcon } from './spinner';
import { SpinnerIconBold } from './spinner-bold';
import { SpinnerIconFilled } from './spinner-filled';
import { SpinnerIconFilltone } from './spinner-filltone';
import { SpinnerIconLinetone } from './spinner-linetone';

export interface SpinnerIconProps extends IconProps {
  variant?: IconVariant;
}

const SpinnerIcon = memo(forwardRef<SVGSVGElement, SpinnerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpinnerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpinnerIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SpinnerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SpinnerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSpinnerIcon ref={ref} {...props} />;
  }
}));

SpinnerIcon.displayName = 'SpinnerIcon';

export { SpinnerIcon };
