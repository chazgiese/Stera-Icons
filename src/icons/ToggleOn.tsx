import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToggleOnRegular } from './ToggleOnRegular';
import { ToggleOnRegularDuotone } from './ToggleOnRegularDuotone';
import { ToggleOnBold } from './ToggleOnBold';
import { ToggleOnBoldDuotone } from './ToggleOnBoldDuotone';
import { ToggleOnFill } from './ToggleOnFill';
import { ToggleOnFillDuotone } from './ToggleOnFillDuotone';

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
