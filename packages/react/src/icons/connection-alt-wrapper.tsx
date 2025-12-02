import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ConnectionAltIcon as RegularConnectionAltIcon } from './connection-alt';
import { ConnectionAltIconBold } from './connection-alt-bold';
import { ConnectionAltIconFilled } from './connection-alt-filled';
import { ConnectionAltIconFilltone } from './connection-alt-filltone';
import { ConnectionAltIconLinetone } from './connection-alt-linetone';

export interface ConnectionAltIconProps extends IconProps {
  variant?: IconVariant;
}

const ConnectionAltIcon = memo(forwardRef<SVGSVGElement, ConnectionAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ConnectionAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ConnectionAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ConnectionAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ConnectionAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularConnectionAltIcon ref={ref} {...props} />;
  }
}));

ConnectionAltIcon.displayName = 'ConnectionAltIcon';

export { ConnectionAltIcon };
