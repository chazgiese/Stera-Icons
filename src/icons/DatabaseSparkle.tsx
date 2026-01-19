import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabaseSparkleRegular } from './DatabaseSparkleRegular';
import { DatabaseSparkleRegularDuotone } from './DatabaseSparkleRegularDuotone';
import { DatabaseSparkleBold } from './DatabaseSparkleBold';
import { DatabaseSparkleBoldDuotone } from './DatabaseSparkleBoldDuotone';
import { DatabaseSparkleFill } from './DatabaseSparkleFill';
import { DatabaseSparkleFillDuotone } from './DatabaseSparkleFillDuotone';

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
