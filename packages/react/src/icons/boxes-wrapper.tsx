import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BoxesIcon as RegularBoxesIcon } from './boxes';
import { BoxesIconBold } from './boxes-bold';
import { BoxesIconFilled } from './boxes-filled';
import { BoxesIconFilltone } from './boxes-filltone';
import { BoxesIconLinetone } from './boxes-linetone';

export interface BoxesIconProps extends IconProps {
  variant?: IconVariant;
}

const BoxesIcon = memo(forwardRef<SVGSVGElement, BoxesIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BoxesIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BoxesIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BoxesIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BoxesIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBoxesIcon ref={ref} {...props} />;
  }
}));

BoxesIcon.displayName = 'BoxesIcon';

export { BoxesIcon };
