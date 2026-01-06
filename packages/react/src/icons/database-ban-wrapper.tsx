import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabaseBanIcon as RegularDatabaseBanIcon } from './database-ban';
import { DatabaseBanIconDuotone as DatabaseBanIconDuotone } from './database-ban-duotone';
import { DatabaseBanIconBold as DatabaseBanIconBold } from './database-ban-bold';
import { DatabaseBanIconBoldDuotone as DatabaseBanIconBoldDuotone } from './database-ban-bold-duotone';
import { DatabaseBanIconFill as DatabaseBanIconFill } from './database-ban-fill';
import { DatabaseBanIconFillDuotone as DatabaseBanIconFillDuotone } from './database-ban-fill-duotone';

export interface DatabaseBanIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DatabaseBanIcon = memo(forwardRef<SVGSVGElement, DatabaseBanIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabaseBanIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DatabaseBanIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DatabaseBanIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DatabaseBanIconFill ref={ref} {...props} />;
  if (duotone) return <DatabaseBanIconDuotone ref={ref} {...props} />;
  return <RegularDatabaseBanIcon ref={ref} {...props} />;
}));

DatabaseBanIcon.displayName = 'DatabaseBanIcon';

export { DatabaseBanIcon };
