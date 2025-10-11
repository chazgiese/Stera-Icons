import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerUpLeftIcon as ArrowCornerUpLeftIconRegular } from './arrow-corner-up-left';
import { ArrowCornerUpLeftIconBold } from './arrow-corner-up-left-bold';
import { ArrowCornerUpLeftIconFilled } from './arrow-corner-up-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ArrowCornerUpLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowCornerUpLeftIcon.displayName = 'ArrowCornerUpLeftIcon';

export { ArrowCornerUpLeftIcon };
