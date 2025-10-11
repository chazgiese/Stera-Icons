import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleLeftIcon as ArrowCircleLeftIconRegular } from './arrow-circle-left';
import { ArrowCircleLeftIconBold } from './arrow-circle-left-bold';
import { ArrowCircleLeftIconFilled } from './arrow-circle-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowCircleLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCircleLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCircleLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowCircleLeftIcon.displayName = 'ArrowCircleLeftIcon';

export { ArrowCircleLeftIcon };
