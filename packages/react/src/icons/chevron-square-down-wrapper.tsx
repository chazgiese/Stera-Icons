import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareDownIcon as ChevronSquareDownIconRegular } from './chevron-square-down';
import { ChevronSquareDownIconBold } from './chevron-square-down-bold';
import { ChevronSquareDownIconFilled } from './chevron-square-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronSquareDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronSquareDownIcon = memo(forwardRef<SVGSVGElement, ChevronSquareDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronSquareDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronSquareDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronSquareDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronSquareDownIcon.displayName = 'ChevronSquareDownIcon';

export { ChevronSquareDownIcon };
