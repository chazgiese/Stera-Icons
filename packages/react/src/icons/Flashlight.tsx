import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlashlightRegular } from './FlashlightRegular';
import { FlashlightRegularDuotone } from './FlashlightRegularDuotone';
import { FlashlightBold } from './FlashlightBold';
import { FlashlightBoldDuotone } from './FlashlightBoldDuotone';
import { FlashlightFill } from './FlashlightFill';
import { FlashlightFillDuotone } from './FlashlightFillDuotone';

export interface FlashlightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flashlight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlashlightRegular } from 'stera-icons/FlashlightRegular';
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
