import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DatabaseRegular } from './DatabaseRegular.js';
import { DatabaseRegularDuotone } from './DatabaseRegularDuotone.js';
import { DatabaseBold } from './DatabaseBold.js';
import { DatabaseBoldDuotone } from './DatabaseBoldDuotone.js';
import { DatabaseFill } from './DatabaseFill.js';
import { DatabaseFillDuotone } from './DatabaseFillDuotone.js';

export interface DatabaseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Database - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DatabaseRegular } from 'stera-icons/icons/DatabaseRegular';
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
export default Database;
