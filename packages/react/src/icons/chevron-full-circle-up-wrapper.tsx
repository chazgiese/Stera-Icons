import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronFullCircleUpIcon as RegularChevronFullCircleUpIcon } from './chevron-full-circle-up';
import { ChevronFullCircleUpIconBold } from './chevron-full-circle-up-bold';
import { ChevronFullCircleUpIconFilled } from './chevron-full-circle-up-filled';
import { ChevronFullCircleUpIconFilltone } from './chevron-full-circle-up-filltone';
import { ChevronFullCircleUpIconLinetone } from './chevron-full-circle-up-linetone';

export interface ChevronFullCircleUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronFullCircleUpIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronFullCircleUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronFullCircleUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronFullCircleUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronFullCircleUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronFullCircleUpIcon ref={ref} {...props} />;
  }
}));

ChevronFullCircleUpIcon.displayName = 'ChevronFullCircleUpIcon';

export { ChevronFullCircleUpIcon };
