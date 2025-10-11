import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullUpIcon as ChevronFullUpIconRegular } from './chevron-full-up';
import { ChevronFullUpIconBold } from './chevron-full-up-bold';
import { ChevronFullUpIconFilled } from './chevron-full-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronFullUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullUpIcon = memo(forwardRef<SVGSVGElement, ChevronFullUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullUpIcon.displayName = 'ChevronFullUpIcon';

export { ChevronFullUpIcon };
