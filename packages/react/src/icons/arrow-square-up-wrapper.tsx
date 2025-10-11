import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpIcon as ArrowSquareUpIconRegular } from './arrow-square-up';
import { ArrowSquareUpIconBold } from './arrow-square-up-bold';
import { ArrowSquareUpIconFilled } from './arrow-square-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowSquareUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareUpIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareUpIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareUpIcon.displayName = 'ArrowSquareUpIcon';

export { ArrowSquareUpIcon };
