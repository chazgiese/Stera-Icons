import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleDownRightIcon as ArrowCircleDownRightIconRegular } from './arrow-circle-down-right';
import { ArrowCircleDownRightIconBold } from './arrow-circle-down-right-bold';
import { ArrowCircleDownRightIconFilled } from './arrow-circle-down-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowCircleDownRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleDownRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleDownRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleDownRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCircleDownRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowCircleDownRightIcon.displayName = 'ArrowCircleDownRightIcon';

export { ArrowCircleDownRightIcon };
