import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowLineLeftIcon as ArrowLineLeftIconRegular } from './arrow-line-left';
import { ArrowLineLeftIconBold } from './arrow-line-left-bold';
import { ArrowLineLeftIconFilled } from './arrow-line-left-filled';
import { ArrowLineLeftIconFilltone } from './arrow-line-left-filltone';
import { ArrowLineLeftIconLinetone } from './arrow-line-left-linetone';

export interface ArrowLineLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLineLeftIcon = memo(forwardRef<SVGSVGElement, ArrowLineLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLineLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLineLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowLineLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowLineLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLineLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowLineLeftIcon.displayName = 'ArrowLineLeftIcon';

export { ArrowLineLeftIcon };
