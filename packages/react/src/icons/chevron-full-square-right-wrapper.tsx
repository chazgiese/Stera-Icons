import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullSquareRightIcon as ChevronFullSquareRightIconRegular } from './chevron-full-square-right';
import { ChevronFullSquareRightIconBold } from './chevron-full-square-right-bold';
import { ChevronFullSquareRightIconFilled } from './chevron-full-square-right-filled';
import { ChevronFullSquareRightIconFilltone } from './chevron-full-square-right-filltone';
import { ChevronFullSquareRightIconLinetone } from './chevron-full-square-right-linetone';

export interface ChevronFullSquareRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullSquareRightIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullSquareRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullSquareRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullSquareRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullSquareRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullSquareRightIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullSquareRightIcon.displayName = 'ChevronFullSquareRightIcon';

export { ChevronFullSquareRightIcon };
