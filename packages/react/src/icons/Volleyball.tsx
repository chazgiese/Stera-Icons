import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { VolleyballRegular } from './VolleyballRegular';
import { VolleyballRegularDuotone } from './VolleyballRegularDuotone';
import { VolleyballBold } from './VolleyballBold';
import { VolleyballBoldDuotone } from './VolleyballBoldDuotone';
import { VolleyballFill } from './VolleyballFill';
import { VolleyballFillDuotone } from './VolleyballFillDuotone';

export interface VolleyballProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Volleyball - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { VolleyballRegular } from 'stera-icons/VolleyballRegular';
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
