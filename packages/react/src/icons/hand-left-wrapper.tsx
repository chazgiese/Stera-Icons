import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HandLeftIcon as RegularHandLeftIcon } from './hand-left';
import { HandLeftIconBold } from './hand-left-bold';
import { HandLeftIconFilled } from './hand-left-filled';
import { HandLeftIconFilltone } from './hand-left-filltone';
import { HandLeftIconLinetone } from './hand-left-linetone';

export interface HandLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const HandLeftIcon = memo(forwardRef<SVGSVGElement, HandLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HandLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HandLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HandLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HandLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHandLeftIcon ref={ref} {...props} />;
  }
}));

HandLeftIcon.displayName = 'HandLeftIcon';

export { HandLeftIcon };
