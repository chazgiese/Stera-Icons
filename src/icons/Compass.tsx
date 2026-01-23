import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CompassRegular } from './CompassRegular.js';
import { CompassRegularDuotone } from './CompassRegularDuotone.js';
import { CompassBold } from './CompassBold.js';
import { CompassBoldDuotone } from './CompassBoldDuotone.js';
import { CompassFill } from './CompassFill.js';
import { CompassFillDuotone } from './CompassFillDuotone.js';

export interface CompassProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Compass - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CompassRegular } from 'stera-icons/icons/CompassRegular';
 */
const Compass = memo(forwardRef<SVGSVGElement, CompassProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CompassBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CompassBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CompassFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CompassFill ref={ref} {...rest} />;
  if (duotone) return <CompassRegularDuotone ref={ref} {...rest} />;
  return <CompassRegular ref={ref} {...rest} />;
}));

Compass.displayName = 'Compass';

// Triple export pattern (lucide-react style)
export { Compass, Compass as CompassIcon, Compass as SiCompass };
export default Compass;
