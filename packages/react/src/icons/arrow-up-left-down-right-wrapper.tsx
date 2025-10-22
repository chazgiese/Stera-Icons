import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowUpLeftDownRightIcon as RegularArrowUpLeftDownRightIcon } from './arrow-up-left-down-right';
import { ArrowUpLeftDownRightIconBold } from './arrow-up-left-down-right-bold';
import { ArrowUpLeftDownRightIconFilled } from './arrow-up-left-down-right-filled';
import { ArrowUpLeftDownRightIconFilltone } from './arrow-up-left-down-right-filltone';
import { ArrowUpLeftDownRightIconLinetone } from './arrow-up-left-down-right-linetone';

export interface ArrowUpLeftDownRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpLeftDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowUpLeftDownRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpLeftDownRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpLeftDownRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowUpLeftDownRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowUpLeftDownRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowUpLeftDownRightIcon ref={ref} {...props} />;
  }
}));

ArrowUpLeftDownRightIcon.displayName = 'ArrowUpLeftDownRightIcon';

export { ArrowUpLeftDownRightIcon };
