import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowSquareDownRightIcon as ArrowSquareDownRightIconRegular } from './arrow-square-down-right';
import { ArrowSquareDownRightIconBold } from './arrow-square-down-right-bold';
import { ArrowSquareDownRightIconFilled } from './arrow-square-down-right-filled';
import { ArrowSquareDownRightIconFilltone } from './arrow-square-down-right-filltone';
import { ArrowSquareDownRightIconLinetone } from './arrow-square-down-right-linetone';

export interface ArrowSquareDownRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowSquareDownRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareDownRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareDownRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowSquareDownRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowSquareDownRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareDownRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareDownRightIcon.displayName = 'ArrowSquareDownRightIcon';

export { ArrowSquareDownRightIcon };
