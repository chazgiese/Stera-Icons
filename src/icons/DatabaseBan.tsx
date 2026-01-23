import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DatabaseBanRegular } from './DatabaseBanRegular.js';
import { DatabaseBanRegularDuotone } from './DatabaseBanRegularDuotone.js';
import { DatabaseBanBold } from './DatabaseBanBold.js';
import { DatabaseBanBoldDuotone } from './DatabaseBanBoldDuotone.js';
import { DatabaseBanFill } from './DatabaseBanFill.js';
import { DatabaseBanFillDuotone } from './DatabaseBanFillDuotone.js';

export interface DatabaseBanProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DatabaseBan - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DatabaseBanRegular } from 'stera-icons/icons/DatabaseBanRegular';
 */
const DatabaseBan = memo(forwardRef<SVGSVGElement, DatabaseBanProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabaseBanBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DatabaseBanBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DatabaseBanFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DatabaseBanFill ref={ref} {...rest} />;
  if (duotone) return <DatabaseBanRegularDuotone ref={ref} {...rest} />;
  return <DatabaseBanRegular ref={ref} {...rest} />;
}));

DatabaseBan.displayName = 'DatabaseBan';

// Triple export pattern (lucide-react style)
export { DatabaseBan, DatabaseBan as DatabaseBanIcon, DatabaseBan as SiDatabaseBan };
export default DatabaseBan;
