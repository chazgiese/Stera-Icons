import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronCircleDownIcon as RegularChevronCircleDownIcon } from './chevron-circle-down';
import { ChevronCircleDownIconBold } from './chevron-circle-down-bold';
import { ChevronCircleDownIconFilled } from './chevron-circle-down-filled';
import { ChevronCircleDownIconFilltone } from './chevron-circle-down-filltone';
import { ChevronCircleDownIconLinetone } from './chevron-circle-down-linetone';

export interface ChevronCircleDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronCircleDownIcon = memo(forwardRef<SVGSVGElement, ChevronCircleDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronCircleDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronCircleDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronCircleDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronCircleDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronCircleDownIcon ref={ref} {...props} />;
  }
}));

ChevronCircleDownIcon.displayName = 'ChevronCircleDownIcon';

export { ChevronCircleDownIcon };
