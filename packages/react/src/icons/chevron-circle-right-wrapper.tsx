import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleRightIcon as ChevronCircleRightIconRegular } from './chevron-circle-right';
import { ChevronCircleRightIconBold } from './chevron-circle-right-bold';
import { ChevronCircleRightIconFilled } from './chevron-circle-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronCircleRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronCircleRightIcon = memo(forwardRef<SVGSVGElement, ChevronCircleRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronCircleRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronCircleRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronCircleRightIconRegular ref={ref} {...props} />;
  }
}));

ChevronCircleRightIcon.displayName = 'ChevronCircleRightIcon';

export { ChevronCircleRightIcon };
