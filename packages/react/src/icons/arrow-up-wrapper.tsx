import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpIcon as ArrowUpIconRegular } from './arrow-up';
import { ArrowUpIconBold } from './arrow-up-bold';
import { ArrowUpIconFilled } from './arrow-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpIcon = memo(forwardRef<SVGSVGElement, ArrowUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowUpIconRegular ref={ref} {...props} />;
  }
}));

ArrowUpIcon.displayName = 'ArrowUpIcon';

export { ArrowUpIcon };
