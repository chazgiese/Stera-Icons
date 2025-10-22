import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCornerUpRightIcon as ArrowCornerUpRightIconRegular } from './arrow-corner-up-right';
import { ArrowCornerUpRightIconBold } from './arrow-corner-up-right-bold';
import { ArrowCornerUpRightIconFilled } from './arrow-corner-up-right-filled';
import { ArrowCornerUpRightIconFilltone } from './arrow-corner-up-right-filltone';
import { ArrowCornerUpRightIconLinetone } from './arrow-corner-up-right-linetone';

export interface ArrowCornerUpRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCornerUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowCornerUpRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCornerUpRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCornerUpRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCornerUpRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCornerUpRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCornerUpRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowCornerUpRightIcon.displayName = 'ArrowCornerUpRightIcon';

export { ArrowCornerUpRightIcon };
