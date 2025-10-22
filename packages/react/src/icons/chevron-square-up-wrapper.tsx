import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronSquareUpIcon as RegularChevronSquareUpIcon } from './chevron-square-up';
import { ChevronSquareUpIconBold } from './chevron-square-up-bold';
import { ChevronSquareUpIconFilled } from './chevron-square-up-filled';
import { ChevronSquareUpIconFilltone } from './chevron-square-up-filltone';
import { ChevronSquareUpIconLinetone } from './chevron-square-up-linetone';

export interface ChevronSquareUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronSquareUpIcon = memo(forwardRef<SVGSVGElement, ChevronSquareUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronSquareUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronSquareUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronSquareUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronSquareUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronSquareUpIcon ref={ref} {...props} />;
  }
}));

ChevronSquareUpIcon.displayName = 'ChevronSquareUpIcon';

export { ChevronSquareUpIcon };
