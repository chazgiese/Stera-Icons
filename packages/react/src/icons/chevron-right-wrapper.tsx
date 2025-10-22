import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronRightIcon as ChevronRightIconRegular } from './chevron-right';
import { ChevronRightIconBold } from './chevron-right-bold';
import { ChevronRightIconFilled } from './chevron-right-filled';
import { ChevronRightIconFilltone } from './chevron-right-filltone';
import { ChevronRightIconLinetone } from './chevron-right-linetone';

export interface ChevronRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronRightIcon = memo(forwardRef<SVGSVGElement, ChevronRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronRightIconRegular ref={ref} {...props} />;
  }
}));

ChevronRightIcon.displayName = 'ChevronRightIcon';

export { ChevronRightIcon };
