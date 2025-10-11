import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullOutwardIcon as ChevronFullOutwardIconRegular } from './chevron-full-outward';
import { ChevronFullOutwardIconBold } from './chevron-full-outward-bold';
import { ChevronFullOutwardIconFilled } from './chevron-full-outward-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullOutwardIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullOutwardIcon = memo(forwardRef<SVGSVGElement, ChevronFullOutwardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullOutwardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullOutwardIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullOutwardIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullOutwardIcon.displayName = 'ChevronFullOutwardIcon';

export { ChevronFullOutwardIcon };
