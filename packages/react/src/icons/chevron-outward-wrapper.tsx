import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronOutwardIcon as ChevronOutwardIconRegular } from './chevron-outward';
import { ChevronOutwardIconBold } from './chevron-outward-bold';
import { ChevronOutwardIconFilled } from './chevron-outward-filled';
import { ChevronOutwardIconFilltone } from './chevron-outward-filltone';
import { ChevronOutwardIconLinetone } from './chevron-outward-linetone';

export interface ChevronOutwardIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronOutwardIcon = memo(forwardRef<SVGSVGElement, ChevronOutwardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronOutwardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronOutwardIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronOutwardIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronOutwardIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronOutwardIconRegular ref={ref} {...props} />;
  }
}));

ChevronOutwardIcon.displayName = 'ChevronOutwardIcon';

export { ChevronOutwardIcon };
