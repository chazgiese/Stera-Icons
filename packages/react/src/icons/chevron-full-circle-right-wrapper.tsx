import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleRightIcon as ChevronFullCircleRightIconRegular } from './chevron-full-circle-right';
import { ChevronFullCircleRightIconBold } from './chevron-full-circle-right-bold';
import { ChevronFullCircleRightIconFilled } from './chevron-full-circle-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullCircleRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullCircleRightIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullCircleRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullCircleRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullCircleRightIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullCircleRightIcon.displayName = 'ChevronFullCircleRightIcon';

export { ChevronFullCircleRightIcon };
