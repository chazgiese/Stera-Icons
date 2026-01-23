import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlashlightRegular } from './FlashlightRegular.js';
import { FlashlightRegularDuotone } from './FlashlightRegularDuotone.js';
import { FlashlightBold } from './FlashlightBold.js';
import { FlashlightBoldDuotone } from './FlashlightBoldDuotone.js';
import { FlashlightFill } from './FlashlightFill.js';
import { FlashlightFillDuotone } from './FlashlightFillDuotone.js';

export interface FlashlightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flashlight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlashlightRegular } from 'stera-icons/icons/FlashlightRegular';
 */
const Flashlight = memo(forwardRef<SVGSVGElement, FlashlightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlashlightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlashlightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlashlightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlashlightFill ref={ref} {...rest} />;
  if (duotone) return <FlashlightRegularDuotone ref={ref} {...rest} />;
  return <FlashlightRegular ref={ref} {...rest} />;
}));

Flashlight.displayName = 'Flashlight';

// Triple export pattern (lucide-react style)
export { Flashlight, Flashlight as FlashlightIcon, Flashlight as SiFlashlight };
export default Flashlight;
