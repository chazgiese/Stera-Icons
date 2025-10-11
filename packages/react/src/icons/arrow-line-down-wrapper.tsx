import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineDownIcon as ArrowLineDownIconRegular } from './arrow-line-down';
import { ArrowLineDownIconBold } from './arrow-line-down-bold';
import { ArrowLineDownIconFilled } from './arrow-line-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowLineDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLineDownIcon = memo(forwardRef<SVGSVGElement, ArrowLineDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLineDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLineDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLineDownIconRegular ref={ref} {...props} />;
  }
}));

ArrowLineDownIcon.displayName = 'ArrowLineDownIcon';

export { ArrowLineDownIcon };
