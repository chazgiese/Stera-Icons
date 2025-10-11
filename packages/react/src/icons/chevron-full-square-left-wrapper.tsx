import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareLeftIcon as ChevronFullSquareLeftIconRegular } from './chevron-full-square-left';
import { ChevronFullSquareLeftIconBold } from './chevron-full-square-left-bold';
import { ChevronFullSquareLeftIconFilled } from './chevron-full-square-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullSquareLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullSquareLeftIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullSquareLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullSquareLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullSquareLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullSquareLeftIcon.displayName = 'ChevronFullSquareLeftIcon';

export { ChevronFullSquareLeftIcon };
