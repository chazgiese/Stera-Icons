import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullSquareDownIcon as ChevronFullSquareDownIconRegular } from './chevron-full-square-down';
import { ChevronFullSquareDownIconBold } from './chevron-full-square-down-bold';
import { ChevronFullSquareDownIconFilled } from './chevron-full-square-down-filled';
import { ChevronFullSquareDownIconFilltone } from './chevron-full-square-down-filltone';
import { ChevronFullSquareDownIconLinetone } from './chevron-full-square-down-linetone';

export interface ChevronFullSquareDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullSquareDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullSquareDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullSquareDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullSquareDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullSquareDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullSquareDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullSquareDownIcon.displayName = 'ChevronFullSquareDownIcon';

export { ChevronFullSquareDownIcon };
