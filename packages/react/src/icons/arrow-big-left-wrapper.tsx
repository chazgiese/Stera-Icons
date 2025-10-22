import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowBigLeftIcon as ArrowBigLeftIconRegular } from './arrow-big-left';
import { ArrowBigLeftIconBold } from './arrow-big-left-bold';
import { ArrowBigLeftIconFilled } from './arrow-big-left-filled';
import { ArrowBigLeftIconFilltone } from './arrow-big-left-filltone';
import { ArrowBigLeftIconLinetone } from './arrow-big-left-linetone';

export interface ArrowBigLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowBigLeftIcon = memo(forwardRef<SVGSVGElement, ArrowBigLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowBigLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowBigLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowBigLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowBigLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowBigLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowBigLeftIcon.displayName = 'ArrowBigLeftIcon';

export { ArrowBigLeftIcon };
