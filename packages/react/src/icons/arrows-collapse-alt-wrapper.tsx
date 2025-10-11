import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsCollapseAltIcon as ArrowsCollapseAltIconRegular } from './arrows-collapse-alt';
import { ArrowsCollapseAltIconBold } from './arrows-collapse-alt-bold';
import { ArrowsCollapseAltIconFilled } from './arrows-collapse-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowsCollapseAltIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowsCollapseAltIcon = memo(forwardRef<SVGSVGElement, ArrowsCollapseAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowsCollapseAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowsCollapseAltIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowsCollapseAltIconRegular ref={ref} {...props} />;
  }
}));

ArrowsCollapseAltIcon.displayName = 'ArrowsCollapseAltIcon';

export { ArrowsCollapseAltIcon };
