import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowRightIcon as ArrowRightIconRegular } from './arrow-right';
import { ArrowRightIconBold } from './arrow-right-bold';
import { ArrowRightIconFilled } from './arrow-right-filled';
import { ArrowRightIconFilltone } from './arrow-right-filltone';
import { ArrowRightIconLinetone } from './arrow-right-linetone';

export interface ArrowRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowRightIcon = memo(forwardRef<SVGSVGElement, ArrowRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowRightIcon.displayName = 'ArrowRightIcon';

export { ArrowRightIcon };
