import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsUpDownIcon as ArrowsUpDownIconRegular } from './arrows-up-down';
import { ArrowsUpDownIconBold } from './arrows-up-down-bold';
import { ArrowsUpDownIconFilled } from './arrows-up-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowsUpDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowsUpDownIcon = memo(forwardRef<SVGSVGElement, ArrowsUpDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowsUpDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowsUpDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowsUpDownIconRegular ref={ref} {...props} />;
  }
}));

ArrowsUpDownIcon.displayName = 'ArrowsUpDownIcon';

export { ArrowsUpDownIcon };
