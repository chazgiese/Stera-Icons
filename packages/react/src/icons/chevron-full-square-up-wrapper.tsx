import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareUpIcon as ChevronFullSquareUpIconRegular } from './chevron-full-square-up';
import { ChevronFullSquareUpIconBold } from './chevron-full-square-up-bold';
import { ChevronFullSquareUpIconFilled } from './chevron-full-square-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullSquareUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullSquareUpIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullSquareUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullSquareUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullSquareUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullSquareUpIcon.displayName = 'ChevronFullSquareUpIcon';

export { ChevronFullSquareUpIcon };
