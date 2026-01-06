import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabaseIcon as RegularDatabaseIcon } from './database';
import { DatabaseIconDuotone as DatabaseIconDuotone } from './database-duotone';
import { DatabaseIconBold as DatabaseIconBold } from './database-bold';
import { DatabaseIconBoldDuotone as DatabaseIconBoldDuotone } from './database-bold-duotone';
import { DatabaseIconFill as DatabaseIconFill } from './database-fill';
import { DatabaseIconFillDuotone as DatabaseIconFillDuotone } from './database-fill-duotone';

export interface DatabaseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DatabaseIcon = memo(forwardRef<SVGSVGElement, DatabaseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabaseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DatabaseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DatabaseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DatabaseIconFill ref={ref} {...props} />;
  if (duotone) return <DatabaseIconDuotone ref={ref} {...props} />;
  return <RegularDatabaseIcon ref={ref} {...props} />;
}));

DatabaseIcon.displayName = 'DatabaseIcon';

export { DatabaseIcon };
