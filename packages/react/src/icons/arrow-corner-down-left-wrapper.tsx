import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerDownLeftIcon as ArrowCornerDownLeftIconRegular } from './arrow-corner-down-left';
import { ArrowCornerDownLeftIconBold } from './arrow-corner-down-left-bold';
import { ArrowCornerDownLeftIconFilled } from './arrow-corner-down-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowCornerDownLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCornerDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCornerDownLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCornerDownLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCornerDownLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCornerDownLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowCornerDownLeftIcon.displayName = 'ArrowCornerDownLeftIcon';

export { ArrowCornerDownLeftIcon };
