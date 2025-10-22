import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoreSquareIcon as RegularMoreSquareIcon } from './more-square';
import { MoreSquareIconBold } from './more-square-bold';
import { MoreSquareIconFilled } from './more-square-filled';
import { MoreSquareIconFilltone } from './more-square-filltone';
import { MoreSquareIconLinetone } from './more-square-linetone';

export interface MoreSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreSquareIcon = memo(forwardRef<SVGSVGElement, MoreSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MoreSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoreSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMoreSquareIcon ref={ref} {...props} />;
  }
}));

MoreSquareIcon.displayName = 'MoreSquareIcon';

export { MoreSquareIcon };
