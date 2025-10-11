import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowRotateCircleLeftIcon as ArrowRotateCircleLeftIconRegular } from './arrow-rotate-circle-left';
import { ArrowRotateCircleLeftIconBold } from './arrow-rotate-circle-left-bold';
import { ArrowRotateCircleLeftIconFilled } from './arrow-rotate-circle-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowRotateCircleLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowRotateCircleLeftIcon = memo(forwardRef<SVGSVGElement, ArrowRotateCircleLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowRotateCircleLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowRotateCircleLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowRotateCircleLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowRotateCircleLeftIcon.displayName = 'ArrowRotateCircleLeftIcon';

export { ArrowRotateCircleLeftIcon };
