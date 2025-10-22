import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronDownIcon as RegularChevronDownIcon } from './chevron-down';
import { ChevronDownIconBold } from './chevron-down-bold';
import { ChevronDownIconFilled } from './chevron-down-filled';
import { ChevronDownIconFilltone } from './chevron-down-filltone';
import { ChevronDownIconLinetone } from './chevron-down-linetone';

export interface ChevronDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronDownIcon = memo(forwardRef<SVGSVGElement, ChevronDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronDownIcon ref={ref} {...props} />;
  }
}));

ChevronDownIcon.displayName = 'ChevronDownIcon';

export { ChevronDownIcon };
