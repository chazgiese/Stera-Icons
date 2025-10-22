import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowLeftIcon as ArrowLeftIconRegular } from './arrow-left';
import { ArrowLeftIconBold } from './arrow-left-bold';
import { ArrowLeftIconFilled } from './arrow-left-filled';
import { ArrowLeftIconFilltone } from './arrow-left-filltone';
import { ArrowLeftIconLinetone } from './arrow-left-linetone';

export interface ArrowLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLeftIcon = memo(forwardRef<SVGSVGElement, ArrowLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export { ArrowLeftIcon };
