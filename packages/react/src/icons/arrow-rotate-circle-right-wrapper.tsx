import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowRotateCircleRightIcon as ArrowRotateCircleRightIconRegular } from './arrow-rotate-circle-right';
import { ArrowRotateCircleRightIconBold } from './arrow-rotate-circle-right-bold';
import { ArrowRotateCircleRightIconFilled } from './arrow-rotate-circle-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowRotateCircleRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowRotateCircleRightIcon = memo(forwardRef<SVGSVGElement, ArrowRotateCircleRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowRotateCircleRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowRotateCircleRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowRotateCircleRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowRotateCircleRightIcon.displayName = 'ArrowRotateCircleRightIcon';

export { ArrowRotateCircleRightIcon };
