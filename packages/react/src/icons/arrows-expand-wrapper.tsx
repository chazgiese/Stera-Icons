import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsExpandIcon as ArrowsExpandIconRegular } from './arrows-expand';
import { ArrowsExpandIconBold } from './arrows-expand-bold';
import { ArrowsExpandIconFilled } from './arrows-expand-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowsExpandIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowsExpandIcon = memo(forwardRef<SVGSVGElement, ArrowsExpandIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowsExpandIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowsExpandIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowsExpandIconRegular ref={ref} {...props} />;
  }
}));

ArrowsExpandIcon.displayName = 'ArrowsExpandIcon';

export { ArrowsExpandIcon };
