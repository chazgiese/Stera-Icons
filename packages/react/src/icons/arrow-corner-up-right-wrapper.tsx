import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerUpRightIcon as ArrowCornerUpRightIconRegular } from './arrow-corner-up-right';
import { ArrowCornerUpRightIconBold } from './arrow-corner-up-right-bold';
import { ArrowCornerUpRightIconFilled } from './arrow-corner-up-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ArrowCornerUpRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowCornerUpRightIcon.displayName = 'ArrowCornerUpRightIcon';

export { ArrowCornerUpRightIcon };
