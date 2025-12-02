import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DatabaseBanIcon as RegularDatabaseBanIcon } from './database-ban';
import { DatabaseBanIconBold } from './database-ban-bold';
import { DatabaseBanIconFilled } from './database-ban-filled';
import { DatabaseBanIconFilltone } from './database-ban-filltone';
import { DatabaseBanIconLinetone } from './database-ban-linetone';

export interface DatabaseBanIconProps extends IconProps {
  variant?: IconVariant;
}

const DatabaseBanIcon = memo(forwardRef<SVGSVGElement, DatabaseBanIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DatabaseBanIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DatabaseBanIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DatabaseBanIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DatabaseBanIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDatabaseBanIcon ref={ref} {...props} />;
  }
}));

DatabaseBanIcon.displayName = 'DatabaseBanIcon';

export { DatabaseBanIcon };
