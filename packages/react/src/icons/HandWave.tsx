import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandWaveRegular } from './HandWaveRegular';
import { HandWaveRegularDuotone } from './HandWaveRegularDuotone';
import { HandWaveBold } from './HandWaveBold';
import { HandWaveBoldDuotone } from './HandWaveBoldDuotone';
import { HandWaveFill } from './HandWaveFill';
import { HandWaveFillDuotone } from './HandWaveFillDuotone';

export interface HandWaveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HandWave with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { HandWaveRegular } from 'stera-icons/HandWaveRegular';
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

export { HandWave };
