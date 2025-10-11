import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleUpIcon as ChevronFullCircleUpIconRegular } from './chevron-full-circle-up';
import { ChevronFullCircleUpIconBold } from './chevron-full-circle-up-bold';
import { ChevronFullCircleUpIconFilled } from './chevron-full-circle-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullCircleUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullCircleUpIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullCircleUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullCircleUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullCircleUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullCircleUpIcon.displayName = 'ChevronFullCircleUpIcon';

export { ChevronFullCircleUpIcon };
