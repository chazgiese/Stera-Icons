import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullDownIcon as RegularChevronFullDownIcon } from './chevron-full-down';
import { ChevronFullDownIconBold } from './chevron-full-down-bold';
import { ChevronFullDownIconFilled } from './chevron-full-down-filled';
import { ChevronFullDownIconFilltone } from './chevron-full-down-filltone';
import { ChevronFullDownIconLinetone } from './chevron-full-down-linetone';

export interface ChevronFullDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronFullDownIcon ref={ref} {...props} />;
  }
}));

ChevronFullDownIcon.displayName = 'ChevronFullDownIcon';

export { ChevronFullDownIcon };
