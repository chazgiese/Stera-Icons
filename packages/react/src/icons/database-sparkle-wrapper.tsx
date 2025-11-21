import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DatabaseSparkleIcon as RegularDatabaseSparkleIcon } from './database-sparkle';
import { DatabaseSparkleIconBold } from './database-sparkle-bold';
import { DatabaseSparkleIconFilled } from './database-sparkle-filled';
import { DatabaseSparkleIconFilltone } from './database-sparkle-filltone';
import { DatabaseSparkleIconLinetone } from './database-sparkle-linetone';

export interface DatabaseSparkleIconProps extends IconProps {
  variant?: IconVariant;
}

const DatabaseSparkleIcon = memo(forwardRef<SVGSVGElement, DatabaseSparkleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DatabaseSparkleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DatabaseSparkleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DatabaseSparkleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DatabaseSparkleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDatabaseSparkleIcon ref={ref} {...props} />;
  }
}));

DatabaseSparkleIcon.displayName = 'DatabaseSparkleIcon';

export { DatabaseSparkleIcon };
