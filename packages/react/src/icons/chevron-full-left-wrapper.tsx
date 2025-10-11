import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullLeftIcon as ChevronFullLeftIconRegular } from './chevron-full-left';
import { ChevronFullLeftIconBold } from './chevron-full-left-bold';
import { ChevronFullLeftIconFilled } from './chevron-full-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullLeftIcon = memo(forwardRef<SVGSVGElement, ChevronFullLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullLeftIcon.displayName = 'ChevronFullLeftIcon';

export { ChevronFullLeftIcon };
