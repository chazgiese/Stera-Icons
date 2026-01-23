import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DatabaseSparkleRegular } from './DatabaseSparkleRegular.js';
import { DatabaseSparkleRegularDuotone } from './DatabaseSparkleRegularDuotone.js';
import { DatabaseSparkleBold } from './DatabaseSparkleBold.js';
import { DatabaseSparkleBoldDuotone } from './DatabaseSparkleBoldDuotone.js';
import { DatabaseSparkleFill } from './DatabaseSparkleFill.js';
import { DatabaseSparkleFillDuotone } from './DatabaseSparkleFillDuotone.js';

export interface DatabaseSparkleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DatabaseSparkle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DatabaseSparkleRegular } from 'stera-icons/icons/DatabaseSparkleRegular';
 */
const DatabaseSparkle = memo(forwardRef<SVGSVGElement, DatabaseSparkleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabaseSparkleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DatabaseSparkleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DatabaseSparkleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DatabaseSparkleFill ref={ref} {...rest} />;
  if (duotone) return <DatabaseSparkleRegularDuotone ref={ref} {...rest} />;
  return <DatabaseSparkleRegular ref={ref} {...rest} />;
}));

DatabaseSparkle.displayName = 'DatabaseSparkle';

// Triple export pattern (lucide-react style)
export { DatabaseSparkle, DatabaseSparkle as DatabaseSparkleIcon, DatabaseSparkle as SiDatabaseSparkle };
export default DatabaseSparkle;
