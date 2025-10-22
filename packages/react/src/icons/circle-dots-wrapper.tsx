import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleDotsIcon as RegularCircleDotsIcon } from './circle-dots';
import { CircleDotsIconBold } from './circle-dots-bold';
import { CircleDotsIconFilled } from './circle-dots-filled';
import { CircleDotsIconFilltone } from './circle-dots-filltone';
import { CircleDotsIconLinetone } from './circle-dots-linetone';

export interface CircleDotsIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDotsIcon = memo(forwardRef<SVGSVGElement, CircleDotsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDotsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDotsIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleDotsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleDotsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleDotsIcon ref={ref} {...props} />;
  }
}));

CircleDotsIcon.displayName = 'CircleDotsIcon';

export { CircleDotsIcon };
