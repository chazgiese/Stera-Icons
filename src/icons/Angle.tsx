import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AngleRegular } from './AngleRegular.js';
import { AngleRegularDuotone } from './AngleRegularDuotone.js';
import { AngleBold } from './AngleBold.js';
import { AngleBoldDuotone } from './AngleBoldDuotone.js';
import { AngleFill } from './AngleFill.js';
import { AngleFillDuotone } from './AngleFillDuotone.js';

export interface AngleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Angle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AngleRegular } from 'stera-icons/icons/AngleRegular';
 */
const Angle = memo(forwardRef<SVGSVGElement, AngleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AngleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AngleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AngleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AngleFill ref={ref} {...rest} />;
  if (duotone) return <AngleRegularDuotone ref={ref} {...rest} />;
  return <AngleRegular ref={ref} {...rest} />;
}));

Angle.displayName = 'Angle';

// Triple export pattern (lucide-react style)
export { Angle, Angle as AngleIcon, Angle as SiAngle };
export default Angle;
