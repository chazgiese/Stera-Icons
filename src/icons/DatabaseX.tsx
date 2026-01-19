import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DatabaseXRegular } from './DatabaseXRegular';
import { DatabaseXRegularDuotone } from './DatabaseXRegularDuotone';
import { DatabaseXBold } from './DatabaseXBold';
import { DatabaseXBoldDuotone } from './DatabaseXBoldDuotone';
import { DatabaseXFill } from './DatabaseXFill';
import { DatabaseXFillDuotone } from './DatabaseXFillDuotone';

export interface DatabaseXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DatabaseX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DatabaseXRegular } from 'stera-icons/icons/DatabaseXRegular';
 */
const DatabaseX = memo(forwardRef<SVGSVGElement, DatabaseXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DatabaseXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DatabaseXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DatabaseXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DatabaseXFill ref={ref} {...rest} />;
  if (duotone) return <DatabaseXRegularDuotone ref={ref} {...rest} />;
  return <DatabaseXRegular ref={ref} {...rest} />;
}));

DatabaseX.displayName = 'DatabaseX';

// Triple export pattern (lucide-react style)
export { DatabaseX, DatabaseX as DatabaseXIcon, DatabaseX as SiDatabaseX };
