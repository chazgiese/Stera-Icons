import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareLeftIcon as ArrowSquareLeftIconRegular } from './arrow-square-left';
import { ArrowSquareLeftIconBold } from './arrow-square-left-bold';
import { ArrowSquareLeftIconFilled } from './arrow-square-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowSquareLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareLeftIcon.displayName = 'ArrowSquareLeftIcon';

export { ArrowSquareLeftIcon };
