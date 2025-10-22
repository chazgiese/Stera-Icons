import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowSquareUpRightIcon as ArrowSquareUpRightIconRegular } from './arrow-square-up-right';
import { ArrowSquareUpRightIconBold } from './arrow-square-up-right-bold';
import { ArrowSquareUpRightIconFilled } from './arrow-square-up-right-filled';
import { ArrowSquareUpRightIconFilltone } from './arrow-square-up-right-filltone';
import { ArrowSquareUpRightIconLinetone } from './arrow-square-up-right-linetone';

export interface ArrowSquareUpRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareUpRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareUpRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowSquareUpRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowSquareUpRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareUpRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareUpRightIcon.displayName = 'ArrowSquareUpRightIcon';

export { ArrowSquareUpRightIcon };
