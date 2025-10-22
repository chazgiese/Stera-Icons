import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowDownLeftIcon as ArrowDownLeftIconRegular } from './arrow-down-left';
import { ArrowDownLeftIconBold } from './arrow-down-left-bold';
import { ArrowDownLeftIconFilled } from './arrow-down-left-filled';
import { ArrowDownLeftIconFilltone } from './arrow-down-left-filltone';
import { ArrowDownLeftIconLinetone } from './arrow-down-left-linetone';

export interface ArrowDownLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowDownLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowDownLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowDownLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowDownLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowDownLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowDownLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowDownLeftIcon.displayName = 'ArrowDownLeftIcon';

export { ArrowDownLeftIcon };
