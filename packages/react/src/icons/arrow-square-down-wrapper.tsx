import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowSquareDownIcon as RegularArrowSquareDownIcon } from './arrow-square-down';
import { ArrowSquareDownIconBold } from './arrow-square-down-bold';
import { ArrowSquareDownIconFilled } from './arrow-square-down-filled';
import { ArrowSquareDownIconFilltone } from './arrow-square-down-filltone';
import { ArrowSquareDownIconLinetone } from './arrow-square-down-linetone';

export interface ArrowSquareDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareDownIcon = memo(forwardRef<SVGSVGElement, ArrowSquareDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowSquareDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowSquareDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowSquareDownIcon ref={ref} {...props} />;
  }
}));

ArrowSquareDownIcon.displayName = 'ArrowSquareDownIcon';

export { ArrowSquareDownIcon };
