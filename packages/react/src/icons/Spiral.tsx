import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpiralRegular } from './SpiralRegular';
import { SpiralRegularDuotone } from './SpiralRegularDuotone';
import { SpiralBold } from './SpiralBold';
import { SpiralBoldDuotone } from './SpiralBoldDuotone';
import { SpiralFill } from './SpiralFill';
import { SpiralFillDuotone } from './SpiralFillDuotone';

export interface SpiralProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Spiral - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SpiralRegular } from 'stera-icons/SpiralRegular';
 */
const Spiral = memo(forwardRef<SVGSVGElement, SpiralProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpiralBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SpiralBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SpiralFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SpiralFill ref={ref} {...rest} />;
  if (duotone) return <SpiralRegularDuotone ref={ref} {...rest} />;
  return <SpiralRegular ref={ref} {...rest} />;
}));

Spiral.displayName = 'Spiral';

// Triple export pattern (lucide-react style)
export { Spiral, Spiral as SpiralIcon, Spiral as SiSpiral };
