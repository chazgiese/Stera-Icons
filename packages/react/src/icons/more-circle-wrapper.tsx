import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoreCircleIcon as RegularMoreCircleIcon } from './more-circle';
import { MoreCircleIconBold } from './more-circle-bold';
import { MoreCircleIconFilled } from './more-circle-filled';
import { MoreCircleIconFilltone } from './more-circle-filltone';
import { MoreCircleIconLinetone } from './more-circle-linetone';

export interface MoreCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreCircleIcon = memo(forwardRef<SVGSVGElement, MoreCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MoreCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoreCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMoreCircleIcon ref={ref} {...props} />;
  }
}));

MoreCircleIcon.displayName = 'MoreCircleIcon';

export { MoreCircleIcon };
