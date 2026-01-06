import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabaseXIcon as RegularDatabaseXIcon } from './database-x';
import { DatabaseXIconDuotone as DatabaseXIconDuotone } from './database-x-duotone';
import { DatabaseXIconBold as DatabaseXIconBold } from './database-x-bold';
import { DatabaseXIconBoldDuotone as DatabaseXIconBoldDuotone } from './database-x-bold-duotone';
import { DatabaseXIconFill as DatabaseXIconFill } from './database-x-fill';
import { DatabaseXIconFillDuotone as DatabaseXIconFillDuotone } from './database-x-fill-duotone';

export interface DatabaseXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DatabaseXIcon = memo(forwardRef<SVGSVGElement, DatabaseXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabaseXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DatabaseXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DatabaseXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DatabaseXIconFill ref={ref} {...props} />;
  if (duotone) return <DatabaseXIconDuotone ref={ref} {...props} />;
  return <RegularDatabaseXIcon ref={ref} {...props} />;
}));

DatabaseXIcon.displayName = 'DatabaseXIcon';

export { DatabaseXIcon };
