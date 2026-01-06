import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabaseSparkleIcon as RegularDatabaseSparkleIcon } from './database-sparkle';
import { DatabaseSparkleIconDuotone as DatabaseSparkleIconDuotone } from './database-sparkle-duotone';
import { DatabaseSparkleIconBold as DatabaseSparkleIconBold } from './database-sparkle-bold';
import { DatabaseSparkleIconBoldDuotone as DatabaseSparkleIconBoldDuotone } from './database-sparkle-bold-duotone';
import { DatabaseSparkleIconFill as DatabaseSparkleIconFill } from './database-sparkle-fill';
import { DatabaseSparkleIconFillDuotone as DatabaseSparkleIconFillDuotone } from './database-sparkle-fill-duotone';

export interface DatabaseSparkleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DatabaseSparkleIcon = memo(forwardRef<SVGSVGElement, DatabaseSparkleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabaseSparkleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DatabaseSparkleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DatabaseSparkleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DatabaseSparkleIconFill ref={ref} {...props} />;
  if (duotone) return <DatabaseSparkleIconDuotone ref={ref} {...props} />;
  return <RegularDatabaseSparkleIcon ref={ref} {...props} />;
}));

DatabaseSparkleIcon.displayName = 'DatabaseSparkleIcon';

export { DatabaseSparkleIcon };
