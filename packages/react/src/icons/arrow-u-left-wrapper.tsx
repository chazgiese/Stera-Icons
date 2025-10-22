import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowULeftIcon as RegularArrowULeftIcon } from './arrow-u-left';
import { ArrowULeftIconBold } from './arrow-u-left-bold';
import { ArrowULeftIconFilled } from './arrow-u-left-filled';
import { ArrowULeftIconFilltone } from './arrow-u-left-filltone';
import { ArrowULeftIconLinetone } from './arrow-u-left-linetone';

export interface ArrowULeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowULeftIcon = memo(forwardRef<SVGSVGElement, ArrowULeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowULeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowULeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowULeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowULeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowULeftIcon ref={ref} {...props} />;
  }
}));

ArrowULeftIcon.displayName = 'ArrowULeftIcon';

export { ArrowULeftIcon };
