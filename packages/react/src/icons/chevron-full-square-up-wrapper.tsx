import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullSquareUpIcon as ChevronFullSquareUpIconRegular } from './chevron-full-square-up';
import { ChevronFullSquareUpIconBold } from './chevron-full-square-up-bold';
import { ChevronFullSquareUpIconFilled } from './chevron-full-square-up-filled';
import { ChevronFullSquareUpIconFilltone } from './chevron-full-square-up-filltone';
import { ChevronFullSquareUpIconLinetone } from './chevron-full-square-up-linetone';

export interface ChevronFullSquareUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullSquareUpIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullSquareUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullSquareUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullSquareUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullSquareUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullSquareUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullSquareUpIcon.displayName = 'ChevronFullSquareUpIcon';

export { ChevronFullSquareUpIcon };
