import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullSquareLeftIcon as RegularChevronFullSquareLeftIcon } from './chevron-full-square-left';
import { ChevronFullSquareLeftIconBold } from './chevron-full-square-left-bold';
import { ChevronFullSquareLeftIconFilled } from './chevron-full-square-left-filled';
import { ChevronFullSquareLeftIconFilltone } from './chevron-full-square-left-filltone';
import { ChevronFullSquareLeftIconLinetone } from './chevron-full-square-left-linetone';

export interface ChevronFullSquareLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullSquareLeftIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullSquareLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullSquareLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullSquareLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullSquareLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronFullSquareLeftIcon ref={ref} {...props} />;
  }
}));

ChevronFullSquareLeftIcon.displayName = 'ChevronFullSquareLeftIcon';

export { ChevronFullSquareLeftIcon };
