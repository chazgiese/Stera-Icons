import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GavelRegular } from './GavelRegular.js';
import { GavelRegularDuotone } from './GavelRegularDuotone.js';
import { GavelBold } from './GavelBold.js';
import { GavelBoldDuotone } from './GavelBoldDuotone.js';
import { GavelFill } from './GavelFill.js';
import { GavelFillDuotone } from './GavelFillDuotone.js';

export interface GavelProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gavel - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GavelRegular } from 'stera-icons/icons/GavelRegular';
 */
const Gavel = memo(forwardRef<SVGSVGElement, GavelProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GavelBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GavelBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GavelFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GavelFill ref={ref} {...rest} />;
  if (duotone) return <GavelRegularDuotone ref={ref} {...rest} />;
  return <GavelRegular ref={ref} {...rest} />;
}));

Gavel.displayName = 'Gavel';

// Triple export pattern (lucide-react style)
export { Gavel, Gavel as GavelIcon, Gavel as SiGavel };
export default Gavel;
