import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleDownIcon as ChevronCircleDownIconRegular } from './chevron-circle-down';
import { ChevronCircleDownIconBold } from './chevron-circle-down-bold';
import { ChevronCircleDownIconFilled } from './chevron-circle-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronCircleDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronCircleDownIcon = memo(forwardRef<SVGSVGElement, ChevronCircleDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronCircleDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronCircleDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronCircleDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronCircleDownIcon.displayName = 'ChevronCircleDownIcon';

export { ChevronCircleDownIcon };
