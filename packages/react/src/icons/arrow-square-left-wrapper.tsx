import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowSquareLeftIcon as ArrowSquareLeftIconRegular } from './arrow-square-left';
import { ArrowSquareLeftIconBold } from './arrow-square-left-bold';
import { ArrowSquareLeftIconFilled } from './arrow-square-left-filled';
import { ArrowSquareLeftIconFilltone } from './arrow-square-left-filltone';
import { ArrowSquareLeftIconLinetone } from './arrow-square-left-linetone';

export interface ArrowSquareLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowSquareLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowSquareLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareLeftIcon.displayName = 'ArrowSquareLeftIcon';

export { ArrowSquareLeftIcon };
