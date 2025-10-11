import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpRightDownLeftIcon as ArrowUpRightDownLeftIconRegular } from './arrow-up-right-down-left';
import { ArrowUpRightDownLeftIconBold } from './arrow-up-right-down-left-bold';
import { ArrowUpRightDownLeftIconFilled } from './arrow-up-right-down-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowUpRightDownLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpRightDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowUpRightDownLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpRightDownLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpRightDownLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowUpRightDownLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowUpRightDownLeftIcon.displayName = 'ArrowUpRightDownLeftIcon';

export { ArrowUpRightDownLeftIcon };
