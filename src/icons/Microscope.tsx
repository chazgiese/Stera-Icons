import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MicroscopeRegular } from './MicroscopeRegular.js';
import { MicroscopeRegularDuotone } from './MicroscopeRegularDuotone.js';
import { MicroscopeBold } from './MicroscopeBold.js';
import { MicroscopeBoldDuotone } from './MicroscopeBoldDuotone.js';
import { MicroscopeFill } from './MicroscopeFill.js';
import { MicroscopeFillDuotone } from './MicroscopeFillDuotone.js';

export interface MicroscopeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Microscope - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MicroscopeRegular } from 'stera-icons/icons/MicroscopeRegular';
 */
const Microscope = memo(forwardRef<SVGSVGElement, MicroscopeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MicroscopeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MicroscopeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MicroscopeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MicroscopeFill ref={ref} {...rest} />;
  if (duotone) return <MicroscopeRegularDuotone ref={ref} {...rest} />;
  return <MicroscopeRegular ref={ref} {...rest} />;
}));

Microscope.displayName = 'Microscope';

// Triple export pattern (lucide-react style)
export { Microscope, Microscope as MicroscopeIcon, Microscope as SiMicroscope };
export default Microscope;
