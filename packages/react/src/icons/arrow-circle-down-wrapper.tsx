import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCircleDownIcon as ArrowCircleDownIconRegular } from './arrow-circle-down';
import { ArrowCircleDownIconBold } from './arrow-circle-down-bold';
import { ArrowCircleDownIconFilled } from './arrow-circle-down-filled';
import { ArrowCircleDownIconFilltone } from './arrow-circle-down-filltone';
import { ArrowCircleDownIconLinetone } from './arrow-circle-down-linetone';

export interface ArrowCircleDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleDownIcon = memo(forwardRef<SVGSVGElement, ArrowCircleDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCircleDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCircleDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCircleDownIconRegular ref={ref} {...props} />;
  }
}));

ArrowCircleDownIcon.displayName = 'ArrowCircleDownIcon';

export { ArrowCircleDownIcon };
