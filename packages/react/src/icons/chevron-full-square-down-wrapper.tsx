import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareDownIcon as ChevronFullSquareDownIconRegular } from './chevron-full-square-down';
import { ChevronFullSquareDownIconBold } from './chevron-full-square-down-bold';
import { ChevronFullSquareDownIconFilled } from './chevron-full-square-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullSquareDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullSquareDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullSquareDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullSquareDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullSquareDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullSquareDownIcon.displayName = 'ChevronFullSquareDownIcon';

export { ChevronFullSquareDownIcon };
