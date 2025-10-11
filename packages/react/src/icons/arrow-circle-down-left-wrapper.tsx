import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleDownLeftIcon as ArrowCircleDownLeftIconRegular } from './arrow-circle-down-left';
import { ArrowCircleDownLeftIconBold } from './arrow-circle-down-left-bold';
import { ArrowCircleDownLeftIconFilled } from './arrow-circle-down-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowCircleDownLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCircleDownLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleDownLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleDownLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCircleDownLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowCircleDownLeftIcon.displayName = 'ArrowCircleDownLeftIcon';

export { ArrowCircleDownLeftIcon };
