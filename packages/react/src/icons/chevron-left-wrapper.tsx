import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronLeftIcon as ChevronLeftIconRegular } from './chevron-left';
import { ChevronLeftIconBold } from './chevron-left-bold';
import { ChevronLeftIconFilled } from './chevron-left-filled';
import { ChevronLeftIconFilltone } from './chevron-left-filltone';
import { ChevronLeftIconLinetone } from './chevron-left-linetone';

export interface ChevronLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronLeftIcon = memo(forwardRef<SVGSVGElement, ChevronLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export { ChevronLeftIcon };
