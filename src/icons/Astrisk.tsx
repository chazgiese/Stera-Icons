import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AstriskRegular } from './AstriskRegular.js';
import { AstriskRegularDuotone } from './AstriskRegularDuotone.js';
import { AstriskBold } from './AstriskBold.js';
import { AstriskBoldDuotone } from './AstriskBoldDuotone.js';
import { AstriskFill } from './AstriskFill.js';
import { AstriskFillDuotone } from './AstriskFillDuotone.js';

export interface AstriskProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Astrisk - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AstriskRegular } from 'stera-icons/icons/AstriskRegular';
 */
const Astrisk = memo(forwardRef<SVGSVGElement, AstriskProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AstriskBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AstriskBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AstriskFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AstriskFill ref={ref} {...rest} />;
  if (duotone) return <AstriskRegularDuotone ref={ref} {...rest} />;
  return <AstriskRegular ref={ref} {...rest} />;
}));

Astrisk.displayName = 'Astrisk';

// Triple export pattern (lucide-react style)
export { Astrisk, Astrisk as AstriskIcon, Astrisk as SiAstrisk };
export default Astrisk;
