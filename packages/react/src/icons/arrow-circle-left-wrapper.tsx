import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCircleLeftIcon as RegularArrowCircleLeftIcon } from './arrow-circle-left';
import { ArrowCircleLeftIconBold } from './arrow-circle-left-bold';
import { ArrowCircleLeftIconFilled } from './arrow-circle-left-filled';
import { ArrowCircleLeftIconFilltone } from './arrow-circle-left-filltone';
import { ArrowCircleLeftIconLinetone } from './arrow-circle-left-linetone';

export interface ArrowCircleLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCircleLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCircleLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCircleLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowCircleLeftIcon ref={ref} {...props} />;
  }
}));

ArrowCircleLeftIcon.displayName = 'ArrowCircleLeftIcon';

export { ArrowCircleLeftIcon };
