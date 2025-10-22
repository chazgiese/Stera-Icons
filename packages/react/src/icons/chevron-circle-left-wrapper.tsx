import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronCircleLeftIcon as RegularChevronCircleLeftIcon } from './chevron-circle-left';
import { ChevronCircleLeftIconBold } from './chevron-circle-left-bold';
import { ChevronCircleLeftIconFilled } from './chevron-circle-left-filled';
import { ChevronCircleLeftIconFilltone } from './chevron-circle-left-filltone';
import { ChevronCircleLeftIconLinetone } from './chevron-circle-left-linetone';

export interface ChevronCircleLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronCircleLeftIcon = memo(forwardRef<SVGSVGElement, ChevronCircleLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronCircleLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronCircleLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronCircleLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronCircleLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronCircleLeftIcon ref={ref} {...props} />;
  }
}));

ChevronCircleLeftIcon.displayName = 'ChevronCircleLeftIcon';

export { ChevronCircleLeftIcon };
