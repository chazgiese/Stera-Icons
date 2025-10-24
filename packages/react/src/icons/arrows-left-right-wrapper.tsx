import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowsLeftRightIcon as RegularArrowsLeftRightIcon } from './arrows-left-right';
import { ArrowsLeftRightIconBold } from './arrows-left-right-bold';
import { ArrowsLeftRightIconFilled } from './arrows-left-right-filled';
import { ArrowsLeftRightIconFilltone } from './arrows-left-right-filltone';
import { ArrowsLeftRightIconLinetone } from './arrows-left-right-linetone';

export interface ArrowsLeftRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowsLeftRightIcon = memo(forwardRef<SVGSVGElement, ArrowsLeftRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowsLeftRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowsLeftRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowsLeftRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowsLeftRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowsLeftRightIcon ref={ref} {...props} />;
  }
}));

ArrowsLeftRightIcon.displayName = 'ArrowsLeftRightIcon';

export { ArrowsLeftRightIcon };
