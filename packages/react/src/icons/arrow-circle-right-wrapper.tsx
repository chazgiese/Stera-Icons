import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCircleRightIcon as RegularArrowCircleRightIcon } from './arrow-circle-right';
import { ArrowCircleRightIconBold } from './arrow-circle-right-bold';
import { ArrowCircleRightIconFilled } from './arrow-circle-right-filled';
import { ArrowCircleRightIconFilltone } from './arrow-circle-right-filltone';
import { ArrowCircleRightIconLinetone } from './arrow-circle-right-linetone';

export interface ArrowCircleRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCircleRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCircleRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowCircleRightIcon ref={ref} {...props} />;
  }
}));

ArrowCircleRightIcon.displayName = 'ArrowCircleRightIcon';

export { ArrowCircleRightIcon };
