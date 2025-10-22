import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowURightTopIcon as ArrowURightTopIconRegular } from './arrow-u-right-top';
import { ArrowURightTopIconBold } from './arrow-u-right-top-bold';
import { ArrowURightTopIconFilled } from './arrow-u-right-top-filled';
import { ArrowURightTopIconFilltone } from './arrow-u-right-top-filltone';
import { ArrowURightTopIconLinetone } from './arrow-u-right-top-linetone';

export interface ArrowURightTopIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowURightTopIcon = memo(forwardRef<SVGSVGElement, ArrowURightTopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowURightTopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowURightTopIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowURightTopIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowURightTopIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowURightTopIconRegular ref={ref} {...props} />;
  }
}));

ArrowURightTopIcon.displayName = 'ArrowURightTopIcon';

export { ArrowURightTopIcon };
