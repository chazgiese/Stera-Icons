import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { XSquareIcon as RegularXSquareIcon } from './x-square';
import { XSquareIconBold } from './x-square-bold';
import { XSquareIconFilled } from './x-square-filled';
import { XSquareIconFilltone } from './x-square-filltone';
import { XSquareIconLinetone } from './x-square-linetone';

export interface XSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const XSquareIcon = memo(forwardRef<SVGSVGElement, XSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <XSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <XSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <XSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <XSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularXSquareIcon ref={ref} {...props} />;
  }
}));

XSquareIcon.displayName = 'XSquareIcon';

export { XSquareIcon };
