import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowDownIcon as ArrowDownIconRegular } from './arrow-down';
import { ArrowDownIconBold } from './arrow-down-bold';
import { ArrowDownIconFilled } from './arrow-down-filled';
import { ArrowDownIconFilltone } from './arrow-down-filltone';
import { ArrowDownIconLinetone } from './arrow-down-linetone';

export interface ArrowDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowDownIcon = memo(forwardRef<SVGSVGElement, ArrowDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowDownIconRegular ref={ref} {...props} />;
  }
}));

ArrowDownIcon.displayName = 'ArrowDownIcon';

export { ArrowDownIcon };
