import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowDownRightIcon as RegularArrowDownRightIcon } from './arrow-down-right';
import { ArrowDownRightIconBold } from './arrow-down-right-bold';
import { ArrowDownRightIconFilled } from './arrow-down-right-filled';
import { ArrowDownRightIconFilltone } from './arrow-down-right-filltone';
import { ArrowDownRightIconLinetone } from './arrow-down-right-linetone';

export interface ArrowDownRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowDownRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowDownRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowDownRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowDownRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowDownRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowDownRightIcon ref={ref} {...props} />;
  }
}));

ArrowDownRightIcon.displayName = 'ArrowDownRightIcon';

export { ArrowDownRightIcon };
