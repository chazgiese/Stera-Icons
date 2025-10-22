import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullInwardIcon as RegularChevronFullInwardIcon } from './chevron-full-inward';
import { ChevronFullInwardIconBold } from './chevron-full-inward-bold';
import { ChevronFullInwardIconFilled } from './chevron-full-inward-filled';
import { ChevronFullInwardIconFilltone } from './chevron-full-inward-filltone';
import { ChevronFullInwardIconLinetone } from './chevron-full-inward-linetone';

export interface ChevronFullInwardIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullInwardIcon = memo(forwardRef<SVGSVGElement, ChevronFullInwardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullInwardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullInwardIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullInwardIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullInwardIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronFullInwardIcon ref={ref} {...props} />;
  }
}));

ChevronFullInwardIcon.displayName = 'ChevronFullInwardIcon';

export { ChevronFullInwardIcon };
