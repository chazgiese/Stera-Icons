import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowLineDownIcon as ArrowLineDownIconRegular } from './arrow-line-down';
import { ArrowLineDownIconBold } from './arrow-line-down-bold';
import { ArrowLineDownIconFilled } from './arrow-line-down-filled';
import { ArrowLineDownIconFilltone } from './arrow-line-down-filltone';
import { ArrowLineDownIconLinetone } from './arrow-line-down-linetone';

export interface ArrowLineDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLineDownIcon = memo(forwardRef<SVGSVGElement, ArrowLineDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLineDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLineDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowLineDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowLineDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLineDownIconRegular ref={ref} {...props} />;
  }
}));

ArrowLineDownIcon.displayName = 'ArrowLineDownIcon';

export { ArrowLineDownIcon };
