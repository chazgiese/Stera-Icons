import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DatabaseXIcon as RegularDatabaseXIcon } from './database-x';
import { DatabaseXIconBold } from './database-x-bold';
import { DatabaseXIconFilled } from './database-x-filled';
import { DatabaseXIconFilltone } from './database-x-filltone';
import { DatabaseXIconLinetone } from './database-x-linetone';

export interface DatabaseXIconProps extends IconProps {
  variant?: IconVariant;
}

const DatabaseXIcon = memo(forwardRef<SVGSVGElement, DatabaseXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DatabaseXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DatabaseXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DatabaseXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DatabaseXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDatabaseXIcon ref={ref} {...props} />;
  }
}));

DatabaseXIcon.displayName = 'DatabaseXIcon';

export { DatabaseXIcon };
