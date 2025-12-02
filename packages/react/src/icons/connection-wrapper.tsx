import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ConnectionIcon as RegularConnectionIcon } from './connection';
import { ConnectionIconBold } from './connection-bold';
import { ConnectionIconFilled } from './connection-filled';
import { ConnectionIconFilltone } from './connection-filltone';
import { ConnectionIconLinetone } from './connection-linetone';

export interface ConnectionIconProps extends IconProps {
  variant?: IconVariant;
}

const ConnectionIcon = memo(forwardRef<SVGSVGElement, ConnectionIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ConnectionIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ConnectionIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ConnectionIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ConnectionIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularConnectionIcon ref={ref} {...props} />;
  }
}));

ConnectionIcon.displayName = 'ConnectionIcon';

export { ConnectionIcon };
