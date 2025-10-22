import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullOutwardIcon as ChevronFullOutwardIconRegular } from './chevron-full-outward';
import { ChevronFullOutwardIconBold } from './chevron-full-outward-bold';
import { ChevronFullOutwardIconFilled } from './chevron-full-outward-filled';
import { ChevronFullOutwardIconFilltone } from './chevron-full-outward-filltone';
import { ChevronFullOutwardIconLinetone } from './chevron-full-outward-linetone';

export interface ChevronFullOutwardIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullOutwardIcon = memo(forwardRef<SVGSVGElement, ChevronFullOutwardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullOutwardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullOutwardIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullOutwardIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullOutwardIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronFullOutwardIconRegular ref={ref} {...props} />;
  }
}));

ChevronFullOutwardIcon.displayName = 'ChevronFullOutwardIcon';

export { ChevronFullOutwardIcon };
