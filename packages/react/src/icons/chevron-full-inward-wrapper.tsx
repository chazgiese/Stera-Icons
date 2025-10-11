import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullInwardIcon as ChevronFullInwardIconRegular } from './chevron-full-inward';
import { ChevronFullInwardIconBold } from './chevron-full-inward-bold';
import { ChevronFullInwardIconFilled } from './chevron-full-inward-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullInwardIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullInwardIcon = memo(forwardRef<SVGSVGElement, ChevronFullInwardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullInwardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullInwardIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullInwardIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullInwardIcon.displayName = 'ChevronFullInwardIcon';

export { ChevronFullInwardIcon };
