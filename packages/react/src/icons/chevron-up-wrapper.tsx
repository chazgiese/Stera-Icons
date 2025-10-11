import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronUpIcon as ChevronUpIconRegular } from './chevron-up';
import { ChevronUpIconBold } from './chevron-up-bold';
import { ChevronUpIconFilled } from './chevron-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronUpIcon = memo(forwardRef<SVGSVGElement, ChevronUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronUpIcon.displayName = 'ChevronUpIcon';

export { ChevronUpIcon };
