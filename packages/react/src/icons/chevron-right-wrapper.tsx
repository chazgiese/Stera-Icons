import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronRightIcon as ChevronRightIconRegular } from './chevron-right';
import { ChevronRightIconBold } from './chevron-right-bold';
import { ChevronRightIconFilled } from './chevron-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronRightIcon = memo(forwardRef<SVGSVGElement, ChevronRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronRightIconRegular ref={ref} {...props} />;
  }
}));

ChevronRightIcon.displayName = 'ChevronRightIcon';

export { ChevronRightIcon };
