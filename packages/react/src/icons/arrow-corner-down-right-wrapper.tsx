import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerDownRightIcon as ArrowCornerDownRightIconRegular } from './arrow-corner-down-right';
import { ArrowCornerDownRightIconBold } from './arrow-corner-down-right-bold';
import { ArrowCornerDownRightIconFilled } from './arrow-corner-down-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ArrowCornerDownRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowCornerDownRightIcon.displayName = 'ArrowCornerDownRightIcon';

export { ArrowCornerDownRightIcon };
