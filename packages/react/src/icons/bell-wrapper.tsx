import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellIcon as BellIconRegular } from './bell';
import { BellIconBold } from './bell-bold';
import { BellIconFilled } from './bell-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BellIconProps extends IconProps {
  variant?: IconVariant;
}

const BellIcon = memo(forwardRef<SVGSVGElement, BellIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BellIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BellIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BellIconRegular ref={ref} {...props} />;
  }
}));

BellIcon.displayName = 'BellIcon';

export { BellIcon };
