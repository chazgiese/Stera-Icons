import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AudioBarsRegular } from './AudioBarsRegular.js';
import { AudioBarsRegularDuotone } from './AudioBarsRegularDuotone.js';
import { AudioBarsBold } from './AudioBarsBold.js';
import { AudioBarsBoldDuotone } from './AudioBarsBoldDuotone.js';
import { AudioBarsFill } from './AudioBarsFill.js';
import { AudioBarsFillDuotone } from './AudioBarsFillDuotone.js';

export interface AudioBarsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AudioBars - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AudioBarsRegular } from 'stera-icons/icons/AudioBarsRegular';
 */
const AudioBars = memo(forwardRef<SVGSVGElement, AudioBarsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AudioBarsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AudioBarsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AudioBarsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AudioBarsFill ref={ref} {...rest} />;
  if (duotone) return <AudioBarsRegularDuotone ref={ref} {...rest} />;
  return <AudioBarsRegular ref={ref} {...rest} />;
}));

AudioBars.displayName = 'AudioBars';

// Triple export pattern (lucide-react style)
export { AudioBars, AudioBars as AudioBarsIcon, AudioBars as SiAudioBars };
export default AudioBars;
