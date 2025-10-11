import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareLeftIcon as ChevronSquareLeftIconRegular } from './chevron-square-left';
import { ChevronSquareLeftIconBold } from './chevron-square-left-bold';
import { ChevronSquareLeftIconFilled } from './chevron-square-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronSquareLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronSquareLeftIcon = memo(forwardRef<SVGSVGElement, ChevronSquareLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronSquareLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronSquareLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronSquareLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronSquareLeftIcon.displayName = 'ChevronSquareLeftIcon';

export { ChevronSquareLeftIcon };
