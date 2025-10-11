import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleDownIcon as ChevronFullCircleDownIconRegular } from './chevron-full-circle-down';
import { ChevronFullCircleDownIconBold } from './chevron-full-circle-down-bold';
import { ChevronFullCircleDownIconFilled } from './chevron-full-circle-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullCircleDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullCircleDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullCircleDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullCircleDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullCircleDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullCircleDownIcon.displayName = 'ChevronFullCircleDownIcon';

export { ChevronFullCircleDownIcon };
