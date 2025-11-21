import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DatabaseIcon as RegularDatabaseIcon } from './database';
import { DatabaseIconBold } from './database-bold';
import { DatabaseIconFilled } from './database-filled';
import { DatabaseIconFilltone } from './database-filltone';
import { DatabaseIconLinetone } from './database-linetone';

export interface DatabaseIconProps extends IconProps {
  variant?: IconVariant;
}

const DatabaseIcon = memo(forwardRef<SVGSVGElement, DatabaseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DatabaseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DatabaseIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DatabaseIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DatabaseIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDatabaseIcon ref={ref} {...props} />;
  }
}));

DatabaseIcon.displayName = 'DatabaseIcon';

export { DatabaseIcon };
