import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsCollapseIcon as ArrowsCollapseIconRegular } from './arrows-collapse';
import { ArrowsCollapseIconBold } from './arrows-collapse-bold';
import { ArrowsCollapseIconFilled } from './arrows-collapse-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowsCollapseIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowsCollapseIcon = memo(forwardRef<SVGSVGElement, ArrowsCollapseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowsCollapseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowsCollapseIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowsCollapseIconRegular ref={ref} {...props} />;
  }
}));

ArrowsCollapseIcon.displayName = 'ArrowsCollapseIcon';

export { ArrowsCollapseIcon };
