import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowSquareRightIcon as ArrowSquareRightIconRegular } from './arrow-square-right';
import { ArrowSquareRightIconBold } from './arrow-square-right-bold';
import { ArrowSquareRightIconFilled } from './arrow-square-right-filled';
import { ArrowSquareRightIconFilltone } from './arrow-square-right-filltone';
import { ArrowSquareRightIconLinetone } from './arrow-square-right-linetone';

export interface ArrowSquareRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareRightIcon = memo(forwardRef<SVGSVGElement, ArrowSquareRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowSquareRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowSquareRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareRightIcon.displayName = 'ArrowSquareRightIcon';

export { ArrowSquareRightIcon };
