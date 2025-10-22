import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullCircleRightIcon as RegularChevronFullCircleRightIcon } from './chevron-full-circle-right';
import { ChevronFullCircleRightIconBold } from './chevron-full-circle-right-bold';
import { ChevronFullCircleRightIconFilled } from './chevron-full-circle-right-filled';
import { ChevronFullCircleRightIconFilltone } from './chevron-full-circle-right-filltone';
import { ChevronFullCircleRightIconLinetone } from './chevron-full-circle-right-linetone';

export interface ChevronFullCircleRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullCircleRightIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullCircleRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullCircleRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullCircleRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullCircleRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronFullCircleRightIcon ref={ref} {...props} />;
  }
}));

ChevronFullCircleRightIcon.displayName = 'ChevronFullCircleRightIcon';

export { ChevronFullCircleRightIcon };
