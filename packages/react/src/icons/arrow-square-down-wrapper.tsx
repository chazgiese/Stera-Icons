import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareDownIcon as ArrowSquareDownIconRegular } from './arrow-square-down';
import { ArrowSquareDownIconBold } from './arrow-square-down-bold';
import { ArrowSquareDownIconFilled } from './arrow-square-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowSquareDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareDownIcon = memo(forwardRef<SVGSVGElement, ArrowSquareDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareDownIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareDownIcon.displayName = 'ArrowSquareDownIcon';

export { ArrowSquareDownIcon };
