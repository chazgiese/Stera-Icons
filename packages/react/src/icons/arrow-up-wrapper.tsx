import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowUpIcon as RegularArrowUpIcon } from './arrow-up';
import { ArrowUpIconBold } from './arrow-up-bold';
import { ArrowUpIconFilled } from './arrow-up-filled';
import { ArrowUpIconFilltone } from './arrow-up-filltone';
import { ArrowUpIconLinetone } from './arrow-up-linetone';

export interface ArrowUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpIcon = memo(forwardRef<SVGSVGElement, ArrowUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowUpIcon ref={ref} {...props} />;
  }
}));

ArrowUpIcon.displayName = 'ArrowUpIcon';

export { ArrowUpIcon };
