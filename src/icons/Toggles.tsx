import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TogglesRegular } from './TogglesRegular.js';
import { TogglesRegularDuotone } from './TogglesRegularDuotone.js';
import { TogglesBold } from './TogglesBold.js';
import { TogglesBoldDuotone } from './TogglesBoldDuotone.js';
import { TogglesFill } from './TogglesFill.js';
import { TogglesFillDuotone } from './TogglesFillDuotone.js';

export interface TogglesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Toggles - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TogglesRegular } from 'stera-icons/icons/TogglesRegular';
 */
const Toggles = memo(forwardRef<SVGSVGElement, TogglesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TogglesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TogglesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TogglesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TogglesFill ref={ref} {...rest} />;
  if (duotone) return <TogglesRegularDuotone ref={ref} {...rest} />;
  return <TogglesRegular ref={ref} {...rest} />;
}));

Toggles.displayName = 'Toggles';

// Triple export pattern (lucide-react style)
export { Toggles, Toggles as TogglesIcon, Toggles as SiToggles };
export default Toggles;
