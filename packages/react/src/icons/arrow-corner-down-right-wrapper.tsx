import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCornerDownRightIcon as ArrowCornerDownRightIconRegular } from './arrow-corner-down-right';
import { ArrowCornerDownRightIconBold } from './arrow-corner-down-right-bold';
import { ArrowCornerDownRightIconFilled } from './arrow-corner-down-right-filled';
import { ArrowCornerDownRightIconFilltone } from './arrow-corner-down-right-filltone';
import { ArrowCornerDownRightIconLinetone } from './arrow-corner-down-right-linetone';

export interface ArrowCornerDownRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCornerDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowCornerDownRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCornerDownRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCornerDownRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCornerDownRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCornerDownRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCornerDownRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowCornerDownRightIcon.displayName = 'ArrowCornerDownRightIcon';

export { ArrowCornerDownRightIcon };
