import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowsUpDownIcon as RegularArrowsUpDownIcon } from './arrows-up-down';
import { ArrowsUpDownIconBold } from './arrows-up-down-bold';
import { ArrowsUpDownIconFilled } from './arrows-up-down-filled';
import { ArrowsUpDownIconFilltone } from './arrows-up-down-filltone';
import { ArrowsUpDownIconLinetone } from './arrows-up-down-linetone';

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
    case 'filltone':
      return <ArrowsUpDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowsUpDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowsUpDownIcon ref={ref} {...props} />;
  }
}));

ArrowsUpDownIcon.displayName = 'ArrowsUpDownIcon';

export { ArrowsUpDownIcon };
