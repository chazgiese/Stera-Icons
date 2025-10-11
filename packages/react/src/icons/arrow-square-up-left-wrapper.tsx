import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpLeftIcon as ArrowSquareUpLeftIconRegular } from './arrow-square-up-left';
import { ArrowSquareUpLeftIconBold } from './arrow-square-up-left-bold';
import { ArrowSquareUpLeftIconFilled } from './arrow-square-up-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowSquareUpLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowSquareUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowSquareUpLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowSquareUpLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowSquareUpLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowSquareUpLeftIcon.displayName = 'ArrowSquareUpLeftIcon';

export { ArrowSquareUpLeftIcon };
