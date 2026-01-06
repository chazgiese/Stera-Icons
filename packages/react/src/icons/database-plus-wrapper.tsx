import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabasePlusIcon as RegularDatabasePlusIcon } from './database-plus';
import { DatabasePlusIconDuotone as DatabasePlusIconDuotone } from './database-plus-duotone';
import { DatabasePlusIconBold as DatabasePlusIconBold } from './database-plus-bold';
import { DatabasePlusIconBoldDuotone as DatabasePlusIconBoldDuotone } from './database-plus-bold-duotone';
import { DatabasePlusIconFill as DatabasePlusIconFill } from './database-plus-fill';
import { DatabasePlusIconFillDuotone as DatabasePlusIconFillDuotone } from './database-plus-fill-duotone';

export interface DatabasePlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DatabasePlusIcon = memo(forwardRef<SVGSVGElement, DatabasePlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabasePlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DatabasePlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DatabasePlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DatabasePlusIconFill ref={ref} {...props} />;
  if (duotone) return <DatabasePlusIconDuotone ref={ref} {...props} />;
  return <RegularDatabasePlusIcon ref={ref} {...props} />;
}));

DatabasePlusIcon.displayName = 'DatabasePlusIcon';

export { DatabasePlusIcon };
