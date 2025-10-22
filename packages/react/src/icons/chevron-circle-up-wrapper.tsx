import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronCircleUpIcon as ChevronCircleUpIconRegular } from './chevron-circle-up';
import { ChevronCircleUpIconBold } from './chevron-circle-up-bold';
import { ChevronCircleUpIconFilled } from './chevron-circle-up-filled';
import { ChevronCircleUpIconFilltone } from './chevron-circle-up-filltone';
import { ChevronCircleUpIconLinetone } from './chevron-circle-up-linetone';

export interface ChevronCircleUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronCircleUpIcon = memo(forwardRef<SVGSVGElement, ChevronCircleUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronCircleUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronCircleUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronCircleUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronCircleUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronCircleUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronCircleUpIcon.displayName = 'ChevronCircleUpIcon';

export { ChevronCircleUpIcon };
