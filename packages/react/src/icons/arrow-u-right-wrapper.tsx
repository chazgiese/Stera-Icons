import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowURightIcon as RegularArrowURightIcon } from './arrow-u-right';
import { ArrowURightIconBold } from './arrow-u-right-bold';
import { ArrowURightIconFilled } from './arrow-u-right-filled';
import { ArrowURightIconFilltone } from './arrow-u-right-filltone';
import { ArrowURightIconLinetone } from './arrow-u-right-linetone';

export interface ArrowURightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowURightIcon = memo(forwardRef<SVGSVGElement, ArrowURightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowURightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowURightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowURightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowURightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowURightIcon ref={ref} {...props} />;
  }
}));

ArrowURightIcon.displayName = 'ArrowURightIcon';

export { ArrowURightIcon };
