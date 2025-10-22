import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCornerUpLeftIcon as ArrowCornerUpLeftIconRegular } from './arrow-corner-up-left';
import { ArrowCornerUpLeftIconBold } from './arrow-corner-up-left-bold';
import { ArrowCornerUpLeftIconFilled } from './arrow-corner-up-left-filled';
import { ArrowCornerUpLeftIconFilltone } from './arrow-corner-up-left-filltone';
import { ArrowCornerUpLeftIconLinetone } from './arrow-corner-up-left-linetone';

export interface ArrowCornerUpLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCornerUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCornerUpLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCornerUpLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCornerUpLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCornerUpLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCornerUpLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCornerUpLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowCornerUpLeftIcon.displayName = 'ArrowCornerUpLeftIcon';

export { ArrowCornerUpLeftIcon };
