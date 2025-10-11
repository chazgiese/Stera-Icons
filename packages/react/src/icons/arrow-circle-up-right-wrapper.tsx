import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpRightIcon as ArrowCircleUpRightIconRegular } from './arrow-circle-up-right';
import { ArrowCircleUpRightIconBold } from './arrow-circle-up-right-bold';
import { ArrowCircleUpRightIconFilled } from './arrow-circle-up-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowCircleUpRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleUpRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleUpRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleUpRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCircleUpRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowCircleUpRightIcon.displayName = 'ArrowCircleUpRightIcon';

export { ArrowCircleUpRightIcon };
