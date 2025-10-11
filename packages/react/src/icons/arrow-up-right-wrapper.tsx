import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpRightIcon as ArrowUpRightIconRegular } from './arrow-up-right';
import { ArrowUpRightIconBold } from './arrow-up-right-bold';
import { ArrowUpRightIconFilled } from './arrow-up-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowUpRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowUpRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowUpRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowUpRightIcon.displayName = 'ArrowUpRightIcon';

export { ArrowUpRightIcon };
