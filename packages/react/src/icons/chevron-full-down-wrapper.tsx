import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullDownIcon as ChevronFullDownIconRegular } from './chevron-full-down';
import { ChevronFullDownIconBold } from './chevron-full-down-bold';
import { ChevronFullDownIconFilled } from './chevron-full-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullDownIcon.displayName = 'ChevronFullDownIcon';

export { ChevronFullDownIcon };
