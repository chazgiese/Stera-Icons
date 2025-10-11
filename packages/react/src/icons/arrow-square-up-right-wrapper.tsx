import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpRightIcon as ArrowSquareUpRightIconRegular } from './arrow-square-up-right';
import { ArrowSquareUpRightIconBold } from './arrow-square-up-right-bold';
import { ArrowSquareUpRightIconFilled } from './arrow-square-up-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowSquareUpRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareUpRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareUpRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareUpRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareUpRightIcon.displayName = 'ArrowSquareUpRightIcon';

export { ArrowSquareUpRightIcon };
