import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullCircleLeftIcon as ChevronFullCircleLeftIconRegular } from './chevron-full-circle-left';
import { ChevronFullCircleLeftIconBold } from './chevron-full-circle-left-bold';
import { ChevronFullCircleLeftIconFilled } from './chevron-full-circle-left-filled';
import { ChevronFullCircleLeftIconFilltone } from './chevron-full-circle-left-filltone';
import { ChevronFullCircleLeftIconLinetone } from './chevron-full-circle-left-linetone';

export interface ChevronFullCircleLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullCircleLeftIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullCircleLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullCircleLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullCircleLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullCircleLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullCircleLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullCircleLeftIcon.displayName = 'ChevronFullCircleLeftIcon';

export { ChevronFullCircleLeftIcon };
