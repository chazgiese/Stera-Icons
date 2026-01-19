import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabasePlusRegular } from './DatabasePlusRegular';
import { DatabasePlusRegularDuotone } from './DatabasePlusRegularDuotone';
import { DatabasePlusBold } from './DatabasePlusBold';
import { DatabasePlusBoldDuotone } from './DatabasePlusBoldDuotone';
import { DatabasePlusFill } from './DatabasePlusFill';
import { DatabasePlusFillDuotone } from './DatabasePlusFillDuotone';

export interface DatabasePlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DatabasePlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DatabasePlusRegular } from 'stera-icons/icons/DatabasePlusRegular';
 */
const DatabasePlus = memo(forwardRef<SVGSVGElement, DatabasePlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabasePlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DatabasePlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DatabasePlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DatabasePlusFill ref={ref} {...rest} />;
  if (duotone) return <DatabasePlusRegularDuotone ref={ref} {...rest} />;
  return <DatabasePlusRegular ref={ref} {...rest} />;
}));

DatabasePlus.displayName = 'DatabasePlus';

// Triple export pattern (lucide-react style)
export { DatabasePlus, DatabasePlus as DatabasePlusIcon, DatabasePlus as SiDatabasePlus };
export default DatabasePlus;
