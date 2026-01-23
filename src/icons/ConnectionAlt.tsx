import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ConnectionAltRegular } from './ConnectionAltRegular.js';
import { ConnectionAltRegularDuotone } from './ConnectionAltRegularDuotone.js';
import { ConnectionAltBold } from './ConnectionAltBold.js';
import { ConnectionAltBoldDuotone } from './ConnectionAltBoldDuotone.js';
import { ConnectionAltFill } from './ConnectionAltFill.js';
import { ConnectionAltFillDuotone } from './ConnectionAltFillDuotone.js';

export interface ConnectionAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ConnectionAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ConnectionAltRegular } from 'stera-icons/icons/ConnectionAltRegular';
 */
const ConnectionAlt = memo(forwardRef<SVGSVGElement, ConnectionAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ConnectionAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ConnectionAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ConnectionAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ConnectionAltFill ref={ref} {...rest} />;
  if (duotone) return <ConnectionAltRegularDuotone ref={ref} {...rest} />;
  return <ConnectionAltRegular ref={ref} {...rest} />;
}));

ConnectionAlt.displayName = 'ConnectionAlt';

// Triple export pattern (lucide-react style)
export { ConnectionAlt, ConnectionAlt as ConnectionAltIcon, ConnectionAlt as SiConnectionAlt };
export default ConnectionAlt;
