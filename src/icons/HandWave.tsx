import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HandWaveRegular } from './HandWaveRegular.js';
import { HandWaveRegularDuotone } from './HandWaveRegularDuotone.js';
import { HandWaveBold } from './HandWaveBold.js';
import { HandWaveBoldDuotone } from './HandWaveBoldDuotone.js';
import { HandWaveFill } from './HandWaveFill.js';
import { HandWaveFillDuotone } from './HandWaveFillDuotone.js';

export interface HandWaveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HandWave - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HandWaveRegular } from 'stera-icons/icons/HandWaveRegular';
 */
const HandWave = memo(forwardRef<SVGSVGElement, HandWaveProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandWaveBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HandWaveBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HandWaveFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HandWaveFill ref={ref} {...rest} />;
  if (duotone) return <HandWaveRegularDuotone ref={ref} {...rest} />;
  return <HandWaveRegular ref={ref} {...rest} />;
}));

HandWave.displayName = 'HandWave';

// Triple export pattern (lucide-react style)
export { HandWave, HandWave as HandWaveIcon, HandWave as SiHandWave };
export default HandWave;
