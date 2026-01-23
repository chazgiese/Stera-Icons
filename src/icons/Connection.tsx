import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ConnectionRegular } from './ConnectionRegular.js';
import { ConnectionRegularDuotone } from './ConnectionRegularDuotone.js';
import { ConnectionBold } from './ConnectionBold.js';
import { ConnectionBoldDuotone } from './ConnectionBoldDuotone.js';
import { ConnectionFill } from './ConnectionFill.js';
import { ConnectionFillDuotone } from './ConnectionFillDuotone.js';

export interface ConnectionProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Connection - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ConnectionRegular } from 'stera-icons/icons/ConnectionRegular';
 */
const Connection = memo(forwardRef<SVGSVGElement, ConnectionProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ConnectionBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ConnectionBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ConnectionFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ConnectionFill ref={ref} {...rest} />;
  if (duotone) return <ConnectionRegularDuotone ref={ref} {...rest} />;
  return <ConnectionRegular ref={ref} {...rest} />;
}));

Connection.displayName = 'Connection';

// Triple export pattern (lucide-react style)
export { Connection, Connection as ConnectionIcon, Connection as SiConnection };
export default Connection;
