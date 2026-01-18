import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ConnectionRegular } from './ConnectionRegular';
import { ConnectionRegularDuotone } from './ConnectionRegularDuotone';
import { ConnectionBold } from './ConnectionBold';
import { ConnectionBoldDuotone } from './ConnectionBoldDuotone';
import { ConnectionFill } from './ConnectionFill';
import { ConnectionFillDuotone } from './ConnectionFillDuotone';

export interface ConnectionProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Connection - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ConnectionRegular } from 'stera-icons/ConnectionRegular';
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
