import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowSquareUpLeftIcon as RegularArrowSquareUpLeftIcon } from './arrow-square-up-left';
import { ArrowSquareUpLeftIconBold } from './arrow-square-up-left-bold';
import { ArrowSquareUpLeftIconFilled } from './arrow-square-up-left-filled';
import { ArrowSquareUpLeftIconFilltone } from './arrow-square-up-left-filltone';
import { ArrowSquareUpLeftIconLinetone } from './arrow-square-up-left-linetone';

export interface ArrowSquareUpLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareUpLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareUpLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowSquareUpLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowSquareUpLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowSquareUpLeftIcon ref={ref} {...props} />;
  }
}));

ArrowSquareUpLeftIcon.displayName = 'ArrowSquareUpLeftIcon';

export { ArrowSquareUpLeftIcon };
