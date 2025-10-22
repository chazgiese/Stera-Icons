import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoreIcon as RegularMoreIcon } from './more';
import { MoreIconBold } from './more-bold';
import { MoreIconFilled } from './more-filled';
import { MoreIconFilltone } from './more-filltone';
import { MoreIconLinetone } from './more-linetone';

export interface MoreIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreIcon = memo(forwardRef<SVGSVGElement, MoreIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MoreIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoreIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMoreIcon ref={ref} {...props} />;
  }
}));

MoreIcon.displayName = 'MoreIcon';

export { MoreIcon };
