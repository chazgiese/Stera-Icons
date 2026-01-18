import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabaseRegular } from './DatabaseRegular';
import { DatabaseRegularDuotone } from './DatabaseRegularDuotone';
import { DatabaseBold } from './DatabaseBold';
import { DatabaseBoldDuotone } from './DatabaseBoldDuotone';
import { DatabaseFill } from './DatabaseFill';
import { DatabaseFillDuotone } from './DatabaseFillDuotone';

export interface DatabaseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Database - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DatabaseRegular } from 'stera-icons/DatabaseRegular';
 */
const Database = memo(forwardRef<SVGSVGElement, DatabaseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabaseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DatabaseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DatabaseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DatabaseFill ref={ref} {...rest} />;
  if (duotone) return <DatabaseRegularDuotone ref={ref} {...rest} />;
  return <DatabaseRegular ref={ref} {...rest} />;
}));

Database.displayName = 'Database';

// Triple export pattern (lucide-react style)
export { Database, Database as DatabaseIcon, Database as SiDatabase };
