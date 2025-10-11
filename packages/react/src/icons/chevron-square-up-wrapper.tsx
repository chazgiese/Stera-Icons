import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareUpIcon as ChevronSquareUpIconRegular } from './chevron-square-up';
import { ChevronSquareUpIconBold } from './chevron-square-up-bold';
import { ChevronSquareUpIconFilled } from './chevron-square-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronSquareUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronSquareUpIcon = memo(forwardRef<SVGSVGElement, ChevronSquareUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronSquareUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronSquareUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronSquareUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronSquareUpIcon.displayName = 'ChevronSquareUpIcon';

export { ChevronSquareUpIcon };
