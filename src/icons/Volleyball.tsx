import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { VolleyballRegular } from './VolleyballRegular.js';
import { VolleyballRegularDuotone } from './VolleyballRegularDuotone.js';
import { VolleyballBold } from './VolleyballBold.js';
import { VolleyballBoldDuotone } from './VolleyballBoldDuotone.js';
import { VolleyballFill } from './VolleyballFill.js';
import { VolleyballFillDuotone } from './VolleyballFillDuotone.js';

export interface VolleyballProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Volleyball - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { VolleyballRegular } from 'stera-icons/icons/VolleyballRegular';
 */
const Volleyball = memo(forwardRef<SVGSVGElement, VolleyballProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <VolleyballBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <VolleyballBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <VolleyballFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <VolleyballFill ref={ref} {...rest} />;
  if (duotone) return <VolleyballRegularDuotone ref={ref} {...rest} />;
  return <VolleyballRegular ref={ref} {...rest} />;
}));

Volleyball.displayName = 'Volleyball';

// Triple export pattern (lucide-react style)
export { Volleyball, Volleyball as VolleyballIcon, Volleyball as SiVolleyball };
export default Volleyball;
