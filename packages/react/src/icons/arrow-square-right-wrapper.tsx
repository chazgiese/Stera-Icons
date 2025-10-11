import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareRightIcon as ArrowSquareRightIconRegular } from './arrow-square-right';
import { ArrowSquareRightIconBold } from './arrow-square-right-bold';
import { ArrowSquareRightIconFilled } from './arrow-square-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowSquareRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareRightIcon = memo(forwardRef<SVGSVGElement, ArrowSquareRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareRightIcon.displayName = 'ArrowSquareRightIcon';

export { ArrowSquareRightIcon };
