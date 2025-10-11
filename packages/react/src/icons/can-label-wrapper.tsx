import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CanLabelIcon as CanLabelIconRegular } from './can-label';
import { CanLabelIconBold } from './can-label-bold';
import { CanLabelIconFilled } from './can-label-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CanLabelIconProps extends IconProps {
  variant?: IconVariant;
}

const CanLabelIcon = memo(forwardRef<SVGSVGElement, CanLabelIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CanLabelIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CanLabelIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CanLabelIconRegular ref={ref} {...props} />;
  }
}));

CanLabelIcon.displayName = 'CanLabelIcon';

export { CanLabelIcon };
