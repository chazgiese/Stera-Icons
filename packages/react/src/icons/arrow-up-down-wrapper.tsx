import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowUpDownIcon as ArrowUpDownIconRegular } from './arrow-up-down';
import { ArrowUpDownIconBold } from './arrow-up-down-bold';
import { ArrowUpDownIconFilled } from './arrow-up-down-filled';
import { ArrowUpDownIconFilltone } from './arrow-up-down-filltone';
import { ArrowUpDownIconLinetone } from './arrow-up-down-linetone';

export interface ArrowUpDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpDownIcon = memo(forwardRef<SVGSVGElement, ArrowUpDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowUpDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowUpDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowUpDownIconRegular ref={ref} {...props} />;
  }
}));

ArrowUpDownIcon.displayName = 'ArrowUpDownIcon';

export { ArrowUpDownIcon };
