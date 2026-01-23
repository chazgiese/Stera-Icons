import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { WaveTriangleRegular } from './WaveTriangleRegular.js';
import { WaveTriangleRegularDuotone } from './WaveTriangleRegularDuotone.js';
import { WaveTriangleBold } from './WaveTriangleBold.js';
import { WaveTriangleBoldDuotone } from './WaveTriangleBoldDuotone.js';
import { WaveTriangleFill } from './WaveTriangleFill.js';
import { WaveTriangleFillDuotone } from './WaveTriangleFillDuotone.js';

export interface WaveTriangleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WaveTriangle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WaveTriangleRegular } from 'stera-icons/icons/WaveTriangleRegular';
 */
const WaveTriangle = memo(forwardRef<SVGSVGElement, WaveTriangleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WaveTriangleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WaveTriangleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WaveTriangleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WaveTriangleFill ref={ref} {...rest} />;
  if (duotone) return <WaveTriangleRegularDuotone ref={ref} {...rest} />;
  return <WaveTriangleRegular ref={ref} {...rest} />;
}));

WaveTriangle.displayName = 'WaveTriangle';

// Triple export pattern (lucide-react style)
export { WaveTriangle, WaveTriangle as WaveTriangleIcon, WaveTriangle as SiWaveTriangle };
export default WaveTriangle;
