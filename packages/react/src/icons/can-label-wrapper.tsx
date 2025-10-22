import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CanLabelIcon as RegularCanLabelIcon } from './can-label';
import { CanLabelIconBold } from './can-label-bold';
import { CanLabelIconFilled } from './can-label-filled';
import { CanLabelIconFilltone } from './can-label-filltone';
import { CanLabelIconLinetone } from './can-label-linetone';

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
    case 'filltone':
      return <CanLabelIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CanLabelIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCanLabelIcon ref={ref} {...props} />;
  }
}));

CanLabelIcon.displayName = 'CanLabelIcon';

export { CanLabelIcon };
