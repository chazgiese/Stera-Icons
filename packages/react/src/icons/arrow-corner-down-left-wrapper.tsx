import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCornerDownLeftIcon as RegularArrowCornerDownLeftIcon } from './arrow-corner-down-left';
import { ArrowCornerDownLeftIconBold } from './arrow-corner-down-left-bold';
import { ArrowCornerDownLeftIconFilled } from './arrow-corner-down-left-filled';
import { ArrowCornerDownLeftIconFilltone } from './arrow-corner-down-left-filltone';
import { ArrowCornerDownLeftIconLinetone } from './arrow-corner-down-left-linetone';

export interface ArrowCornerDownLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCornerDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCornerDownLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCornerDownLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCornerDownLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCornerDownLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCornerDownLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowCornerDownLeftIcon ref={ref} {...props} />;
  }
}));

ArrowCornerDownLeftIcon.displayName = 'ArrowCornerDownLeftIcon';

export { ArrowCornerDownLeftIcon };
