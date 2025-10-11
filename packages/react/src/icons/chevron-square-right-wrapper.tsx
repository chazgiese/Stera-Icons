import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareRightIcon as ChevronSquareRightIconRegular } from './chevron-square-right';
import { ChevronSquareRightIconBold } from './chevron-square-right-bold';
import { ChevronSquareRightIconFilled } from './chevron-square-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronSquareRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronSquareRightIcon = memo(forwardRef<SVGSVGElement, ChevronSquareRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronSquareRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronSquareRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronSquareRightIconRegular ref={ref} {...props} />;
  }
}));

ChevronSquareRightIcon.displayName = 'ChevronSquareRightIcon';

export { ChevronSquareRightIcon };
