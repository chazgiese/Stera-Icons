import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCircleUpRightIcon as RegularArrowCircleUpRightIcon } from './arrow-circle-up-right';
import { ArrowCircleUpRightIconBold } from './arrow-circle-up-right-bold';
import { ArrowCircleUpRightIconFilled } from './arrow-circle-up-right-filled';
import { ArrowCircleUpRightIconFilltone } from './arrow-circle-up-right-filltone';
import { ArrowCircleUpRightIconLinetone } from './arrow-circle-up-right-linetone';

export interface ArrowCircleUpRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleUpRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleUpRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleUpRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCircleUpRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCircleUpRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowCircleUpRightIcon ref={ref} {...props} />;
  }
}));

ArrowCircleUpRightIcon.displayName = 'ArrowCircleUpRightIcon';

export { ArrowCircleUpRightIcon };
