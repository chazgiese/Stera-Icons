import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronLeftIcon as ChevronLeftIconRegular } from './chevron-left';
import { ChevronLeftIconBold } from './chevron-left-bold';
import { ChevronLeftIconFilled } from './chevron-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronLeftIcon = memo(forwardRef<SVGSVGElement, ChevronLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export { ChevronLeftIcon };
