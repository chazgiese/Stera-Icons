import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareDownLeftIcon as ArrowSquareDownLeftIconRegular } from './arrow-square-down-left';
import { ArrowSquareDownLeftIconBold } from './arrow-square-down-left-bold';
import { ArrowSquareDownLeftIconFilled } from './arrow-square-down-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowSquareDownLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareDownLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareDownLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareDownLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareDownLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareDownLeftIcon.displayName = 'ArrowSquareDownLeftIcon';

export { ArrowSquareDownLeftIcon };
