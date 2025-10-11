import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleRightIcon as ArrowCircleRightIconRegular } from './arrow-circle-right';
import { ArrowCircleRightIconBold } from './arrow-circle-right-bold';
import { ArrowCircleRightIconFilled } from './arrow-circle-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowCircleRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCircleRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowCircleRightIcon.displayName = 'ArrowCircleRightIcon';

export { ArrowCircleRightIcon };
