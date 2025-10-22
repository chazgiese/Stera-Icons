import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronCircleRightIcon as RegularChevronCircleRightIcon } from './chevron-circle-right';
import { ChevronCircleRightIconBold } from './chevron-circle-right-bold';
import { ChevronCircleRightIconFilled } from './chevron-circle-right-filled';
import { ChevronCircleRightIconFilltone } from './chevron-circle-right-filltone';
import { ChevronCircleRightIconLinetone } from './chevron-circle-right-linetone';

export interface ChevronCircleRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronCircleRightIcon = memo(forwardRef<SVGSVGElement, ChevronCircleRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronCircleRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronCircleRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronCircleRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronCircleRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronCircleRightIcon ref={ref} {...props} />;
  }
}));

ChevronCircleRightIcon.displayName = 'ChevronCircleRightIcon';

export { ChevronCircleRightIcon };
