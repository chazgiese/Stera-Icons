import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowSquareDownLeftIcon as RegularArrowSquareDownLeftIcon } from './arrow-square-down-left';
import { ArrowSquareDownLeftIconBold } from './arrow-square-down-left-bold';
import { ArrowSquareDownLeftIconFilled } from './arrow-square-down-left-filled';
import { ArrowSquareDownLeftIconFilltone } from './arrow-square-down-left-filltone';
import { ArrowSquareDownLeftIconLinetone } from './arrow-square-down-left-linetone';

export interface ArrowSquareDownLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareDownLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareDownLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareDownLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowSquareDownLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowSquareDownLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowSquareDownLeftIcon ref={ref} {...props} />;
  }
}));

ArrowSquareDownLeftIcon.displayName = 'ArrowSquareDownLeftIcon';

export { ArrowSquareDownLeftIcon };
