import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCircleDownRightIcon as RegularArrowCircleDownRightIcon } from './arrow-circle-down-right';
import { ArrowCircleDownRightIconBold } from './arrow-circle-down-right-bold';
import { ArrowCircleDownRightIconFilled } from './arrow-circle-down-right-filled';
import { ArrowCircleDownRightIconFilltone } from './arrow-circle-down-right-filltone';
import { ArrowCircleDownRightIconLinetone } from './arrow-circle-down-right-linetone';

export interface ArrowCircleDownRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleDownRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleDownRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleDownRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCircleDownRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCircleDownRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowCircleDownRightIcon ref={ref} {...props} />;
  }
}));

ArrowCircleDownRightIcon.displayName = 'ArrowCircleDownRightIcon';

export { ArrowCircleDownRightIcon };
