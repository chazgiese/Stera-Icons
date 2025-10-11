import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpLeftIcon as ArrowCircleUpLeftIconRegular } from './arrow-circle-up-left';
import { ArrowCircleUpLeftIconBold } from './arrow-circle-up-left-bold';
import { ArrowCircleUpLeftIconFilled } from './arrow-circle-up-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowCircleUpLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCircleUpLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleUpLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleUpLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCircleUpLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowCircleUpLeftIcon.displayName = 'ArrowCircleUpLeftIcon';

export { ArrowCircleUpLeftIcon };
