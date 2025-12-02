import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DatabasePlusIcon as RegularDatabasePlusIcon } from './database-plus';
import { DatabasePlusIconBold } from './database-plus-bold';
import { DatabasePlusIconFilled } from './database-plus-filled';
import { DatabasePlusIconFilltone } from './database-plus-filltone';
import { DatabasePlusIconLinetone } from './database-plus-linetone';

export interface DatabasePlusIconProps extends IconProps {
  variant?: IconVariant;
}

const DatabasePlusIcon = memo(forwardRef<SVGSVGElement, DatabasePlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DatabasePlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DatabasePlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DatabasePlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DatabasePlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDatabasePlusIcon ref={ref} {...props} />;
  }
}));

DatabasePlusIcon.displayName = 'DatabasePlusIcon';

export { DatabasePlusIcon };
