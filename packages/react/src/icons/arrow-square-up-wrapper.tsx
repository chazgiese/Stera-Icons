import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowSquareUpIcon as ArrowSquareUpIconRegular } from './arrow-square-up';
import { ArrowSquareUpIconBold } from './arrow-square-up-bold';
import { ArrowSquareUpIconFilled } from './arrow-square-up-filled';
import { ArrowSquareUpIconFilltone } from './arrow-square-up-filltone';
import { ArrowSquareUpIconLinetone } from './arrow-square-up-linetone';

export interface ArrowSquareUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareUpIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowSquareUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowSquareUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareUpIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareUpIcon.displayName = 'ArrowSquareUpIcon';

export { ArrowSquareUpIcon };
