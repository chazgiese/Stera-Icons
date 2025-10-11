import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleUpIcon as ChevronCircleUpIconRegular } from './chevron-circle-up';
import { ChevronCircleUpIconBold } from './chevron-circle-up-bold';
import { ChevronCircleUpIconFilled } from './chevron-circle-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronCircleUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronCircleUpIcon = memo(forwardRef<SVGSVGElement, ChevronCircleUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronCircleUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronCircleUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronCircleUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronCircleUpIcon.displayName = 'ChevronCircleUpIcon';

export { ChevronCircleUpIcon };
