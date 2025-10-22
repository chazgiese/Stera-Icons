import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullCircleDownIcon as ChevronFullCircleDownIconRegular } from './chevron-full-circle-down';
import { ChevronFullCircleDownIconBold } from './chevron-full-circle-down-bold';
import { ChevronFullCircleDownIconFilled } from './chevron-full-circle-down-filled';
import { ChevronFullCircleDownIconFilltone } from './chevron-full-circle-down-filltone';
import { ChevronFullCircleDownIconLinetone } from './chevron-full-circle-down-linetone';

export interface ChevronFullCircleDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullCircleDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullCircleDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullCircleDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullCircleDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullCircleDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullCircleDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullCircleDownIcon.displayName = 'ChevronFullCircleDownIcon';

export { ChevronFullCircleDownIcon };
