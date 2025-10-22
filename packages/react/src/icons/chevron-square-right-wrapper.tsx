import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronSquareRightIcon as RegularChevronSquareRightIcon } from './chevron-square-right';
import { ChevronSquareRightIconBold } from './chevron-square-right-bold';
import { ChevronSquareRightIconFilled } from './chevron-square-right-filled';
import { ChevronSquareRightIconFilltone } from './chevron-square-right-filltone';
import { ChevronSquareRightIconLinetone } from './chevron-square-right-linetone';

export interface ChevronSquareRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronSquareRightIcon = memo(forwardRef<SVGSVGElement, ChevronSquareRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronSquareRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronSquareRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronSquareRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronSquareRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronSquareRightIcon ref={ref} {...props} />;
  }
}));

ChevronSquareRightIcon.displayName = 'ChevronSquareRightIcon';

export { ChevronSquareRightIcon };
