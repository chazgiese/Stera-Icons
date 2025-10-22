import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowBigRightIcon as ArrowBigRightIconRegular } from './arrow-big-right';
import { ArrowBigRightIconBold } from './arrow-big-right-bold';
import { ArrowBigRightIconFilled } from './arrow-big-right-filled';
import { ArrowBigRightIconFilltone } from './arrow-big-right-filltone';
import { ArrowBigRightIconLinetone } from './arrow-big-right-linetone';

export interface ArrowBigRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowBigRightIcon = memo(forwardRef<SVGSVGElement, ArrowBigRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowBigRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowBigRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowBigRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowBigRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowBigRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowBigRightIcon.displayName = 'ArrowBigRightIcon';

export { ArrowBigRightIcon };
