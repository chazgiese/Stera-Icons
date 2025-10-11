import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronDownIcon as ChevronDownIconRegular } from './chevron-down';
import { ChevronDownIconBold } from './chevron-down-bold';
import { ChevronDownIconFilled } from './chevron-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronDownIcon = memo(forwardRef<SVGSVGElement, ChevronDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronDownIcon.displayName = 'ChevronDownIcon';

export { ChevronDownIcon };
