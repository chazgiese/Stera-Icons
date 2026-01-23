import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RewindRegular } from './RewindRegular.js';
import { RewindRegularDuotone } from './RewindRegularDuotone.js';
import { RewindBold } from './RewindBold.js';
import { RewindBoldDuotone } from './RewindBoldDuotone.js';
import { RewindFill } from './RewindFill.js';
import { RewindFillDuotone } from './RewindFillDuotone.js';

export interface RewindProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Rewind - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RewindRegular } from 'stera-icons/icons/RewindRegular';
 */
const Rewind = memo(forwardRef<SVGSVGElement, RewindProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RewindBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RewindBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RewindFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RewindFill ref={ref} {...rest} />;
  if (duotone) return <RewindRegularDuotone ref={ref} {...rest} />;
  return <RewindRegular ref={ref} {...rest} />;
}));

Rewind.displayName = 'Rewind';

// Triple export pattern (lucide-react style)
export { Rewind, Rewind as RewindIcon, Rewind as SiRewind };
export default Rewind;
