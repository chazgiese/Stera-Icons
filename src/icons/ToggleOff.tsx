import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToggleOffRegular } from './ToggleOffRegular';
import { ToggleOffRegularDuotone } from './ToggleOffRegularDuotone';
import { ToggleOffBold } from './ToggleOffBold';
import { ToggleOffBoldDuotone } from './ToggleOffBoldDuotone';
import { ToggleOffFill } from './ToggleOffFill';
import { ToggleOffFillDuotone } from './ToggleOffFillDuotone';

export interface ToggleOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ToggleOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ToggleOffRegular } from 'stera-icons/icons/ToggleOffRegular';
 */
const ToggleOff = memo(forwardRef<SVGSVGElement, ToggleOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToggleOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ToggleOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ToggleOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ToggleOffFill ref={ref} {...rest} />;
  if (duotone) return <ToggleOffRegularDuotone ref={ref} {...rest} />;
  return <ToggleOffRegular ref={ref} {...rest} />;
}));

ToggleOff.displayName = 'ToggleOff';

// Triple export pattern (lucide-react style)
export { ToggleOff, ToggleOff as ToggleOffIcon, ToggleOff as SiToggleOff };
export default ToggleOff;
