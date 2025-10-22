import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullRightIcon as RegularChevronFullRightIcon } from './chevron-full-right';
import { ChevronFullRightIconBold } from './chevron-full-right-bold';
import { ChevronFullRightIconFilled } from './chevron-full-right-filled';
import { ChevronFullRightIconFilltone } from './chevron-full-right-filltone';
import { ChevronFullRightIconLinetone } from './chevron-full-right-linetone';

export interface ChevronFullRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullRightIcon = memo(forwardRef<SVGSVGElement, ChevronFullRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronFullRightIcon ref={ref} {...props} />;
  }
}));

ChevronFullRightIcon.displayName = 'ChevronFullRightIcon';

export { ChevronFullRightIcon };
