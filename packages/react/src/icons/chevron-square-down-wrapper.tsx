import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronSquareDownIcon as ChevronSquareDownIconRegular } from './chevron-square-down';
import { ChevronSquareDownIconBold } from './chevron-square-down-bold';
import { ChevronSquareDownIconFilled } from './chevron-square-down-filled';
import { ChevronSquareDownIconFilltone } from './chevron-square-down-filltone';
import { ChevronSquareDownIconLinetone } from './chevron-square-down-linetone';

export interface ChevronSquareDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronSquareDownIcon = memo(forwardRef<SVGSVGElement, ChevronSquareDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronSquareDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronSquareDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronSquareDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronSquareDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronSquareDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronSquareDownIcon.displayName = 'ChevronSquareDownIcon';

export { ChevronSquareDownIcon };
