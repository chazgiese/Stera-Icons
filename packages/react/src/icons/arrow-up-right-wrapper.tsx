import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowUpRightIcon as RegularArrowUpRightIcon } from './arrow-up-right';
import { ArrowUpRightIconBold } from './arrow-up-right-bold';
import { ArrowUpRightIconFilled } from './arrow-up-right-filled';
import { ArrowUpRightIconFilltone } from './arrow-up-right-filltone';
import { ArrowUpRightIconLinetone } from './arrow-up-right-linetone';

export interface ArrowUpRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowUpRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowUpRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowUpRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowUpRightIcon ref={ref} {...props} />;
  }
}));

ArrowUpRightIcon.displayName = 'ArrowUpRightIcon';

export { ArrowUpRightIcon };
