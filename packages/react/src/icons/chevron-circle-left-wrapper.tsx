import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleLeftIcon as ChevronCircleLeftIconRegular } from './chevron-circle-left';
import { ChevronCircleLeftIconBold } from './chevron-circle-left-bold';
import { ChevronCircleLeftIconFilled } from './chevron-circle-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronCircleLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronCircleLeftIcon = memo(forwardRef<SVGSVGElement, ChevronCircleLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronCircleLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronCircleLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronCircleLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronCircleLeftIcon.displayName = 'ChevronCircleLeftIcon';

export { ChevronCircleLeftIcon };
