import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullRightIcon as ChevronFullRightIconRegular } from './chevron-full-right';
import { ChevronFullRightIconBold } from './chevron-full-right-bold';
import { ChevronFullRightIconFilled } from './chevron-full-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullRightIcon = memo(forwardRef<SVGSVGElement, ChevronFullRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullRightIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullRightIcon.displayName = 'ChevronFullRightIcon';

export { ChevronFullRightIcon };
