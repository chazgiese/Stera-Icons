import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ToggleOnRegular } from './ToggleOnRegular.js';
import { ToggleOnRegularDuotone } from './ToggleOnRegularDuotone.js';
import { ToggleOnBold } from './ToggleOnBold.js';
import { ToggleOnBoldDuotone } from './ToggleOnBoldDuotone.js';
import { ToggleOnFill } from './ToggleOnFill.js';
import { ToggleOnFillDuotone } from './ToggleOnFillDuotone.js';

export interface ToggleOnProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ToggleOn - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ToggleOnRegular } from 'stera-icons/icons/ToggleOnRegular';
 */
const ToggleOn = memo(forwardRef<SVGSVGElement, ToggleOnProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToggleOnBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ToggleOnBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ToggleOnFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ToggleOnFill ref={ref} {...rest} />;
  if (duotone) return <ToggleOnRegularDuotone ref={ref} {...rest} />;
  return <ToggleOnRegular ref={ref} {...rest} />;
}));

ToggleOn.displayName = 'ToggleOn';

// Triple export pattern (lucide-react style)
export { ToggleOn, ToggleOn as ToggleOnIcon, ToggleOn as SiToggleOn };
export default ToggleOn;
